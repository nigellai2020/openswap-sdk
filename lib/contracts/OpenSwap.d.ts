import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OpenSwap extends Contract {
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
    }): Promise<boolean>;
    balanceOf(account: string): Promise<BigNumber>;
    cap(): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decreaseAllowance(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<boolean>;
    increaseAllowance(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<boolean>;
    mint(params: {
        account: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    minter(): Promise<string>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transfer(params: {
        recipient: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
    transferFrom(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
}
