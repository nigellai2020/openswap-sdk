import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    oracleFactory: string;
    pairCreator: string;
    tradeFee: number | BigNumber;
    stakeAmount: (number | BigNumber)[];
    liquidityProviderShare: (number | BigNumber)[];
    protocolFeeTo: string;
}
export interface ICreatePairParams {
    tokenA: string;
    tokenB: string;
}
export interface IGetPairParams {
    param1: string;
    param2: string;
}
export interface ISetLiquidityProviderShareParams {
    stakeAmount: (number | BigNumber)[];
    liquidityProviderShare: (number | BigNumber)[];
}
export interface ISetLiveForPairParams {
    pair: string;
    live: boolean;
}
export declare class OSWAP_RangeFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OSWAP_RangeFactory.OwnershipTransferredEvent;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): OSWAP_RangeFactory.PairCreatedEvent;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_RangeFactory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_RangeFactory.PairShutdownedEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_RangeFactory.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_RangeFactory.ParamSet2Event;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_RangeFactory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_RangeFactory.ShutdownedEvent;
    allPairs: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    allPairsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    checkAndGetSwapParams: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    createPair: {
        (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
    };
    getAllLiquidityProviderShare: {
        (options?: TransactionOptions): Promise<{
            _stakeAmount: BigNumber[];
            _liquidityProviderShare: BigNumber[];
        }>;
    };
    getCreateAddresses: {
        (options?: TransactionOptions): Promise<{
            _governance: string;
            _rangeLiquidityProvider: string;
            _oracleFactory: string;
        }>;
    };
    getLiquidityProviderShare: {
        (stake: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    getPair: {
        (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    isLive: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    liquidityProviderShare: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    oracleFactory: {
        (options?: TransactionOptions): Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    pairCreator: {
        (options?: TransactionOptions): Promise<string>;
    };
    protocolFeeTo: {
        (options?: TransactionOptions): Promise<string>;
    };
    rangeLiquidityProvider: {
        (options?: TransactionOptions): Promise<string>;
    };
    renounceOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    setLiquidityProviderShare: {
        (params: ISetLiquidityProviderShareParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetLiquidityProviderShareParams, options?: TransactionOptions) => Promise<void>;
    };
    setLive: {
        (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
    };
    setLiveForPair: {
        (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
    };
    setProtocolFeeTo: {
        (protocolFeeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (protocolFeeTo: string, options?: TransactionOptions) => Promise<void>;
    };
    setRangeLiquidityProvider: {
        (rangeLiquidityProvider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (rangeLiquidityProvider: string, options?: TransactionOptions) => Promise<void>;
    };
    setTradeFee: {
        (tradeFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    stakeAmount: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    tradeFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_RangeFactory {
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface PairCreatedEvent {
        token0: string;
        token1: string;
        pair: string;
        newSize: BigNumber;
        _event: Event;
    }
    interface PairRestartedEvent {
        pair: string;
        _event: Event;
    }
    interface PairShutdownedEvent {
        pair: string;
        _event: Event;
    }
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
    interface ParamSet2Event {
        name: string;
        value1: string;
        value2: string;
        _event: Event;
    }
    interface RestartedEvent {
        _event: Event;
    }
    interface ShutdownedEvent {
        _event: Event;
    }
}
