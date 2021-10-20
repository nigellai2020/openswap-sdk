import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_HybridRouter extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        oracleFactory: string;
        WETH: string;
    }): Promise<string>;
    WETH(): Promise<string>;
    getAmountsIn(params: {
        amountOut: number | BigNumber;
        path: string[];
        pair: string[];
        fee: number[] | BigNumber[];
        data: string;
    }): Promise<BigNumber>;
    getAmountsOut(params: {
        amountIn: number | BigNumber;
        path: string[];
        pair: string[];
        fee: number[] | BigNumber[];
        data: string;
    }): Promise<BigNumber>;
    oracleFactory(): Promise<string>;
    pairFor(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<string>;
    swapETHForExactTokens(params: {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: number[] | BigNumber[];
        data: string;
    }): Promise<BigNumber>;
    swapExactETHForTokens(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: number[] | BigNumber[];
        data: string;
    }): Promise<BigNumber>;
    swapExactETHForTokensSupportingFeeOnTransferTokens(params: {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: number[] | BigNumber[];
    }): Promise<TransactionReceipt>;
    swapExactTokensForETH(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: number[] | BigNumber[];
        data: string;
    }): Promise<BigNumber>;
    swapExactTokensForETHSupportingFeeOnTransferTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: number[] | BigNumber[];
    }): Promise<TransactionReceipt>;
    swapExactTokensForTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: number[] | BigNumber[];
        data: string;
    }): Promise<BigNumber>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens(params: {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: number[] | BigNumber[];
    }): Promise<TransactionReceipt>;
    swapTokensForExactETH(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: number[] | BigNumber[];
        data: string;
    }): Promise<BigNumber>;
    swapTokensForExactTokens(params: {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: number[] | BigNumber[];
        data: string;
    }): Promise<BigNumber>;
}
