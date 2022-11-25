import { IWallet, Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    factory: string;
    WETH: string;
}
export interface IAddLiquidityParams {
    tokenA: string;
    tokenB: string;
    addingTokenA: boolean;
    params: (number | BigNumber)[];
    merkleRoot: string;
    allowlistIpfsCid: string;
}
export interface IAddLiquidityETHParams {
    tokenA: string;
    addingTokenA: boolean;
    params: (number | BigNumber)[];
    merkleRoot: string;
    allowlistIpfsCid: string;
}
export interface IRemoveAllLiquidityParams {
    tokenA: string;
    tokenB: string;
    to: string;
    pairIndex: number | BigNumber;
    deadline: number | BigNumber;
}
export interface IRemoveAllLiquidityETHParams {
    tokenA: string;
    to: string;
    pairIndex: number | BigNumber;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    tokenA: string;
    tokenB: string;
    removingTokenA: boolean;
    to: string;
    pairIndex: number | BigNumber;
    offerIndex: number | BigNumber;
    amountOut: number | BigNumber;
    receivingOut: number | BigNumber;
    feeOut: number | BigNumber;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityETHParams {
    tokenA: string;
    removingTokenA: boolean;
    to: string;
    pairIndex: number | BigNumber;
    offerIndex: number | BigNumber;
    amountOut: number | BigNumber;
    receivingOut: number | BigNumber;
    feeOut: number | BigNumber;
    deadline: number | BigNumber;
}
export declare class OSWAP_RestrictedLiquidityProvider4 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    WETH: {
        (options?: TransactionOptions): Promise<string>;
    };
    addLiquidity: {
        (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
            pair: string;
            _offerIndex: BigNumber;
        }>;
    };
    addLiquidityETH: {
        (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<{
            pair: string;
            _offerIndex: BigNumber;
        }>;
    };
    configStore: {
        (options?: TransactionOptions): Promise<string>;
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
            feeOut: BigNumber;
        }>;
    };
    removeAllLiquidityETH: {
        (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<{
            amountToken: BigNumber;
            amountETH: BigNumber;
            feeOut: BigNumber;
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
    private assign;
}
