// SPDX-License-Identifier: AGPL-3.0

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165Storage.sol";
import "@openzeppelin/contracts/utils/structs/BitMaps.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "./ERC721LockableExtension.sol";

interface IERC721RoleBasedLockableExtension {
    function hasRoleBasedLockableExtension() external view returns (bool);

    function lock(uint256[] calldata) external;

    function unlock(uint256[] calldata) external;
}

/**
 * @dev Extension to allow locking NFTs, for use-cases like staking, without leaving holders wallet, using roles.
 */
abstract contract ERC721RoleBasedLockableExtension is
    IERC721RoleBasedLockableExtension,
    ERC721LockableExtension,
    AccessControl
{
    using BitMaps for BitMaps.BitMap;

    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");

    function __ERC721RoleBasedLockableExtension_init()
        internal
        onlyInitializing
    {
        __ERC721RoleBasedLockableExtension_init_unchained();
    }

    function __ERC721RoleBasedLockableExtension_init_unchained()
        internal
        onlyInitializing
    {
        _registerInterface(type(IERC721RoleBasedLockableExtension).interfaceId);
    }

    // ADMIN

    /**
     * Locks token(s) to effectively lock them, while keeping in the same wallet.
     * This mechanism prevents them from being transferred, yet still will show correct owner.
     */
    function lock(uint256[] calldata tokenIds) public virtual nonReentrant {
        require(hasRole(LOCKER_ROLE, msg.sender), "ERC721/NOT_LOCKER_ROLE");

        for (uint256 i = 0; i < tokenIds.length; i++) {
            _lock(tokenIds[i]);
        }
    }

    /**
     * Unlocks locked token(s) to be able to transfer.
     */
    function unlock(uint256[] calldata tokenIds) public virtual nonReentrant {
        require(hasRole(LOCKER_ROLE, msg.sender), "ERC721/NOT_LOCKER_ROLE");

        for (uint256 i = 0; i < tokenIds.length; i++) {
            _unlock(tokenIds[i]);
        }
    }

    // PUBLIC

    function hasRoleBasedLockableExtension()
        public
        view
        virtual
        returns (bool)
    {
        return true;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(AccessControl, ERC721LockableExtension)
        returns (bool)
    {
        return ERC165Storage.supportsInterface(interfaceId);
    }
}