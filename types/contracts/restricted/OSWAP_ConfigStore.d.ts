import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface ISetCustomParamParams {
    paramName: string;
    paramValue: string;
}
export interface ISetMultiCustomParamParams {
    paramName: string[];
    paramValue: string[];
}
export declare class OSWAP_ConfigStore extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string, options?: TransactionOptions): Promise<string>;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_ConfigStore.ParamSetEvent;
    customParam: {
        (param1: string, options?: TransactionOptions): Promise<string>;
    };
    customParamNames: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    customParamNamesIdx: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    customParamNamesLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    setCustomParam: {
        (params: ISetCustomParamParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetCustomParamParams, options?: TransactionOptions) => Promise<void>;
    };
    setMultiCustomParam: {
        (params: ISetMultiCustomParamParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetMultiCustomParamParams, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_ConfigStore {
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
}
