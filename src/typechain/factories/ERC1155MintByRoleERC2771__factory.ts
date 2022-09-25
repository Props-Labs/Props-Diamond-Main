/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155MintByRoleERC2771,
  ERC1155MintByRoleERC2771Interface,
} from "../ERC1155MintByRoleERC2771";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintByRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506107a9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806372642f5614610046578063a217fddf1461005b578063d539139314610075575b600080fd5b6100596100543660046104d4565b61009c565b005b610063600081565b60405190815260200160405180910390f35b6100637f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66100c681610141565b6040517fb164884b000000000000000000000000000000000000000000000000000000008152309063b164884b90610108908890889088908890600401610620565b600060405180830381600087803b15801561012257600080fd5b505af1158015610136573d6000803e3d6000fd5b505050505050505050565b6101528161014d610155565b610164565b50565b600061015f610212565b905090565b60008281527f2e59e4c2e927cdddbb64e181e0668d9a0fa70dd88f94d999cd87d5496a20da626020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661020e576101c381610265565b6101ce83602061028e565b6040516020016101df929190610665565b60408051601f198184030181529082905262461bcd60e51b8252610205916004016106e6565b60405180910390fd5b5050565b7fdb1d5e345c4903e9a32b6674ecc8b1deaddbbb2551474fb34c9d34becbe7f4205460009073ffffffffffffffffffffffffffffffffffffffff163303610260575060131936013560601c90565b503390565b606061028873ffffffffffffffffffffffffffffffffffffffff8316601461028e565b92915050565b6060600061029d83600261070f565b6102a890600261072e565b67ffffffffffffffff8111156102c0576102c06104be565b6040519080825280601f01601f1916602001820160405280156102ea576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061032157610321610746565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061038457610384610746565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006103c084600261070f565b6103cb90600161072e565b90505b6001811115610468577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061040c5761040c610746565b1a60f81b82828151811061042257610422610746565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c936104618161075c565b90506103ce565b5083156104b75760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610205565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156104ea57600080fd5b843573ffffffffffffffffffffffffffffffffffffffff8116811461050e57600080fd5b93506020850135925060408501359150606085013567ffffffffffffffff8082111561053957600080fd5b818701915087601f83011261054d57600080fd5b81358181111561055f5761055f6104be565b604051601f8201601f19908116603f01168101908382118183101715610587576105876104be565b816040528281528a60208487010111156105a057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60005b838110156105df5781810151838201526020016105c7565b838111156105ee576000848401525b50505050565b6000815180845261060c8160208601602086016105c4565b601f01601f19169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8516815283602082015282604082015260806060820152600061065b60808301846105f4565b9695505050505050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161069d8160178501602088016105c4565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516106da8160288401602088016105c4565b01602801949350505050565b6020815260006104b760208301846105f4565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610729576107296106f9565b500290565b60008219821115610741576107416106f9565b500190565b634e487b7160e01b600052603260045260246000fd5b60008161076b5761076b6106f9565b50600019019056fea26469706673582212209bf567503d526d7d91404b1a689812b8d757a746880cf936cca2d446a38b933c64736f6c634300080f0033";

export class ERC1155MintByRoleERC2771__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155MintByRoleERC2771> {
    return super.deploy(overrides || {}) as Promise<ERC1155MintByRoleERC2771>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155MintByRoleERC2771 {
    return super.attach(address) as ERC1155MintByRoleERC2771;
  }
  connect(signer: Signer): ERC1155MintByRoleERC2771__factory {
    return super.connect(signer) as ERC1155MintByRoleERC2771__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155MintByRoleERC2771Interface {
    return new utils.Interface(_abi) as ERC1155MintByRoleERC2771Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155MintByRoleERC2771 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155MintByRoleERC2771;
  }
}
