/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155Base, ERC1155BaseInterface } from "../ERC1155Base";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
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
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611640806100206000396000f3fe608060405234801561001057600080fd5b50600436106100715760003560e01c8063a22cb46511610050578063a22cb465146100d1578063e985e9c5146100e4578063f242432a1461014f57600080fd5b8062fdd58e146100765780632eb2c2d61461009c5780634e1273f4146100b1575b600080fd5b610089610084366004610f83565b610162565b6040519081526020015b60405180910390f35b6100af6100aa366004611085565b610175565b005b6100c46100bf366004611189565b61025e565b604051610093919061128f565b6100af6100df3660046112a2565b610485565b61013f6100f23660046112de565b6001600160a01b0391821660009081527ff9ecf3cb86ac553c70621e3e662b4036163ca34fffb329385fafa0e130cfc1a86020908152604080832093909416825291909152205460ff1690565b6040519015158152602001610093565b6100af61015d366004611311565b610591565b600061016e8383610677565b9392505050565b336001600160a01b0386168114806101d157506001600160a01b0380871660009081527ff9ecf3cb86ac553c70621e3e662b4036163ca34fffb329385fafa0e130cfc1a8602090815260408083209385168352929052205460ff165b6102485760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f766564000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61025681878787878761073c565b505050505050565b606081518351146102d75760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d617463680000000000000000000000000000000000000000000000606482015260840161023f565b82517ff9ecf3cb86ac553c70621e3e662b4036163ca34fffb329385fafa0e130cfc1a79060009067ffffffffffffffff81111561031657610316610fad565b60405190808252806020026020018201604052801561033f578160200160208202803683370190505b50905060005b855181101561047c5760006001600160a01b031686828151811061036b5761036b6113b7565b60200260200101516001600160a01b0316036103ef5760405162461bcd60e51b815260206004820152603160248201527f455243313135353a2062617463682062616c616e636520717565727920666f7260448201527f20746865207a65726f2061646472657373000000000000000000000000000000606482015260840161023f565b826000868381518110610404576104046113b7565b60200260200101518152602001908152602001600020600087838151811061042e5761042e6113b7565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610469576104696113b7565b6020908102919091010152600101610345565b50949350505050565b336001600160a01b03831681036105045760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c660000000000000000000000000000000000000000000000606482015260840161023f565b6001600160a01b0381811660008181527ff9ecf3cb86ac553c70621e3e662b4036163ca34fffb329385fafa0e130cfc1a86020908152604080832094881680845294825291829020805460ff1916871515908117909155825190815291517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319281900390910190a3505050565b336001600160a01b0387168114806105ed57506001600160a01b0380881660009081527ff9ecf3cb86ac553c70621e3e662b4036163ca34fffb329385fafa0e130cfc1a8602090815260408083209385168352929052205460ff165b61065f5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f7665640000000000000000000000000000000000000000000000606482015260840161023f565b61066e81888888888888610758565b50505050505050565b60006001600160a01b0383166106f55760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f2061646472657373000000000000000000000000000000000000000000606482015260840161023f565b7ff9ecf3cb86ac553c70621e3e662b4036163ca34fffb329385fafa0e130cfc1a76000928352602090815260408084206001600160a01b0395909516845293905250205490565b61074a8686868686866107ab565b610256868686868686610a3f565b61076787878787878787610bfc565b61066e878787878787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e0892505050565b6001600160a01b03841661080f5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b606482015260840161023f565b81518351146108865760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161023f565b7ff9ecf3cb86ac553c70621e3e662b4036163ca34fffb329385fafa0e130cfc1a760005b84518110156109de5760008582815181106108c7576108c76113b7565b6020026020010151905060008583815181106108e5576108e56113b7565b602090810291909101810151600084815286835260408082206001600160a01b038e16835290935291909120549091508181101561098b5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a20696e73756666696369656e742062616c616e636573206660448201527f6f72207472616e73666572000000000000000000000000000000000000000000606482015260840161023f565b6000838152602086815260408083206001600160a01b038e811685529252808320938590039093558a1681529081208054600195909501948392906109d19084906113cd565b909155506108aa92505050565b50846001600160a01b0316866001600160a01b0316886001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610a2e9291906113f3565b60405180910390a450505050505050565b6001600160a01b0384163b156102565760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610a83908990899088908890889060040161146e565b6020604051808303816000875af1925050508015610abe575060408051601f3d908101601f19168201909252610abb918101906114cc565b60015b610b7357610aca61150e565b806308c379a003610b035750610ade61152a565b80610ae95750610b05565b8060405162461bcd60e51b815260040161023f91906115b4565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161023f565b7fffffffff00000000000000000000000000000000000000000000000000000000811663bc197c8160e01b1461066e5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840161023f565b6001600160a01b038516610c605760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b606482015260840161023f565b610cb4878787610c6f88610f1c565b610c7888610f1c565b87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061025692505050565b60008481527ff9ecf3cb86ac553c70621e3e662b4036163ca34fffb329385fafa0e130cfc1a7602081815260408084206001600160a01b038b1685529091529091205484811015610d6d5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a20696e73756666696369656e742062616c616e636573206660448201527f6f72207472616e73666572000000000000000000000000000000000000000000606482015260840161023f565b6000868152602083815260408083206001600160a01b038c81168552925280832093889003909355881681529081208054869290610dac9084906113cd565b909155505060408051868152602081018690526001600160a01b03808916928a821692918c16917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050505050565b6001600160a01b0384163b156102565760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610e4c90899089908890889088906004016115c7565b6020604051808303816000875af1925050508015610e87575060408051601f3d908101601f19168201909252610e84918101906114cc565b60015b610e9357610aca61150e565b7fffffffff00000000000000000000000000000000000000000000000000000000811663f23a6e6160e01b1461066e5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840161023f565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610f5657610f566113b7565b602090810291909101015292915050565b80356001600160a01b0381168114610f7e57600080fd5b919050565b60008060408385031215610f9657600080fd5b610f9f83610f67565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610fe957610fe9610fad565b6040525050565b600067ffffffffffffffff82111561100a5761100a610fad565b5060051b60200190565b600082601f83011261102557600080fd5b8135602061103282610ff0565b60405161103f8282610fc3565b83815260059390931b850182019282810191508684111561105f57600080fd5b8286015b8481101561107a5780358352918301918301611063565b509695505050505050565b600080600080600060a0868803121561109d57600080fd5b6110a686610f67565b945060206110b5818801610f67565b9450604087013567ffffffffffffffff808211156110d257600080fd5b6110de8a838b01611014565b955060608901359150808211156110f457600080fd5b6111008a838b01611014565b9450608089013591508082111561111657600080fd5b818901915089601f83011261112a57600080fd5b81358181111561113c5761113c610fad565b6040519150611154601f8201601f1916850183610fc3565b8082528a8482850101111561116857600080fd5b80848401858401376000848284010152508093505050509295509295909350565b6000806040838503121561119c57600080fd5b823567ffffffffffffffff808211156111b457600080fd5b818501915085601f8301126111c857600080fd5b813560206111d582610ff0565b6040516111e28282610fc3565b83815260059390931b850182019282810191508984111561120257600080fd5b948201945b838610156112275761121886610f67565b82529482019490820190611207565b9650508601359250508082111561123d57600080fd5b5061124a85828601611014565b9150509250929050565b600081518084526020808501945080840160005b8381101561128457815187529582019590820190600101611268565b509495945050505050565b60208152600061016e6020830184611254565b600080604083850312156112b557600080fd5b6112be83610f67565b9150602083013580151581146112d357600080fd5b809150509250929050565b600080604083850312156112f157600080fd5b6112fa83610f67565b915061130860208401610f67565b90509250929050565b60008060008060008060a0878903121561132a57600080fd5b61133387610f67565b955061134160208801610f67565b94506040870135935060608701359250608087013567ffffffffffffffff8082111561136c57600080fd5b818901915089601f83011261138057600080fd5b81358181111561138f57600080fd5b8a60208285010111156113a157600080fd5b6020830194508093505050509295509295509295565b634e487b7160e01b600052603260045260246000fd5b600082198211156113ee57634e487b7160e01b600052601160045260246000fd5b500190565b6040815260006114066040830185611254565b82810360208401526114188185611254565b95945050505050565b6000815180845260005b818110156114475760208185018101518683018201520161142b565b81811115611459576000602083870101525b50601f01601f19169290920160200192915050565b60006001600160a01b03808816835280871660208401525060a0604083015261149a60a0830186611254565b82810360608401526114ac8186611254565b905082810360808401526114c08185611421565b98975050505050505050565b6000602082840312156114de57600080fd5b81517fffffffff000000000000000000000000000000000000000000000000000000008116811461016e57600080fd5b600060033d11156115275760046000803e5060005160e01c5b90565b600060443d10156115385790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561156857505050505090565b82850191508151818111156115805750505050505090565b843d870101602082850101111561159a5750505050505090565b6115a960208286010187610fc3565b509095945050505050565b60208152600061016e6020830184611421565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a060808301526115ff60a0830184611421565b97965050505050505056fea264697066735822122013ff89c98e2a5a3bf25df2005c3b9fe3ce5282e8999bf67f2b94f6bf8096b0f264736f6c634300080f0033";

export class ERC1155Base__factory extends ContractFactory {
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
  ): Promise<ERC1155Base> {
    return super.deploy(overrides || {}) as Promise<ERC1155Base>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155Base {
    return super.attach(address) as ERC1155Base;
  }
  connect(signer: Signer): ERC1155Base__factory {
    return super.connect(signer) as ERC1155Base__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155BaseInterface {
    return new utils.Interface(_abi) as ERC1155BaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Base {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Base;
  }
}
