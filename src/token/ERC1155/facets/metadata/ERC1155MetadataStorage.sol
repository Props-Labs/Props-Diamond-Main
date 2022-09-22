// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

library ERC1155MetadataStorage {
    bytes32 internal constant STORAGE_SLOT = keccak256("v2.flair.contracts.storage.ERC1155Metadata");

    struct Layout {
        string baseURI;
        bool baseURILocked;
        string fallbackURI;
        bool fallbackURILocked;
        string uriSuffix;
        bool uriSuffixLocked;
        uint256 lastLockedTokenId;
        mapping(uint256 => string) tokenURIs;
    }

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}
