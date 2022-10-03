// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "./IWithdrawable.sol";

library WithdrawableStorage {
    struct Layout {
        address recipient;
        bool recipientLocked;
        bool powerRevoked;
        IWithdrawable.Mode mode;
        bool modeLocked;
    }

    bytes32 internal constant STORAGE_SLOT = keccak256("v2.flair.contracts.storage.Withdrawable");

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}
