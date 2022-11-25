import { IWallet, Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    factory: string;
    WETH: string;
}
export interface IAddLiquidityParams {
    tokenA: string;
    tokenB: string;
    amountADesired: number | BigNumber;
    amountBDesired: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IAddLiquidityETHParams {
    token: string;
    amountTokenDesired: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountETHMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IGetAmountInParams {
    amountOut: number | BigNumber;
    tokenIn: string;
    tokenOut: string;
}
export interface IGetAmountOutParams {
    amountIn: number | BigNumber;
    tokenIn: string;
    tokenOut: string;
}
export interface IGetAmountsInParams {
    amountOut: number | BigNumber;
    path: string[];
}
export interface IGetAmountsOutParams {
    amountIn: number | BigNumber;
    path: string[];
}
export interface IGetReservesParams {
    tokenA: string;
    tokenB: string;
}
export interface IQuoteParams {
    amountA: number | BigNumber;
    reserveA: number | BigNumber;
    reserveB: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    tokenA: string;
    tokenB: string;
    liquidity: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityETHParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountETHMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityETHSupportingFeeOnTransferTokensParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountETHMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityETHWithPermitParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountETHMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountETHMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface IRemoveLiquidityWithPermitParams {
    tokenA: string;
    tokenB: string;
    liquidity: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISwapETHForExactTokensParams {
    amountOut: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactETHForTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForETHParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapTokensForExactETHParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapTokensForExactTokensParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export declare class OSWAP_Router extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    WETH: {
        (options?: TransactionOptions): Promise<string>;
    };
    addLiquidity: {
        (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
    };
    addLiquidityETH: {
        (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
            liquidity: BigNumber;
        }>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    getAmountIn: {
        (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    getAmountOut: {
        (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    getAmountsIn: {
        (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
    };
    getAmountsOut: {
        (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
    };
    getReserves: {
        (params: IGetReservesParams, options?: TransactionOptions): Promise<{
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
    };
    quote: {
        (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    removeLiquidityETH: {
        (params: IRemoveLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
    };
    removeLiquidityETHSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    removeLiquidityETHWithPermit: {
        (params: IRemoveLiquidityETHWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHWithPermitParams, options?: TransactionOptions) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
    };
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactETHForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    swapExactTokensForETH: {
        (params: ISwapExactTokensForETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactTokensForETHSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    swapTokensForExactETH: {
        (params: ISwapTokensForExactETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    private assign;
}
