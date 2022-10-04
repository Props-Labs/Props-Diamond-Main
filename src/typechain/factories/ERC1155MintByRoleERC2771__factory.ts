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
        internalType: "address[]",
        name: "tos",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
    ],
    name: "mintByRole",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50610b29806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806368da19ec1461005157806372642f5614610066578063a217fddf14610079578063d539139314610093575b600080fd5b61006461005f3660046105d9565b6100ba565b005b6100646100743660046106dc565b61016b565b610081600081565b60405190815260200160405180910390f35b6100817f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66100e481610210565b6040517f0a13c5030000000000000000000000000000000000000000000000000000000081523090630a13c5039061012e908c908c908c908c908c908c908c908c90600401610829565b600060405180830381600087803b15801561014857600080fd5b505af115801561015c573d6000803e3d6000fd5b50505050505050505050505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661019581610210565b6040517fb164884b000000000000000000000000000000000000000000000000000000008152309063b164884b906101d79088908890889088906004016109a0565b600060405180830381600087803b1580156101f157600080fd5b505af1158015610205573d6000803e3d6000fd5b505050505050505050565b6102218161021c610224565b610233565b50565b600061022e6102e1565b905090565b60008281527f2e59e4c2e927cdddbb64e181e0668d9a0fa70dd88f94d999cd87d5496a20da626020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166102dd5761029281610334565b61029d83602061035d565b6040516020016102ae9291906109e5565b60408051601f198184030181529082905262461bcd60e51b82526102d491600401610a66565b60405180910390fd5b5050565b7fdb1d5e345c4903e9a32b6674ecc8b1deaddbbb2551474fb34c9d34becbe7f4205460009073ffffffffffffffffffffffffffffffffffffffff16330361032f575060131936013560601c90565b503390565b606061035773ffffffffffffffffffffffffffffffffffffffff8316601461035d565b92915050565b6060600061036c836002610a8f565b610377906002610aae565b67ffffffffffffffff81111561038f5761038f6106c6565b6040519080825280601f01601f1916602001820160405280156103b9576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106103f0576103f0610ac6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061045357610453610ac6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600061048f846002610a8f565b61049a906001610aae565b90505b6001811115610537577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106104db576104db610ac6565b1a60f81b8282815181106104f1576104f1610ac6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c9361053081610adc565b905061049d565b5083156105865760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016102d4565b9392505050565b60008083601f84011261059f57600080fd5b50813567ffffffffffffffff8111156105b757600080fd5b6020830191508360208260051b85010111156105d257600080fd5b9250929050565b6000806000806000806000806080898b0312156105f557600080fd5b883567ffffffffffffffff8082111561060d57600080fd5b6106198c838d0161058d565b909a50985060208b013591508082111561063257600080fd5b61063e8c838d0161058d565b909850965060408b013591508082111561065757600080fd5b6106638c838d0161058d565b909650945060608b013591508082111561067c57600080fd5b506106898b828c0161058d565b999c989b5096995094979396929594505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146106c157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156106f257600080fd5b6106fb8561069d565b93506020850135925060408501359150606085013567ffffffffffffffff8082111561072657600080fd5b818701915087601f83011261073a57600080fd5b81358181111561074c5761074c6106c6565b604051601f8201601f19908116603f01168101908382118183101715610774576107746106c6565b816040528281528a602084870101111561078d57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156107e357600080fd5b8260051b8083602087013760009401602001938452509192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6080808252810188905260008960a08301825b8b8110156108775773ffffffffffffffffffffffffffffffffffffffff6108628461069d565b1682526020928301929091019060010161083c565b50602091508381038285015261088e818a8c6107b1565b905083810360408501526108a381888a6107b1565b84810360608601528581529050818101600586901b820183018760005b8881101561093057848303601f190184528135368b9003601e190181126108e657600080fd5b8a01868101903567ffffffffffffffff81111561090257600080fd5b80360382131561091157600080fd5b61091c858284610800565b9588019594505050908501906001016108c0565b50909e9d5050505050505050505050505050565b60005b8381101561095f578181015183820152602001610947565b8381111561096e576000848401525b50505050565b6000815180845261098c816020860160208601610944565b601f01601f19169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff851681528360208201528260408201526080606082015260006109db6080830184610974565b9695505050505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610a1d816017850160208801610944565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351610a5a816028840160208801610944565b01602801949350505050565b6020815260006105866020830184610974565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610aa957610aa9610a79565b500290565b60008219821115610ac157610ac1610a79565b500190565b634e487b7160e01b600052603260045260246000fd5b600081610aeb57610aeb610a79565b50600019019056fea26469706673582212204fa703d8b77187d3c2cd24e55c71f08425f5bec08d5663ee3db12c684bb752c364736f6c634300080f0033";

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