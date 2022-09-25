/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IERC1155MetadataAdmin,
  IERC1155MetadataAdminInterface,
} from "../IERC1155MetadataAdmin";

const _abi = [
  {
    inputs: [],
    name: "lockBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockFallbackURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockURISuffix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "lockURIUntil",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newFallbackURI",
        type: "string",
      },
    ],
    name: "setFallbackURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "newTokenURI",
        type: "string",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "newTokenURIs",
        type: "string[]",
      },
    ],
    name: "setURIBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newURIPrefix",
        type: "string",
      },
    ],
    name: "setURISuffix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC1155MetadataAdmin__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1155MetadataAdminInterface {
    return new utils.Interface(_abi) as IERC1155MetadataAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1155MetadataAdmin {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC1155MetadataAdmin;
  }
}
