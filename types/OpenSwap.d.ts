import { Wallet, BigNumber } from "@ijstech/eth-wallet";
import { OpenSwap as OpenSwapContract } from "./contracts/index";
export declare class OpenSwap {
    address: string;
    _oswap: OpenSwapContract;
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        minter: string;
        initSupplyTo: string;
        initSupply: number | BigNumber;
        totalSupply: number | BigNumber;
    }): Promise<string>;
    allowance(params: {
        owner: string;
        spender: string;
    }): Promise<BigNumber>;
    approve(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<OpenSwapContract.ApprovalEvent>;
    balanceOf(account: string): Promise<BigNumber>;
    get cap(): Promise<BigNumber>;
    get decimals(): Promise<number>;
    decreaseAllowance(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<OpenSwapContract.ApprovalEvent>;
    increaseAllowance(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<OpenSwapContract.ApprovalEvent>;
    mint(params: {
        address: string;
        amount: number | BigNumber;
    }): Promise<OpenSwapContract.TransferEvent>;
    get minter(): Promise<string>;
    get name(): Promise<string>;
    get symbol(): Promise<string>;
    get totalSupply(): Promise<BigNumber>;
    transfer(params: {
        address: string;
        amount: number | BigNumber;
    }): Promise<OpenSwapContract.TransferEvent>;
    transferFrom(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<{
        transfer: OpenSwapContract.TransferEvent;
        approval: OpenSwapContract.ApprovalEvent;
    }>;
}
