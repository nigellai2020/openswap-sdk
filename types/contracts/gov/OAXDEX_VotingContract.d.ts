import { IWallet, Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    executor: string;
    id: number | BigNumber;
    name: string;
    options: string[];
    quorum: number | BigNumber;
    threshold: number | BigNumber;
    voteEndTime: number | BigNumber;
    executeDelay: number | BigNumber;
    executeParam: string[];
}
export declare class OAXDEX_VotingContract extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    _executeParam: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    _options: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    _optionsWeight: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    accountVoteOption: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    accountVoteWeight: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    execute: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    executeDelay: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    executeParam: {
        (options?: TransactionOptions): Promise<string[]>;
    };
    executed: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    executor: {
        (options?: TransactionOptions): Promise<string>;
    };
    getParams: {
        (options?: TransactionOptions): Promise<{
            executor_: string;
            id_: BigNumber;
            name_: string;
            options_: string[];
            voteStartTime_: BigNumber;
            voteEndTime_: BigNumber;
            executeDelay_: BigNumber;
            status_: boolean[];
            optionsWeight_: BigNumber[];
            quorum_: BigNumber[];
            executeParam_: string[];
        }>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    id: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
    };
    options: {
        (options?: TransactionOptions): Promise<string[]>;
    };
    optionsCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    optionsWeight: {
        (options?: TransactionOptions): Promise<BigNumber[]>;
    };
    quorum: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    threshold: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    totalVoteWeight: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    totalWeight: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    updateWeight: {
        (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account: string, options?: TransactionOptions) => Promise<void>;
    };
    veto: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    vetoed: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    vote: {
        (option: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (option: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    voteEndTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    voteStartTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    private assign;
}
