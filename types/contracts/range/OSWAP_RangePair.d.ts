import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAddLiquidityParams {
    provider: string;
    direction: boolean;
    staked: number | BigNumber;
    lowerLimit: number | BigNumber;
    upperLimit: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
}
export interface IGetAmountInParams {
    tokenOut: string;
    amountOut: number | BigNumber;
    data: string;
}
export interface IGetAmountOutParams {
    tokenIn: string;
    amountIn: number | BigNumber;
    data: string;
}
export interface IGetLatestPriceParams {
    direction: boolean;
    payload: string;
}
export interface IGetOffersParams {
    direction: boolean;
    start: number | BigNumber;
    end: number | BigNumber;
}
export interface IGetProviderOfferParams {
    provider: string;
    direction: boolean;
}
export interface IInitializeParams {
    token0: string;
    token1: string;
}
export interface IOffersParams {
    param1: boolean;
    param2: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    provider: string;
    direction: boolean;
    unstake: number | BigNumber;
    amountOut: number | BigNumber;
    reserveOut: number | BigNumber;
    lowerLimit: number | BigNumber;
    upperLimit: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
}
export interface IReplenishParams {
    provider: string;
    direction: boolean;
    amountIn: number | BigNumber;
}
export interface ISwapParams {
    amount0Out: number | BigNumber;
    amount1Out: number | BigNumber;
    to: string;
    data: string;
}
export interface IUpdateProviderOfferParams {
    provider: string;
    direction: boolean;
    replenishAmount: number | BigNumber;
    lowerLimit: number | BigNumber;
    upperLimit: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
    privateReplenish: boolean;
}
export declare class OSWAP_RangePair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.AddLiquidityEvent[];
    decodeAddLiquidityEvent(event: Event): OSWAP_RangePair.AddLiquidityEvent;
    parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.NewProviderEvent[];
    decodeNewProviderEvent(event: Event): OSWAP_RangePair.NewProviderEvent;
    parseRemoveAllLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveAllLiquidityEvent[];
    decodeRemoveAllLiquidityEvent(event: Event): OSWAP_RangePair.RemoveAllLiquidityEvent;
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveLiquidityEvent[];
    decodeRemoveLiquidityEvent(event: Event): OSWAP_RangePair.RemoveLiquidityEvent;
    parseReplenishEvent(receipt: TransactionReceipt): OSWAP_RangePair.ReplenishEvent[];
    decodeReplenishEvent(event: Event): OSWAP_RangePair.ReplenishEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_RangePair.SwapEvent;
    parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwappedOneProviderEvent[];
    decodeSwappedOneProviderEvent(event: Event): OSWAP_RangePair.SwappedOneProviderEvent;
    parseUpdateProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RangePair.UpdateProviderOfferEvent[];
    decodeUpdateProviderOfferEvent(event: Event): OSWAP_RangePair.UpdateProviderOfferEvent;
    addLiquidity: {
        (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    counter: {
        (options?: TransactionOptions): Promise<BigNumber>;
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
    getBalances: {
        (options?: TransactionOptions): Promise<{
            param1: BigNumber;
            param2: BigNumber;
            param3: BigNumber;
        }>;
    };
    getLastBalances: {
        (options?: TransactionOptions): Promise<{
            param1: BigNumber;
            param2: BigNumber;
        }>;
    };
    getLatestPrice: {
        (params: IGetLatestPriceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    getOffers: {
        (params: IGetOffersParams, options?: TransactionOptions): Promise<{
            provider: string[];
            amountAndReserve: BigNumber[];
            lowerLimitAndUpperLimit: BigNumber[];
            startDateAndExpire: BigNumber[];
            privateReplenish: boolean[];
        }>;
    };
    getProviderOffer: {
        (params: IGetProviderOfferParams, options?: TransactionOptions): Promise<{
            index: BigNumber;
            staked: BigNumber;
            amount: BigNumber;
            reserve: BigNumber;
            lowerLimit: BigNumber;
            upperLimit: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            privateReplenish: boolean;
        }>;
    };
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    initialize: {
        (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
    };
    isLive: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    lastGovBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    lastToken0Balance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    lastToken1Balance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    offers: {
        (params: IOffersParams, options?: TransactionOptions): Promise<{
            provider: string;
            amount: BigNumber;
            reserve: BigNumber;
            lowerLimit: BigNumber;
            upperLimit: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            privateReplenish: boolean;
        }>;
    };
    oracleFactory: {
        (options?: TransactionOptions): Promise<string>;
    };
    protocolFeeBalance0: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    protocolFeeBalance1: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    providerOfferIndex: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    providerStaking: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    rangeLiquidityProvider: {
        (options?: TransactionOptions): Promise<string>;
    };
    redeemProtocolFee: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    removeAllLiquidity: {
        (provider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (provider: string, options?: TransactionOptions) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
            staked: BigNumber;
        }>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
    };
    replenish: {
        (params: IReplenishParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IReplenishParams, options?: TransactionOptions) => Promise<void>;
    };
    scaleDirection: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    scaler: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    setLive: {
        (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
    };
    stakeBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    swap: {
        (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
    };
    sync: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    token0: {
        (options?: TransactionOptions): Promise<string>;
    };
    token1: {
        (options?: TransactionOptions): Promise<string>;
    };
    updateProviderOffer: {
        (params: IUpdateProviderOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateProviderOfferParams, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_RangePair {
    interface AddLiquidityEvent {
        provider: string;
        direction: boolean;
        staked: BigNumber;
        amount: BigNumber;
        newStakeBalance: BigNumber;
        newAmountBalance: BigNumber;
        lowerLimit: BigNumber;
        upperLimit: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
        _event: Event;
    }
    interface NewProviderEvent {
        provider: string;
        index: BigNumber;
        _event: Event;
    }
    interface RemoveAllLiquidityEvent {
        provider: string;
        unstake: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
        _event: Event;
    }
    interface RemoveLiquidityEvent {
        provider: string;
        direction: boolean;
        unstake: BigNumber;
        amountOut: BigNumber;
        reserveOut: BigNumber;
        newStakeBalance: BigNumber;
        newAmountBalance: BigNumber;
        newReserveBalance: BigNumber;
        lowerLimit: BigNumber;
        upperLimit: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
        _event: Event;
    }
    interface ReplenishEvent {
        provider: string;
        direction: boolean;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newReserveBalance: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        to: string;
        direction: boolean;
        price: BigNumber;
        amountIn: BigNumber;
        amountOut: BigNumber;
        tradeFee: BigNumber;
        protocolFee: BigNumber;
        _event: Event;
    }
    interface SwappedOneProviderEvent {
        provider: string;
        direction: boolean;
        amountOut: BigNumber;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newCounterReserveBalance: BigNumber;
        _event: Event;
    }
    interface UpdateProviderOfferEvent {
        provider: string;
        direction: boolean;
        replenish: BigNumber;
        newAmountBalance: BigNumber;
        newReserveBalance: BigNumber;
        lowerLimit: BigNumber;
        upperLimit: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
        privateReplenish: boolean;
        _event: Event;
    }
}
