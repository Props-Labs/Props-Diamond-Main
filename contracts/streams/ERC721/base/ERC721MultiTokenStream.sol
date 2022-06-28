// SPDX-License-Identifier: AGPL-3.0

pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165Storage.sol";

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IERC721MultiTokenStream {
    // Claim native currency for a single ticket token
    function claim(uint256 ticketTokenId) external;

    // Claim an erc20 claim token for a single ticket token
    function claim(uint256 ticketTokenId, address claimToken) external;

    // Claim native currency for multiple ticket tokens (only if all owned by sender)
    function claim(uint256[] calldata ticketTokenIds) external;

    // Claim native or erc20 tokens for multiple ticket tokens (only if all owned by `owner`)
    function claim(
        uint256[] calldata ticketTokenIds,
        address claimToken,
        address owner
    ) external;

    // Total native currency ever supplied to this stream
    function streamTotalSupply() external view returns (uint256);

    // Total erc20 token ever supplied to this stream by claim token address
    function streamTotalSupply(address claimToken)
        external
        view
        returns (uint256);

    // Total native currency ever claimed from this stream
    function streamTotalClaimed() external view returns (uint256);

    // Total erc20 token ever claimed from this stream by claim token address
    function streamTotalClaimed(address claimToken)
        external
        view
        returns (uint256);

    // Total native currency ever claimed for a single ticket token
    function streamTotalClaimed(uint256 ticketTokenId)
        external
        view
        returns (uint256);

    // Total native currency ever claimed for multiple token IDs
    function streamTotalClaimed(uint256[] calldata ticketTokenIds)
        external
        view
        returns (uint256);

    // Total erc20 token ever claimed for multiple token IDs
    function streamTotalClaimed(
        uint256[] calldata ticketTokenIds,
        address claimToken
    ) external view returns (uint256);

    // Calculate currently claimable amount for a specific ticket token ID and a specific claim token address
    // Pass 0x0000000000000000000000000000000000000000 as claim token to represent native currency
    function claimableAmount(uint256 ticketTokenId, address claimToken)
        external
        view
        returns (uint256 claimableAmount);
}

