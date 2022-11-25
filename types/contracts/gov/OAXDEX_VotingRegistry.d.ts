import { IWallet, Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface INewVoteParams {
    executor: string;
    name: string;
    options: string[];
    quorum: number | BigNumber;
    threshold: number | BigNumber;
    voteEndTime: number | BigNumber;
    executeDelay: number | BigNumber;
    executeParam: string[];
}
export declare class OAXDEX_VotingRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string, options?: TransactionOptions): Promise<string>;
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    newVote: {
        (params: INewVoteParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewVoteParams, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
