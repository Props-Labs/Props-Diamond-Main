// SPDX-License-Identifier: AGPL-3.0

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

import "../core/ERC721BaseDistributor.sol";

contract ERC721HolderVestedDistributor is
    Ownable,
    Initializable,
    ERC721BaseDistributor
{
    using Address for address;
    using Address for address payable;

    string public constant name = "ERC721 Vested Distributor";

    string public constant version = "0.1";

    struct Config {
        address claimToken;
        address ticketToken;
        uint256 vestingRate;
        uint256 vestingTimeUnit;
        uint256 claimStart;
        uint256 claimEnd;
    }

    uint256 public vestingRate;
    uint256 public vestingTimeUnit;
    uint256 public claimStart;
    uint256 public claimEnd;

    /* INTERNAL */

    constructor(Config memory config) {
        initialize(msg.sender, config);
    }

    // To enable factory cloning
    function initialize(address owner, Config memory config)
        public
        initializer
    {
        Ownable._transferOwnership(owner);
        ERC721BaseDistributor._setup(config.claimToken, config.ticketToken);

        vestingRate = config.vestingRate;
        vestingTimeUnit = config.vestingTimeUnit;
        claimStart = config.claimStart;
        claimEnd = config.claimEnd;
    }

    /* PUBLIC */

    function setVestingRate(uint256 newValue) public onlyOwner {
        vestingRate = newValue;
    }

    function setVestingTimeUnit(uint256 newValue) public onlyOwner {
        vestingTimeUnit = newValue;
    }

    function setClaimStart(uint256 newValue) public onlyOwner {
        claimStart = newValue;
    }

    function setClaimEnd(uint256 newValue) public onlyOwner {
        claimEnd = newValue;
    }

    function _beforeClaim(uint256 ticketTokenId) internal view override {
        require(claimStart < block.timestamp, "DISTRIBUTOR/NOT_STARTED");

        require(
            entitlements[ticketTokenId].lastClaimedAt <
                block.timestamp - vestingTimeUnit,
            "DISTRIBUTOR/TOO_EARLY"
        );
    }

    function calculateClaimableAmount(uint256 ticketTokenId)
        public
        view
        override
        returns (uint256 claimableAmount)
    {
        claimableAmount =
            calculateClaimableAmountUntil(
                claimEnd > 0 && block.timestamp > claimEnd
                    ? claimEnd
                    : block.timestamp
            ) -
            entitlements[ticketTokenId].totalClaimed;
    }

    function calculateClaimableAmountUntil(uint256 calcUntil)
        public
        view
        returns (uint256)
    {
        if (calcUntil < claimStart) {
            return 0;
        }

        return
            vestingRate *
            // Intentionally rounded down:
            ((calcUntil - claimStart) / vestingTimeUnit);
    }

    function calculateReleasedAmount(uint256 ticketTokenId)
        public
        view
        returns (uint256 releasedAmount)
    {
        releasedAmount =
            calculateReleasedAmountUntil(
                claimEnd > 0 && block.timestamp > claimEnd
                    ? claimEnd
                    : block.timestamp
            ) -
            entitlements[ticketTokenId].totalClaimed;
    }

    function calculateReleasedAmountUntil(uint256 calcUntil)
        public
        view
        returns (uint256)
    {
        return ((calcUntil - claimStart) * vestingRate) / vestingTimeUnit;
    }
}
