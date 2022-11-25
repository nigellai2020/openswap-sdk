import { IWallet, Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface ISetLiveForPairParams {
    pair: string;
    live: boolean;
}
export declare class OSWAP_PausableFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string, options?: TransactionOptions): Promise<string>;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_PausableFactory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_PausableFactory.PairShutdownedEvent;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_PausableFactory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_PausableFactory.ShutdownedEvent;
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    isLive: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    setLive: {
        (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
    };
    setLiveForPair: {
        (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_PausableFactory {
    interface PairRestartedEvent {
        pair: string;
        _event: Event;
    }
    interface PairShutdownedEvent {
        pair: string;
        _event: Event;
    }
    interface RestartedEvent {
        _event: Event;
    }
    interface ShutdownedEvent {
        _event: Event;
    }
}
