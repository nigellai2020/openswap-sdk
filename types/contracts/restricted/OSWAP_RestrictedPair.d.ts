import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IApprovedTraderParams {
    param1: boolean;
    param2: number | BigNumber;
    param3: number | BigNumber;
}
export interface ICreateOrderParams {
    provider: string;
    direction: boolean;
    allowAll: boolean;
    restrictedPrice: number | BigNumber;
    startDate: number | BigNumber;
    expire: number | BigNumber;
}
export interface IGetAmountInParams {
    param1: string;
    param2: number | BigNumber;
    param3: string;
    param4: string;
}
export interface IGetAmountOutParams {
    tokenIn: string;
    amountIn: number | BigNumber;
    trader: string;
    param4: string;
}
export interface IGetApprovedTraderParams {
    direction: boolean;
    offerIndex: number | BigNumber;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetApprovedTraderLengthParams {
    direction: boolean;
    offerIndex: number | BigNumber;
}
export interface IGetOffersParams {
    direction: boolean;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetProviderOfferParams {
    provider: string;
    direction: boolean;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetProviderOfferIndexLengthParams {
    provider: string;
    direction: boolean;
}
export interface IGetTraderOfferParams {
    trader: string;
    direction: boolean;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IInitializeParams {
    token0: string;
    token1: string;
}
export interface IIsApprovedTraderParams {
    param1: boolean;
    param2: number | BigNumber;
    param3: string;
}
export interface ILockOfferParams {
    direction: boolean;
    index: number | BigNumber;
}
export interface IOffersParams {
    param1: boolean;
    param2: number | BigNumber;
}
export interface IProviderOfferIndexParams {
    param1: boolean;
    param2: string;
    param3: number | BigNumber;
}
export interface ISwapParams {
    amount0Out: number | BigNumber;
    amount1Out: number | BigNumber;
    to: string;
    trader: string;
    param5: string;
}
export interface ITraderAllocationParams {
    param1: boolean;
    param2: number | BigNumber;
    param3: string;
}
export interface ITraderOfferParams {
    param1: boolean;
    param2: string;
    param3: number | BigNumber;
}
export declare class OSWAP_RestrictedPair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.ApprovedTraderEvent[];
    decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair.ApprovedTraderEvent;
    parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.LockEvent[];
    decodeLockEvent(event: Event): OSWAP_RestrictedPair.LockEvent;
    parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.NewProviderOfferEvent[];
    decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair.NewProviderOfferEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_RestrictedPair.SwapEvent;
    parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.SwappedOneOfferEvent[];
    decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair.SwappedOneOfferEvent;
    approvedTrader: {
        (params: IApprovedTraderParams, options?: TransactionOptions): Promise<string>;
    };
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    };
    counter: {
        (param1: boolean, options?: TransactionOptions): Promise<BigNumber>;
    };
    createOrder: {
        (params: ICreateOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    feeBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getAmountIn: {
        (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    getAmountOut: {
        (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    getApprovedTrader: {
        (params: IGetApprovedTraderParams, options?: TransactionOptions): Promise<{
            trader: string[];
            allocation: BigNumber[];
        }>;
    };
    getApprovedTraderLength: {
        (params: IGetApprovedTraderLengthParams, options?: TransactionOptions): Promise<BigNumber>;
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
    getOffers: {
        (params: IGetOffersParams, options?: TransactionOptions): Promise<{
            index: BigNumber[];
            provider: string[];
            lockedAndAllowAll: boolean[];
            receiving: BigNumber[];
            amountAndPrice: BigNumber[];
            startDateAndExpire: BigNumber[];
        }>;
    };
    getProviderOffer: {
        (params: IGetProviderOfferParams, options?: TransactionOptions): Promise<{
            index: BigNumber[];
            provider: string[];
            lockedAndAllowAll: boolean[];
            receiving: BigNumber[];
            amountAndPrice: BigNumber[];
            startDateAndExpire: BigNumber[];
        }>;
    };
    getProviderOfferIndexLength: {
        (params: IGetProviderOfferIndexLengthParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    getTraderOffer: {
        (params: IGetTraderOfferParams, options?: TransactionOptions): Promise<{
            index: BigNumber[];
            provider: string[];
            lockedAndAllowAll: boolean[];
            receiving: BigNumber[];
            amountAndPrice: BigNumber[];
            startDateAndExpire: BigNumber[];
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
    isApprovedTrader: {
        (params: IIsApprovedTraderParams, options?: TransactionOptions): Promise<boolean>;
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
    lockOffer: {
        (params: ILockOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ILockOfferParams, options?: TransactionOptions) => Promise<void>;
    };
    offers: {
        (params: IOffersParams, options?: TransactionOptions): Promise<{
            provider: string;
            locked: boolean;
            allowAll: boolean;
            amount: BigNumber;
            receiving: BigNumber;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
        }>;
    };
    protocolFeeBalance0: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    protocolFeeBalance1: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    providerOfferIndex: {
        (params: IProviderOfferIndexParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    redeemProtocolFee: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    restrictedLiquidityProvider: {
        (options?: TransactionOptions): Promise<string>;
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
    traderAllocation: {
        (params: ITraderAllocationParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    traderOffer: {
        (params: ITraderOfferParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    whitelistFactory: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_RestrictedPair {
    interface ApprovedTraderEvent {
        direction: boolean;
        offerIndex: BigNumber;
        trader: string;
        allocation: BigNumber;
        _event: Event;
    }
    interface LockEvent {
        direction: boolean;
        index: BigNumber;
        _event: Event;
    }
    interface NewProviderOfferEvent {
        provider: string;
        direction: boolean;
        index: BigNumber;
        allowAll: boolean;
        restrictedPrice: BigNumber;
        startDate: BigNumber;
        expire: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        to: string;
        direction: boolean;
        amountIn: BigNumber;
        amountOut: BigNumber;
        tradeFee: BigNumber;
        protocolFee: BigNumber;
        _event: Event;
    }
    interface SwappedOneOfferEvent {
        provider: string;
        direction: boolean;
        index: BigNumber;
        price: BigNumber;
        amountOut: BigNumber;
        amountIn: BigNumber;
        newAmountBalance: BigNumber;
        newReceivingBalance: BigNumber;
        _event: Event;
    }
}
