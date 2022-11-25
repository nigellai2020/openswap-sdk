import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    pairCreator: string;
    tradeFee: number | BigNumber;
    protocolFee: number | BigNumber;
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
export interface ISetLiveForPairParams {
    pair: string;
    live: boolean;
}
export declare class OSWAP_Factory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): OSWAP_Factory.PairCreatedEvent;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_Factory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_Factory.PairShutdownedEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_Factory.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_Factory.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_Factory.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_Factory.ParamSet2Event;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_Factory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_Factory.ShutdownedEvent;
    allPairs: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    allPairsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    createPair: {
        (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
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
    pairCreator: {
        (options?: TransactionOptions): Promise<string>;
    };
    protocolFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    protocolFeeParams: {
        (options?: TransactionOptions): Promise<{
            _protocolFee: BigNumber;
            _protocolFeeTo: string;
        }>;
    };
    protocolFeeTo: {
        (options?: TransactionOptions): Promise<string>;
    };
    setLive: {
        (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
    };
    setLiveForPair: {
        (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
    };
    setProtocolFee: {
        (protocolFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setProtocolFeeTo: {
        (protocolFeeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (protocolFeeTo: string, options?: TransactionOptions) => Promise<void>;
    };
    setTradeFee: {
        (tradeFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    tradeFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    private assign;
}
export declare module OSWAP_Factory {
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
