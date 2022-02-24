import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class ERC20 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        name: string;
        symbol: string;
    }): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
    parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
    decodeTransferEvent(event: Event): ERC20.TransferEvent;
    allowance(params: {
        owner: string;
        spender: string;
    }): Promise<BigNumber>;
    approve(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    balanceOf(account: string): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decreaseAllowance(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    increaseAllowance(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transfer(params: {
        recipient: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
}
export declare module ERC20 {
    interface ApprovalEvent {
        _event: Event;
        owner: string;
        spender: string;
        value: BigNumber;
    }
    interface TransferEvent {
        _event: Event;
        from: string;
        to: string;
        value: BigNumber;
    }
}
