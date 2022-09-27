/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

export interface FlairFactoryInterface extends ethers.utils.Interface {
  functions: {
    "cloneDeterministicSimple(address,bytes32,bytes)": FunctionFragment;
    "initialize()": FunctionFragment;
    "lockWithdrawMode()": FunctionFragment;
    "lockWithdrawRecipient()": FunctionFragment;
    "owner()": FunctionFragment;
    "predictDeterministicSimple(address,bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "revokeWithdrawPower()": FunctionFragment;
    "setWithdrawMode(uint8)": FunctionFragment;
    "setWithdrawRecipient(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address[],uint256[])": FunctionFragment;
    "withdrawMode()": FunctionFragment;
    "withdrawModeLocked()": FunctionFragment;
    "withdrawPowerRevoked()": FunctionFragment;
    "withdrawRecipient()": FunctionFragment;
    "withdrawRecipientLocked()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cloneDeterministicSimple",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockWithdrawMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockWithdrawRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "predictDeterministicSimple",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeWithdrawPower",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setWithdrawMode",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWithdrawRecipient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawModeLocked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawPowerRevoked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRecipientLocked",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cloneDeterministicSimple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockWithdrawMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockWithdrawRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "predictDeterministicSimple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeWithdrawPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWithdrawMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWithdrawRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawModeLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawPowerRevoked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRecipientLocked",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProxyCreated(address,address)": EventFragment;
    "WithdrawPowerRevoked()": EventFragment;
    "Withdrawn(address[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProxyCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawPowerRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ProxyCreatedEvent = TypedEvent<
  [string, string] & { deployer: string; proxyAddress: string }
>;

export type WithdrawPowerRevokedEvent = TypedEvent<[] & {}>;

export type WithdrawnEvent = TypedEvent<
  [string[], BigNumber[]] & { claimTokens: string[]; amounts: BigNumber[] }
>;

export class FlairFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FlairFactoryInterface;

  functions: {
    cloneDeterministicSimple(
      implementation: string,
      salt: BytesLike,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lockWithdrawMode(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lockWithdrawRecipient(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    predictDeterministicSimple(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { deployedProxy: string }>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeWithdrawPower(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWithdrawMode(
      _withdrawMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWithdrawRecipient(
      _withdrawRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      claimTokens: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawMode(overrides?: CallOverrides): Promise<[number]>;

    withdrawModeLocked(overrides?: CallOverrides): Promise<[boolean]>;

    withdrawPowerRevoked(overrides?: CallOverrides): Promise<[boolean]>;

    withdrawRecipient(overrides?: CallOverrides): Promise<[string]>;

    withdrawRecipientLocked(overrides?: CallOverrides): Promise<[boolean]>;
  };

  cloneDeterministicSimple(
    implementation: string,
    salt: BytesLike,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lockWithdrawMode(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lockWithdrawRecipient(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  predictDeterministicSimple(
    implementation: string,
    salt: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeWithdrawPower(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWithdrawMode(
    _withdrawMode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWithdrawRecipient(
    _withdrawRecipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    claimTokens: string[],
    amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawMode(overrides?: CallOverrides): Promise<number>;

  withdrawModeLocked(overrides?: CallOverrides): Promise<boolean>;

  withdrawPowerRevoked(overrides?: CallOverrides): Promise<boolean>;

  withdrawRecipient(overrides?: CallOverrides): Promise<string>;

  withdrawRecipientLocked(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    cloneDeterministicSimple(
      implementation: string,
      salt: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    lockWithdrawMode(overrides?: CallOverrides): Promise<void>;

    lockWithdrawRecipient(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    predictDeterministicSimple(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    revokeWithdrawPower(overrides?: CallOverrides): Promise<void>;

    setWithdrawMode(
      _withdrawMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setWithdrawRecipient(
      _withdrawRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      claimTokens: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawMode(overrides?: CallOverrides): Promise<number>;

    withdrawModeLocked(overrides?: CallOverrides): Promise<boolean>;

    withdrawPowerRevoked(overrides?: CallOverrides): Promise<boolean>;

    withdrawRecipient(overrides?: CallOverrides): Promise<string>;

    withdrawRecipientLocked(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "ProxyCreated(address,address)"(
      deployer?: string | null,
      proxyAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { deployer: string; proxyAddress: string }
    >;

    ProxyCreated(
      deployer?: string | null,
      proxyAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { deployer: string; proxyAddress: string }
    >;

    "WithdrawPowerRevoked()"(): TypedEventFilter<[], {}>;

    WithdrawPowerRevoked(): TypedEventFilter<[], {}>;

    "Withdrawn(address[],uint256[])"(
      claimTokens?: null,
      amounts?: null
    ): TypedEventFilter<
      [string[], BigNumber[]],
      { claimTokens: string[]; amounts: BigNumber[] }
    >;

    Withdrawn(
      claimTokens?: null,
      amounts?: null
    ): TypedEventFilter<
      [string[], BigNumber[]],
      { claimTokens: string[]; amounts: BigNumber[] }
    >;
  };

  estimateGas: {
    cloneDeterministicSimple(
      implementation: string,
      salt: BytesLike,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lockWithdrawMode(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lockWithdrawRecipient(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    predictDeterministicSimple(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeWithdrawPower(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWithdrawMode(
      _withdrawMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWithdrawRecipient(
      _withdrawRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      claimTokens: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawMode(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawModeLocked(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawPowerRevoked(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawRecipientLocked(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cloneDeterministicSimple(
      implementation: string,
      salt: BytesLike,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lockWithdrawMode(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lockWithdrawRecipient(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    predictDeterministicSimple(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeWithdrawPower(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWithdrawMode(
      _withdrawMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWithdrawRecipient(
      _withdrawRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      claimTokens: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawModeLocked(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawPowerRevoked(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawRecipientLocked(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
