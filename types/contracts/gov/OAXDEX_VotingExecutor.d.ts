import { IWallet, Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    admin: string;
}
export declare class OAXDEX_VotingExecutor extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    admin: {
        (options?: TransactionOptions): Promise<string>;
    };
    execute: {
        (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: string[], options?: TransactionOptions) => Promise<void>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
