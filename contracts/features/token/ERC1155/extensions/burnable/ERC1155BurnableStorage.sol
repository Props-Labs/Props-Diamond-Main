// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

library ERC1155BurnableStorage {
    struct Layout {
        uint256 pausedUntil;
    }

    bytes32 internal constant STORAGE_SLOT = keccak256("v1.flair.contracts.storage.ERC1155Burnable");

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}
