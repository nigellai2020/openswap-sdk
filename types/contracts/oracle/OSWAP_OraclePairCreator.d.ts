import { IWallet, Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export declare class OSWAP_OraclePairCreator extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
    createPair: {
        (salt: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (salt: string, options?: TransactionOptions) => Promise<string>;
    };
    private assign;
}
