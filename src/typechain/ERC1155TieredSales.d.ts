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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

export interface ERC1155TieredSalesInterface extends ethers.utils.Interface {
  functions: {
    "eligibleForTier(uint256,address,uint256,bytes32[])": FunctionFragment;
    "mintByTier(uint256,uint256,uint256,bytes32[])": FunctionFragment;
    "onTierAllowlist(uint256,address,uint256,bytes32[])": FunctionFragment;
    "remainingForTier(uint256)": FunctionFragment;
    "reservedMints()": FunctionFragment;
    "tierMints(uint256)": FunctionFragment;
    "tierToTokenId(uint256)": FunctionFragment;
    "tiers(uint256)": FunctionFragment;
    "totalReserved()": FunctionFragment;
    "walletMintedByTier(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "eligibleForTier",
    values: [BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "mintByTier",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "onTierAllowlist",
    values: [BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "remainingForTier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reservedMints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tierMints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tierToTokenId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tiers", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "totalReserved",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "walletMintedByTier",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "eligibleForTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintByTier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onTierAllowlist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remainingForTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reservedMints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tierMints", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tierToTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tiers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalReserved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "walletMintedByTier",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class ERC1155TieredSales extends BaseContract {
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

  interface: ERC1155TieredSalesInterface;

  functions: {
    eligibleForTier(
      tierId: BigNumberish,
      minter: string,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxMintable: BigNumber }>;

    mintByTier(
      tierId: BigNumberish,
      count: BigNumberish,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onTierAllowlist(
      tierId: BigNumberish,
      minter: string,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    remainingForTier(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    reservedMints(overrides?: CallOverrides): Promise<[BigNumber]>;

    tierMints(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tierToTokenId(uint256)"(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tierToTokenId(uint256[])"(
      tierIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    tiers(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          string,
          BigNumber,
          BigNumber,
          string,
          BigNumber,
          BigNumber
        ] & {
          start: BigNumber;
          end: BigNumber;
          currency: string;
          price: BigNumber;
          maxPerWallet: BigNumber;
          merkleRoot: string;
          reserved: BigNumber;
          maxAllocation: BigNumber;
        }
      ]
    >;

    totalReserved(overrides?: CallOverrides): Promise<[BigNumber]>;

    walletMintedByTier(
      tierId: BigNumberish,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  eligibleForTier(
    tierId: BigNumberish,
    minter: string,
    maxAllowance: BigNumberish,
    proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mintByTier(
    tierId: BigNumberish,
    count: BigNumberish,
    maxAllowance: BigNumberish,
    proof: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onTierAllowlist(
    tierId: BigNumberish,
    minter: string,
    maxAllowance: BigNumberish,
    proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  remainingForTier(
    tierId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  reservedMints(overrides?: CallOverrides): Promise<BigNumber>;

  tierMints(
    tierId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tierToTokenId(uint256)"(
    tierId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tierToTokenId(uint256[])"(
    tierIds: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  tiers(
    tierId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      BigNumber
    ] & {
      start: BigNumber;
      end: BigNumber;
      currency: string;
      price: BigNumber;
      maxPerWallet: BigNumber;
      merkleRoot: string;
      reserved: BigNumber;
      maxAllocation: BigNumber;
    }
  >;

  totalReserved(overrides?: CallOverrides): Promise<BigNumber>;

  walletMintedByTier(
    tierId: BigNumberish,
    wallet: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    eligibleForTier(
      tierId: BigNumberish,
      minter: string,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintByTier(
      tierId: BigNumberish,
      count: BigNumberish,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    onTierAllowlist(
      tierId: BigNumberish,
      minter: string,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    remainingForTier(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reservedMints(overrides?: CallOverrides): Promise<BigNumber>;

    tierMints(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tierToTokenId(uint256)"(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tierToTokenId(uint256[])"(
      tierIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    tiers(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
      ] & {
        start: BigNumber;
        end: BigNumber;
        currency: string;
        price: BigNumber;
        maxPerWallet: BigNumber;
        merkleRoot: string;
        reserved: BigNumber;
        maxAllocation: BigNumber;
      }
    >;

    totalReserved(overrides?: CallOverrides): Promise<BigNumber>;

    walletMintedByTier(
      tierId: BigNumberish,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
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
  };

  estimateGas: {
    eligibleForTier(
      tierId: BigNumberish,
      minter: string,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintByTier(
      tierId: BigNumberish,
      count: BigNumberish,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onTierAllowlist(
      tierId: BigNumberish,
      minter: string,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remainingForTier(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reservedMints(overrides?: CallOverrides): Promise<BigNumber>;

    tierMints(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tierToTokenId(uint256)"(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tierToTokenId(uint256[])"(
      tierIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tiers(tierId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    totalReserved(overrides?: CallOverrides): Promise<BigNumber>;

    walletMintedByTier(
      tierId: BigNumberish,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    eligibleForTier(
      tierId: BigNumberish,
      minter: string,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintByTier(
      tierId: BigNumberish,
      count: BigNumberish,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onTierAllowlist(
      tierId: BigNumberish,
      minter: string,
      maxAllowance: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remainingForTier(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reservedMints(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tierMints(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tierToTokenId(uint256)"(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tierToTokenId(uint256[])"(
      tierIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tiers(
      tierId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalReserved(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    walletMintedByTier(
      tierId: BigNumberish,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}