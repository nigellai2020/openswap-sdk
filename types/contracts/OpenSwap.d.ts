import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    minter: string;
    initSupplyTo: string;
    initSupply: number | BigNumber;
    totalSupply: number | BigNumber;
}
export interface IAllowanceParams {
    owner: string;
    spender: string;
}
export interface IApproveParams {
    spender: string;
    amount: number | BigNumber;
}
export interface IDecreaseAllowanceParams {
    spender: string;
    subtractedValue: number | BigNumber;
}
export interface IIncreaseAllowanceParams {
    spender: string;
    addedValue: number | BigNumber;
}
export interface IMintParams {
    account: string;
    amount: number | BigNumber;
}
export interface ITransferParams {
    recipient: string;
    amount: number | BigNumber;
}
export interface ITransferFromParams {
    sender: string;
    recipient: string;
    amount: number | BigNumber;
}
export declare class OpenSwap extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): OpenSwap.ApprovalEvent[];
    decodeApprovalEvent(event: Event): OpenSwap.ApprovalEvent;
    parseTransferEvent(receipt: TransactionReceipt): OpenSwap.TransferEvent[];
    decodeTransferEvent(event: Event): OpenSwap.TransferEvent;
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    };
    balanceOf: {
        (account: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    cap: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    };
    mint: {
        (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
    };
    minter: {
        (options?: TransactionOptions): Promise<string>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
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
export declare module OpenSwap {
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
