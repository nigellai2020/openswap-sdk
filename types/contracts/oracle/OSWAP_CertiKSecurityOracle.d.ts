import { IWallet, Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export declare class OSWAP_CertiKSecurityOracle extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(oracleAddress: string, options?: TransactionOptions): Promise<string>;
    getSecurityScore: {
        (oracle: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    oracleAddress: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
