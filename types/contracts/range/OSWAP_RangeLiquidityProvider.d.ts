import { IWallet, Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    factory: string;
    WETH: string;
}
export interface IAddLiquidityParams {
    tokenA: string;
    tokenB: string;
    addingTokenA: boolean;
    staked: number | BigNumber;
    amountIn: number | BigNumber;
    lowerLimit: number | BigNumber;
    upperLimit: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
    deadline: number | BigNumber;
}
export interface IAddLiquidityETHParams {
    tokenA: string;
    addingTokenA: boolean;
    staked: number | BigNumber;
    amountAIn: number | BigNumber;
    lowerLimit: number | BigNumber;
    upperLimit: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
    deadline: number | BigNumber;
}
export interface IRemoveAllLiquidityParams {
    tokenA: string;
    tokenB: string;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveAllLiquidityETHParams {
    tokenA: string;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    tokenA: string;
    tokenB: string;
    removingTokenA: boolean;
    to: string;
    unstake: number | BigNumber;
    amountOut: number | BigNumber;
    reserveOut: number | BigNumber;
    lowerLimit: number | BigNumber;
    upperLimit: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityETHParams {
    tokenA: string;
    removingTokenA: boolean;
    to: string;
    unstake: number | BigNumber;
    amountOut: number | BigNumber;
    reserveOut: number | BigNumber;
    lowerLimit: number | BigNumber;
    upperLimit: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
    deadline: number | BigNumber;
}
export interface IUpdateProviderOfferParams {
    tokenA: string;
    tokenB: string;
    replenishAmount: number | BigNumber;
    lowerLimit: number | BigNumber;
    upperLimit: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
    privateReplenish: boolean;
    deadline: number | BigNumber;
}
export declare class OSWAP_RangeLiquidityProvider extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    WETH: {
        (options?: TransactionOptions): Promise<string>;
    };
    addLiquidity: {
        (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    addLiquidityETH: {
        (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    removeAllLiquidity: {
        (params: IRemoveAllLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    removeAllLiquidityETH: {
        (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
    };
    removeLiquidityETH: {
        (params: IRemoveLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<void>;
    };
    updateProviderOffer: {
        (params: IUpdateProviderOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateProviderOfferParams, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