abstract contract ERC721MultiTokenStream is
    IERC721MultiTokenStream,
    Initializable,
    ERC165Storage,
    OwnableUpgradeable,
    ReentrancyGuard
{
    using Address for address;
    using Address for address payable;

    struct Entitlement {
        uint256 totalClaimed;
        uint256 lastClaimedAt;
    }

    // Config
    address public ticketToken;

    // Locks changing the config until this timestamp is reached
    uint64 public lockedUntilTimestamp;

    // Map of ticket token ID -> claim token address -> entitlement
    mapping(uint256 => mapping(address => Entitlement)) public entitlements;

    // Map of claim token address -> Total amount claimed by all holders
    mapping(address => uint256) internal _streamTotalClaimed;

    /* EVENTS */

    event Claim(
        address operator,
        address beneficiary,
        uint256 ticketTokenId,
        address claimToken,
        uint256 releasedAmount
    );

    event ClaimMany(
        address operator,
        address beneficiary,
        uint256[] ticketTokenIds,
        address claimToken,
        uint256 releasedAmount
    );

    function __ERC721MultiTokenStream_init(
        address _ticketToken,
        uint64 _lockedUntilTimestamp
    ) internal onlyInitializing {
        __Context_init();
        __ERC721MultiTokenStream_init_unchained(
            _ticketToken,
            _lockedUntilTimestamp
        );
    }

    function __ERC721MultiTokenStream_init_unchained(
        address _ticketToken,
        uint64 _lockedUntilTimestamp
    ) internal onlyInitializing {
        ticketToken = _ticketToken;
        lockedUntilTimestamp = _lockedUntilTimestamp;

        _registerInterface(type(IERC721MultiTokenStream).interfaceId);
    }

    /* ADMIN */

    function lockUntil(uint64 newValue) public onlyOwner {
        require(newValue > lockedUntilTimestamp, "STREAM/CANNOT_REWIND");
        lockedUntilTimestamp = newValue;
    }

    /* PUBLIC */

    receive() external payable {
        require(msg.value > 0);
    }

    function claim(uint256 ticketTokenId) public {
        claim(ticketTokenId, address(0));
    }

    function claim(uint256 ticketTokenId, address claimToken)
        public
        nonReentrant
    {
        /* CHECKS */

        _beforeClaim(ticketTokenId, claimToken);

        address owner = IERC721(ticketToken).ownerOf(ticketTokenId);
        uint256 claimable = claimableAmount(ticketTokenId, claimToken);
        require(claimable > 0, "STREAM/NOTHING_TO_CLAIM");

        /* EFFECTS */

        entitlements[ticketTokenId][claimToken].totalClaimed += claimable;
        entitlements[ticketTokenId][claimToken].lastClaimedAt = block.timestamp;

        _streamTotalClaimed[claimToken] += claimable;

        /* INTERACTIONS */

        if (claimToken == address(0)) {
            payable(address(owner)).sendValue(claimable);
        } else {
            IERC20(claimToken).transfer(owner, claimable);
        }

        /* LOGS */

        emit Claim(_msgSender(), owner, ticketTokenId, claimToken, claimable);
    }

    function claim(uint256[] calldata ticketTokenIds) public {
        claim(ticketTokenIds, address(0), _msgSender());
    }

    function claim(
        uint256[] calldata ticketTokenIds,
        address claimToken,
        address owner
    ) public nonReentrant {
        uint256 totalClaimable;

        for (uint256 i = 0; i < ticketTokenIds.length; i++) {
            _beforeClaim(ticketTokenIds[i], claimToken);

            /* CHECKS */
            require(
                IERC721(ticketToken).ownerOf(ticketTokenIds[i]) == owner,
                "STREAM/NOT_NFT_OWNER"
            );

            /* EFFECTS */
            uint256 claimable = claimableAmount(ticketTokenIds[i], claimToken);

            if (claimable > 0) {
                entitlements[ticketTokenIds[i]][claimToken]
                    .totalClaimed += claimable;
                entitlements[ticketTokenIds[i]][claimToken]
                    .lastClaimedAt = block.timestamp;

                totalClaimable += claimable;
            }
        }

        _streamTotalClaimed[claimToken] += totalClaimable;

        /* INTERACTIONS */

        if (claimToken == address(0)) {
            payable(address(owner)).sendValue(totalClaimable);
        } else {
            IERC20(claimToken).transfer(owner, totalClaimable);
        }

        /* LOGS */

        emit ClaimMany(
            _msgSender(),
            owner,
            ticketTokenIds,
            claimToken,
            totalClaimable
        );
    }

    /* READ ONLY */

    function streamTotalSupply() public view returns (uint256) {
        return streamTotalSupply(address(0));
    }

    function streamTotalSupply(address claimToken)
        public
        view
        returns (uint256)
    {
        if (claimToken == address(0)) {
            return _streamTotalClaimed[claimToken] + address(this).balance;
        }

        return
            _streamTotalClaimed[claimToken] +
            IERC20(claimToken).balanceOf(address(this));
    }

    function streamTotalClaimed() public view returns (uint256) {
        return _streamTotalClaimed[address(0)];
    }

    function streamTotalClaimed(address claimToken)
        public
        view
        returns (uint256)
    {
        return _streamTotalClaimed[claimToken];
    }

    function streamTotalClaimed(uint256 ticketTokenId)
        public
        view
        returns (uint256)
    {
        return entitlements[ticketTokenId][address(0)].totalClaimed;
    }

    function streamTotalClaimed(uint256 ticketTokenId, address claimToken)
        public
        view
        returns (uint256)
    {
        return entitlements[ticketTokenId][claimToken].totalClaimed;
    }

    function streamTotalClaimed(uint256[] calldata ticketTokenIds)
        public
        view
        returns (uint256)
    {
        return streamTotalClaimed(ticketTokenIds, address(0));
    }

    function streamTotalClaimed(
        uint256[] calldata ticketTokenIds,
        address claimToken
    ) public view returns (uint256) {
        uint256 claimed = 0;

        for (uint256 i = 0; i < ticketTokenIds.length; i++) {
            claimed += entitlements[ticketTokenIds[i]][claimToken].totalClaimed;
        }

        return claimed;
    }

    function claimableAmount(
        uint256[] calldata ticketTokenIds,
        address claimToken
    ) public view returns (uint256) {
        uint256 claimable = 0;

        for (uint256 i = 0; i < ticketTokenIds.length; i++) {
            claimable += claimableAmount(ticketTokenIds[i], claimToken);
        }

        return claimable;
    }

    function claimableAmount(uint256 ticketTokenId)
        public
        view
        returns (uint256)
    {
        return claimableAmount(ticketTokenId, address(0));
    }

    function claimableAmount(uint256 ticketTokenId, address claimToken)
        public
        view
        virtual
        returns (uint256)
    {
        uint256 totalReleased = _totalTokenShare(
            _totalReleasedAmount(
                streamTotalSupply(claimToken),
                ticketTokenId,
                claimToken
            ),
            ticketTokenId,
            claimToken
        );

        return
            totalReleased -
            entitlements[ticketTokenId][claimToken].totalClaimed;
    }

    function _totalReleasedAmount(
        uint256 streamTotalSupply_,
        uint256 ticketTokenId_,
        address claimToken_
    ) internal view virtual returns (uint256);

    function _totalTokenShare(
        uint256 totalReleasedAmount_,
        uint256 ticketTokenId_,
        address claimToken_
    ) internal view virtual returns (uint256);

    /* INTERNAL */

    function _beforeClaim(uint256 ticketTokenId_, address claimToken_)
        internal
        view
        virtual
    {}
}
