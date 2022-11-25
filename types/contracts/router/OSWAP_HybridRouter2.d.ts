import { IWallet, Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    registry: string;
    WETH: string;
}
export interface IGetAmountsInEndsWithParams {
    amountOut: number | BigNumber;
    pair: string[];
    tokenOut: string;
    data: string;
}
export interface IGetAmountsInStartsWithParams {
    amountOut: number | BigNumber;
    pair: string[];
    tokenIn: string;
    data: string;
}
export interface IGetAmountsOutEndsWithParams {
    amountIn: number | BigNumber;
    pair: string[];
    tokenOut: string;
    data: string;
}
export interface IGetAmountsOutStartsWithParams {
    amountIn: number | BigNumber;
    pair: string[];
    tokenIn: string;
    data: string;
}
export interface IGetPathInParams {
    pair: string[];
    tokenIn: string;
}
export interface IGetPathOutParams {
    pair: string[];
    tokenOut: string;
}
export interface ISwapETHForExactTokensParams {
    amountOut: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactETHForTokensParams {
    amountOutMin: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
    amountOutMin: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactTokensForETHParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactTokensForTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    pair: string[];
    tokenIn: string;
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    pair: string[];
    tokenIn: string;
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapTokensForExactETHParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    pair: string[];
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export interface ISwapTokensForExactTokensParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    pair: string[];
    tokenOut: string;
    to: string;
    deadline: number | BigNumber;
    data: string;
}
export declare class OSWAP_HybridRouter2 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    WETH: {
        (options?: TransactionOptions): Promise<string>;
    };
    getAmountsInEndsWith: {
        (params: IGetAmountsInEndsWithParams, options?: TransactionOptions): Promise<BigNumber[]>;
    };
    getAmountsInStartsWith: {
        (params: IGetAmountsInStartsWithParams, options?: TransactionOptions): Promise<BigNumber[]>;
    };
    getAmountsOutEndsWith: {
        (params: IGetAmountsOutEndsWithParams, options?: TransactionOptions): Promise<BigNumber[]>;
    };
    getAmountsOutStartsWith: {
        (params: IGetAmountsOutStartsWithParams, options?: TransactionOptions): Promise<BigNumber[]>;
    };
    getPathIn: {
        (params: IGetPathInParams, options?: TransactionOptions): Promise<string[]>;
    };
    getPathOut: {
        (params: IGetPathOutParams, options?: TransactionOptions): Promise<string[]>;
    };
    registry: {
        (options?: TransactionOptions): Promise<string>;
    };
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    swapExactTokensForETH: {
        (params: ISwapExactTokensForETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    swapTokensForExactETH: {
        (params: ISwapTokensForExactETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<{
            path: string[];
            amounts: BigNumber[];
        }>;
    };
    private assign;
}
