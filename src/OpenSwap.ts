import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
import {OpenSwap as OpenSwapContract} from "./contracts/index";

export class OpenSwap {
    address: string;
    _oswap:OpenSwapContract;

    constructor(wallet: Wallet, address?: string) {
        this.address = address;
        this._oswap = new OpenSwapContract(wallet, address);
    }
    async deploy(params:{minter:string,initSupplyTo:string,initSupply:number|BigNumber,totalSupply:number|BigNumber}): Promise<string>{
        params.initSupply = Utils.toDecimals(params.initSupply);
        params.totalSupply = Utils.toDecimals(params.totalSupply);
        this.address = await this._oswap.deploy(params);
        return this.address;
    }
    async allowance(params:{owner:string,spender:string}): Promise<BigNumber>{
        return Utils.fromDecimals(await this._oswap.allowance(params));
    }
    async approve(params:{spender:string,amount:number|BigNumber}): Promise<OpenSwapContract.ApprovalEvent>{
        params.amount = Utils.toDecimals(params.amount);
        let receipt = await this._oswap.approve(params);
        let event = this._oswap.parseApprovalEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
        return event;
    }
    async balanceOf(account:string): Promise<BigNumber>{
        return Utils.fromDecimals(await this._oswap.balanceOf(account));
    }
    get cap(): Promise<BigNumber>{
        return (async ()=>{return Utils.fromDecimals(await this._oswap.cap());})();
    }
    get decimals(): Promise<number>{
        return (async ()=>{return (await this._oswap.decimals()).toNumber();})();
    }
    async decreaseAllowance(params:{spender:string,subtractedValue:number|BigNumber}): Promise<OpenSwapContract.ApprovalEvent>{
        params.subtractedValue = Utils.toDecimals(params.subtractedValue);
        let receipt = await this._oswap.decreaseAllowance(params);
        let event = this._oswap.parseApprovalEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
        return event;
    }
    async increaseAllowance(params:{spender:string,addedValue:number|BigNumber}): Promise<OpenSwapContract.ApprovalEvent>{
        params.addedValue = Utils.toDecimals(params.addedValue);
        let receipt = await this._oswap.increaseAllowance(params);
        let event = this._oswap.parseApprovalEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
        return event;
    }
    async mint(params:{address:string,amount:number|BigNumber}): Promise<OpenSwapContract.TransferEvent>{
        let receipt = await this._oswap.mint({account: params.address, amount: Utils.toDecimals(params.amount)});
        let event = this._oswap.parseTransferEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
        return event;
    }
    get minter(): Promise<string>{
        return this._oswap.minter();
    }
    get name(): Promise<string>{
        return this._oswap.name();
    }
    get symbol(): Promise<string>{
        return this._oswap.symbol();
    }
    get totalSupply(): Promise<BigNumber>{
        return (async ()=>{return Utils.fromDecimals(await this._oswap.totalSupply());})();
    }
    async transfer(params:{address:string,amount:number|BigNumber}): Promise<OpenSwapContract.TransferEvent>{
        let receipt = await this._oswap.transfer({recipient: params.address, amount: Utils.toDecimals(params.amount)});
        let event = this._oswap.parseTransferEvent(receipt)[0];
        event.value = Utils.fromDecimals(event.value);
        return event;
    }
    async transferFrom(params:{sender:string,recipient:string,amount:number|BigNumber}): Promise<{
        transfer: OpenSwapContract.TransferEvent,
        approval: OpenSwapContract.ApprovalEvent
    }>{
        params.amount = Utils.toDecimals(params.amount);
        let receipt = await this._oswap.transferFrom(params);
        let transfer = this._oswap.parseTransferEvent(receipt)[0];
        transfer.value = Utils.fromDecimals(transfer.value);
        let approval = this._oswap.parseApprovalEvent(receipt)[0];
        approval.value = Utils.fromDecimals(approval.value);
        return {transfer, approval};
    }
}