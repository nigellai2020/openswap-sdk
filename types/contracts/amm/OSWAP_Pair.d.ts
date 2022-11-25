import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAllowanceParams {
    param1: string;
    param2: string;
}
export interface IApproveParams {
    spender: string;
    value: number | BigNumber;
}
export interface IGetAmountInParams {
    tokenOut: string;
    amountOut: number | BigNumber;
}
export interface IGetAmountOutParams {
    tokenIn: string;
    amountIn: number | BigNumber;
}
export interface IInitializeParams {
    token0: string;
    token1: string;
}
export interface IPermitParams {
    owner: string;
    spender: string;
    value: number | BigNumber;
    deadline: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISwapParams {
    amount0Out: number | BigNumber;
    amount1Out: number | BigNumber;
    to: string;
    data: string;
}
export interface ITransferParams {
    to: string;
    value: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    value: number | BigNumber;
}
export declare class OSWAP_Pair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_Pair.ApprovalEvent[];
    decodeApprovalEvent(event: Event): OSWAP_Pair.ApprovalEvent;
    parseBurnEvent(receipt: TransactionReceipt): OSWAP_Pair.BurnEvent[];
    decodeBurnEvent(event: Event): OSWAP_Pair.BurnEvent;
    parseMintEvent(receipt: TransactionReceipt): OSWAP_Pair.MintEvent[];
    decodeMintEvent(event: Event): OSWAP_Pair.MintEvent;
    parseProtocolFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.ProtocolFeeSetEvent[];
    decodeProtocolFeeSetEvent(event: Event): OSWAP_Pair.ProtocolFeeSetEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_Pair.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_Pair.SwapEvent;
    parseSyncEvent(receipt: TransactionReceipt): OSWAP_Pair.SyncEvent[];
    decodeSyncEvent(event: Event): OSWAP_Pair.SyncEvent;
    parseTradeFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.TradeFeeSetEvent[];
    decodeTradeFeeSetEvent(event: Event): OSWAP_Pair.TradeFeeSetEvent;
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_Pair.TransferEvent[];
    decodeTransferEvent(event: Event): OSWAP_Pair.TransferEvent;
    EIP712_TYPEHASH: {
        (options?: TransactionOptions): Promise<string>;
    };
    MINIMUM_LIQUIDITY: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    NAME_HASH: {
        (options?: TransactionOptions): Promise<string>;
    };
    PERMIT_TYPEHASH: {
        (options?: TransactionOptions): Promise<string>;
    };
    VERSION_HASH: {
        (options?: TransactionOptions): Promise<string>;
    };
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    };
    balanceOf: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    burn: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    decimals: {
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
    getReserves: {
        (options?: TransactionOptions): Promise<{
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
    };
    initialize: {
        (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
    };
    isLive: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    kLast: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    mint: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<BigNumber>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
    };
    nonces: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    permit: {
        (params: IPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPermitParams, options?: TransactionOptions) => Promise<void>;
    };
    price0CumulativeLast: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    price1CumulativeLast: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    protocolFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    setLive: {
        (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
    };
    skim: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<void>;
    };
    swap: {
        (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
    };
    symbol: {
        (options?: TransactionOptions): Promise<string>;
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
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    tradeFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    };
    updateFee: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    updateProtocolFee: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_Pair {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface BurnEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        to: string;
        _event: Event;
    }
    interface MintEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        _event: Event;
    }
    interface ProtocolFeeSetEvent {
        protocolFee: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        sender: string;
        amount0In: BigNumber;
        amount1In: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
        to: string;
        _event: Event;
    }
    interface SyncEvent {
        reserve0: BigNumber;
        reserve1: BigNumber;
        _event: Event;
    }
    interface TradeFeeSetEvent {
        tradeFee: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
