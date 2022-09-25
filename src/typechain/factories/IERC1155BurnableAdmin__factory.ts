/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IERC1155BurnableAdmin,
  IERC1155BurnableAdminInterface,
} from "../IERC1155BurnableAdmin";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    name: "setBurnablePausedUntil",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC1155BurnableAdmin__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1155BurnableAdminInterface {
    return new utils.Interface(_abi) as IERC1155BurnableAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1155BurnableAdmin {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC1155BurnableAdmin;
  }
}
