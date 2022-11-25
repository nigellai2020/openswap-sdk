import { IWallet, Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
export declare class OSWAP_PausablePair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    isLive: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    setLive: {
        (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
