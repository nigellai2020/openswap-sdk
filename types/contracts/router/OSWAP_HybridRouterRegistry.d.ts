import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IInitParams {
    name: string[];
    factory: string[];
    fee: (number | BigNumber)[];
    feeBase: (number | BigNumber)[];
    typeCode: (number | BigNumber)[];
}
export interface IRegisterPairParams {
    token0: string;
    token1: string;
    pairAddress: string;
    fee: number | BigNumber;
    feeBase: number | BigNumber;
    typeCode: number | BigNumber;
}
export interface IRegisterPairByAddressParams {
    factory: string;
    pairAddress: string;
}
export interface IRegisterPairByIndexParams {
    factory: string;
    index: number | BigNumber;
}
export interface IRegisterPairByTokensParams {
    factory: string;
    token0: string;
    token1: string;
}
export interface IRegisterPairByTokensV3Params {
    factory: string;
    token0: string;
    token1: string;
    pairIndex: number | BigNumber;
}
export interface IRegisterPairsByAddressParams {
    factory: string;
    pairAddress: string[];
}
export interface IRegisterPairsByAddress2Params {
    factory: string[];
    pairAddress: string[];
}
export interface IRegisterPairsByIndexParams {
    factory: string;
    index: (number | BigNumber)[];
}
export interface IRegisterPairsByTokensParams {
    factory: string;
    token0: string[];
    token1: string[];
}
export interface IRegisterPairsByTokensV3Params {
    factory: string;
    token0: string[];
    token1: string[];
    pairIndex: (number | BigNumber)[];
}
export interface IRegisterProtocolParams {
    name: string;
    factory: string;
    fee: number | BigNumber;
    feeBase: number | BigNumber;
    typeCode: number | BigNumber;
}
export declare class OSWAP_HybridRouterRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string, options?: TransactionOptions): Promise<string>;
    parseCustomPairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent[];
    decodeCustomPairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent;
    parsePairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.PairRegisterEvent[];
    decodePairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.PairRegisterEvent;
    parseProtocolRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent[];
    decodeProtocolRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent;
    customPairs: {
        (param1: string, options?: TransactionOptions): Promise<{
            fee: BigNumber;
            feeBase: BigNumber;
            typeCode: BigNumber;
        }>;
    };
    execute: {
        (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: string[], options?: TransactionOptions) => Promise<void>;
    };
    getFee: {
        (pairAddress: string, options?: TransactionOptions): Promise<{
            fee: BigNumber;
            feeBase: BigNumber;
        }>;
    };
    getPairTokens: {
        (pairAddress: string[], options?: TransactionOptions): Promise<{
            token0: string[];
            token1: string[];
        }>;
    };
    getTypeCode: {
        (pairAddress: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    init: {
        (params: IInitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitParams, options?: TransactionOptions) => Promise<void>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    pairs: {
        (param1: string, options?: TransactionOptions): Promise<{
            factory: string;
            token0: string;
            token1: string;
        }>;
    };
    protocolList: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    protocolListLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    protocols: {
        (param1: string, options?: TransactionOptions): Promise<{
            name: string;
            fee: BigNumber;
            feeBase: BigNumber;
            typeCode: BigNumber;
        }>;
    };
    registerPair: {
        (params: IRegisterPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterPairParams, options?: TransactionOptions) => Promise<void>;
    };
    registerPairByAddress: {
        (params: IRegisterPairByAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByAddressParams, options?: TransactionOptions) => Promise<void>;
    };
    registerPairByIndex: {
        (params: IRegisterPairByIndexParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByIndexParams, options?: TransactionOptions) => Promise<void>;
    };
    registerPairByTokens: {
        (params: IRegisterPairByTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    registerPairByTokensV3: {
        (params: IRegisterPairByTokensV3Params, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterPairByTokensV3Params, options?: TransactionOptions) => Promise<void>;
    };
    registerPairsByAddress: {
        (params: IRegisterPairsByAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByAddressParams, options?: TransactionOptions) => Promise<void>;
    };
    registerPairsByAddress2: {
        (params: IRegisterPairsByAddress2Params, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByAddress2Params, options?: TransactionOptions) => Promise<void>;
    };
    registerPairsByIndex: {
        (params: IRegisterPairsByIndexParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByIndexParams, options?: TransactionOptions) => Promise<void>;
    };
    registerPairsByTokens: {
        (params: IRegisterPairsByTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    registerPairsByTokensV3: {
        (params: IRegisterPairsByTokensV3Params, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterPairsByTokensV3Params, options?: TransactionOptions) => Promise<void>;
    };
    registerProtocol: {
        (params: IRegisterProtocolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterProtocolParams, options?: TransactionOptions) => Promise<void>;
    };
    renounceOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_HybridRouterRegistry {
    interface CustomPairRegisterEvent {
        pair: string;
        fee: BigNumber;
        feeBase: BigNumber;
        typeCode: BigNumber;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface PairRegisterEvent {
        factory: string;
        pair: string;
        token0: string;
        token1: string;
        _event: Event;
    }
    interface ProtocolRegisterEvent {
        factory: string;
        name: string;
        fee: BigNumber;
        feeBase: BigNumber;
        typeCode: BigNumber;
        _event: Event;
    }
}
