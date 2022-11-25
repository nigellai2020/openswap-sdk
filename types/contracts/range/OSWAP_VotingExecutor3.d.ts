import { IWallet, Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    factory: string;
    hybridRegistry: string;
}
export declare class OSWAP_VotingExecutor3 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    execute: {
        (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: string[], options?: TransactionOptions) => Promise<void>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    hybridRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
