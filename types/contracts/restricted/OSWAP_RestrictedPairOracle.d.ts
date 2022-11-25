import { IWallet, Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IGetLatestPriceParams {
    from: string;
    to: string;
    payload: string;
}
export interface IGetRatioParams {
    from: string;
    to: string;
    param3: number | BigNumber;
    param4: number | BigNumber;
    param5: string;
    payload: string;
}
export interface IIsSupportedParams {
    param1: string;
    param2: string;
}
export declare class OSWAP_RestrictedPairOracle extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    WEI: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getLatestPrice: {
        (params: IGetLatestPriceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    getRatio: {
        (params: IGetRatioParams, options?: TransactionOptions): Promise<{
            numerator: BigNumber;
            denominator: BigNumber;
        }>;
    };
    isSupported: {
        (params: IIsSupportedParams, options?: TransactionOptions): Promise<boolean>;
    };
    private assign;
}
