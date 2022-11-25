import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAllowanceParams {
    param1: string;
    param2: string;
}
export interface IApproveParams {
    spender: string;
    value: number | BigNumber;
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
export interface ITransferParams {
    to: string;
    value: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    value: number | BigNumber;
}
export declare class OSWAP_ERC20 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_ERC20.ApprovalEvent[];
    decodeApprovalEvent(event: Event): OSWAP_ERC20.ApprovalEvent;
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_ERC20.TransferEvent[];
    decodeTransferEvent(event: Event): OSWAP_ERC20.TransferEvent;
    EIP712_TYPEHASH: {
        (options?: TransactionOptions): Promise<string>;
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
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
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
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    };
    totalSupply: {
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
    private assign;
}
export declare module OSWAP_ERC20 {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
