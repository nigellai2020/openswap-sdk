import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAddLiquidityParams {
    direction: boolean;
    index: number | BigNumber;
    feeIn: number | BigNumber;
}
export interface IAllocationSetParams {
    param1: boolean;
    param2: number | BigNumber;
    param3: string;
}
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
export interface IPrepaidFeeBalanceParams {
    param1: boolean;
    param2: number | BigNumber;
}
export interface IProviderOfferIndexParams {
    param1: boolean;
    param2: string;
    param3: number | BigNumber;
}
export interface IRemoveAllLiquidity1DParams {
    provider: string;
    direction: boolean;
}
export interface IRemoveLiquidityParams {
    provider: string;
    direction: boolean;
    index: number | BigNumber;
    amountOut: number | BigNumber;
    receivingOut: number | BigNumber;
    feeOut: number | BigNumber;
}
export interface ISetApprovedTraderBySignatureParams {
    direction: boolean;
    offerIndex: number | BigNumber;
    trader: string;
    allocation: number | BigNumber;
    signature: string;
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
export declare class OSWAP_RestrictedPair3 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.AddLiquidityEvent[];
    decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair3.AddLiquidityEvent;
    parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.ApprovedTraderEvent[];
    decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair3.ApprovedTraderEvent;
    parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.LockEvent[];
    decodeLockEvent(event: Event): OSWAP_RestrictedPair3.LockEvent;
    parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.NewProviderOfferEvent[];
    decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair3.NewProviderOfferEvent;
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.RemoveLiquidityEvent[];
    decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair3.RemoveLiquidityEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_RestrictedPair3.SwapEvent;
    parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.SwappedOneOfferEvent[];
    decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair3.SwappedOneOfferEvent;
    addLiquidity: {
        (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<void>;
    };
    allocationSet: {
        (params: IAllocationSetParams, options?: TransactionOptions): Promise<boolean>;
    };
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
    prepaidFeeBalance: {
        (params: IPrepaidFeeBalanceParams, options?: TransactionOptions): Promise<BigNumber>;
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
    removeAllLiquidity: {
        (provider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (provider: string, options?: TransactionOptions) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
            feeOut: BigNumber;
        }>;
    };
    removeAllLiquidity1D: {
        (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions) => Promise<{
            totalAmount: BigNumber;
            totalReceiving: BigNumber;
            totalRemainingFee: BigNumber;
        }>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
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
    setApprovedTraderBySignature: {
        (params: ISetApprovedTraderBySignatureParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetApprovedTraderBySignatureParams, options?: TransactionOptions) => Promise<void>;
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
export declare module OSWAP_RestrictedPair3 {
    interface AddLiquidityEvent {
        provider: string;
        direction: boolean;
        index: BigNumber;
        amount: BigNumber;
        newAmountBalance: BigNumber;
        feeIn: BigNumber;
        newFeeBalance: BigNumber;
        _event: Event;
    }
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
    interface RemoveLiquidityEvent {
        provider: string;
        direction: boolean;
        index: BigNumber;
        amountOut: BigNumber;
        receivingOut: BigNumber;
        feeOut: BigNumber;
        newAmountBalance: BigNumber;
        newReceivingBalance: BigNumber;
        newFeeBalance: BigNumber;
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
