import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/amm/OSWAP_Pair.json");

export class OSWAP_Pair extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_Pair.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): OSWAP_Pair.ApprovalEvent{
        let result = event.data;
        return {
            _event:event,
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value)
        };
    }
    parseBurnEvent(receipt: TransactionReceipt): OSWAP_Pair.BurnEvent[]{
        return this.parseEvents(receipt, "Burn").map(e=>this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event: Event): OSWAP_Pair.BurnEvent{
        let result = event.data;
        return {
            _event:event,
            sender: result.sender,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            to: result.to
        };
    }
    parseMintEvent(receipt: TransactionReceipt): OSWAP_Pair.MintEvent[]{
        return this.parseEvents(receipt, "Mint").map(e=>this.decodeMintEvent(e));
    }
    decodeMintEvent(event: Event): OSWAP_Pair.MintEvent{
        let result = event.data;
        return {
            _event:event,
            sender: result.sender,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1)
        };
    }
    parseProtocolFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.ProtocolFeeSetEvent[]{
        return this.parseEvents(receipt, "ProtocolFeeSet").map(e=>this.decodeProtocolFeeSetEvent(e));
    }
    decodeProtocolFeeSetEvent(event: Event): OSWAP_Pair.ProtocolFeeSetEvent{
        let result = event.data;
        return {
            _event:event,
            protocolFee: new BigNumber(result.protocolFee)
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_Pair.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): OSWAP_Pair.SwapEvent{
        let result = event.data;
        return {
            _event:event,
            sender: result.sender,
            amount0In: new BigNumber(result.amount0In),
            amount1In: new BigNumber(result.amount1In),
            amount0Out: new BigNumber(result.amount0Out),
            amount1Out: new BigNumber(result.amount1Out),
            to: result.to
        };
    }
    parseSyncEvent(receipt: TransactionReceipt): OSWAP_Pair.SyncEvent[]{
        return this.parseEvents(receipt, "Sync").map(e=>this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event: Event): OSWAP_Pair.SyncEvent{
        let result = event.data;
        return {
            _event:event,
            reserve0: new BigNumber(result.reserve0),
            reserve1: new BigNumber(result.reserve1)
        };
    }
    parseTradeFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.TradeFeeSetEvent[]{
        return this.parseEvents(receipt, "TradeFeeSet").map(e=>this.decodeTradeFeeSetEvent(e));
    }
    decodeTradeFeeSetEvent(event: Event): OSWAP_Pair.TradeFeeSetEvent{
        let result = event.data;
        return {
            _event:event,
            tradeFee: new BigNumber(result.tradeFee)
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_Pair.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): OSWAP_Pair.TransferEvent{
        let result = event.data;
        return {
            _event:event,
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value)
        };
    }
    async EIP712_TYPEHASH(): Promise<string>{
        let result = await this.methods('EIP712_TYPEHASH');
        return result;
    }
    async MINIMUM_LIQUIDITY(): Promise<BigNumber>{
        let result = await this.methods('MINIMUM_LIQUIDITY');
        return new BigNumber(result);
    }
    async NAME_HASH(): Promise<string>{
        let result = await this.methods('NAME_HASH');
        return result;
    }
    async PERMIT_TYPEHASH(): Promise<string>{
        let result = await this.methods('PERMIT_TYPEHASH');
        return result;
    }
    async VERSION_HASH(): Promise<string>{
        let result = await this.methods('VERSION_HASH');
        return result;
    }
    async allowance(params:{param1:string,param2:string}): Promise<BigNumber>{
        let result = await this.methods('allowance',params.param1,params.param2);
        return new BigNumber(result);
    }
    async approve(params:{spender:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('approve',params.spender,Utils.toString(params.value));
        return result;
    }
    async balanceOf(param1:string): Promise<BigNumber>{
        let result = await this.methods('balanceOf',param1);
        return new BigNumber(result);
    }
    async burn(to:string): Promise<TransactionReceipt>{
        let result = await this.methods('burn',to);
        return result;
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async factory(): Promise<string>{
        let result = await this.methods('factory');
        return result;
    }
    async getAmountIn(params:{tokenOut:string,amountOut:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('getAmountIn',params.tokenOut,Utils.toString(params.amountOut));
        return new BigNumber(result);
    }
    async getAmountOut(params:{tokenIn:string,amountIn:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('getAmountOut',params.tokenIn,Utils.toString(params.amountIn));
        return new BigNumber(result);
    }
    async getReserves(): Promise<{_reserve0:BigNumber,_reserve1:BigNumber,_blockTimestampLast:BigNumber}>{
        let result = await this.methods('getReserves');
        return {
            _reserve0: new BigNumber(result._reserve0),
            _reserve1: new BigNumber(result._reserve1),
            _blockTimestampLast: new BigNumber(result._blockTimestampLast)
        };
    }
    async initialize(params:{token0:string,token1:string}): Promise<TransactionReceipt>{
        let result = await this.methods('initialize',params.token0,params.token1);
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.methods('isLive');
        return result;
    }
    async kLast(): Promise<BigNumber>{
        let result = await this.methods('kLast');
        return new BigNumber(result);
    }
    async mint(to:string): Promise<TransactionReceipt>{
        let result = await this.methods('mint',to);
        return result;
    }
    async name(): Promise<string>{
        let result = await this.methods('name');
        return result;
    }
    async nonces(param1:string): Promise<BigNumber>{
        let result = await this.methods('nonces',param1);
        return new BigNumber(result);
    }
    async permit(params:{owner:string,spender:string,value:number|BigNumber,deadline:number|BigNumber,v:number|BigNumber,r:string,s:string}): Promise<TransactionReceipt>{
        let result = await this.methods('permit',params.owner,params.spender,Utils.toString(params.value),Utils.toString(params.deadline),Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s));
        return result;
    }
    async price0CumulativeLast(): Promise<BigNumber>{
        let result = await this.methods('price0CumulativeLast');
        return new BigNumber(result);
    }
    async price1CumulativeLast(): Promise<BigNumber>{
        let result = await this.methods('price1CumulativeLast');
        return new BigNumber(result);
    }
    async protocolFee(): Promise<BigNumber>{
        let result = await this.methods('protocolFee');
        return new BigNumber(result);
    }
    async setLive(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setLive',isLive);
        return result;
    }
    async skim(to:string): Promise<TransactionReceipt>{
        let result = await this.methods('skim',to);
        return result;
    }
    async swap(params:{amount0Out:number|BigNumber,amount1Out:number|BigNumber,to:string,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('swap',Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,params.data);
        return result;
    }
    async symbol(): Promise<string>{
        let result = await this.methods('symbol');
        return result;
    }
    async sync(): Promise<TransactionReceipt>{
        let result = await this.methods('sync');
        return result;
    }
    async token0(): Promise<string>{
        let result = await this.methods('token0');
        return result;
    }
    async token1(): Promise<string>{
        let result = await this.methods('token1');
        return result;
    }
    async totalSupply(): Promise<BigNumber>{
        let result = await this.methods('totalSupply');
        return new BigNumber(result);
    }
    async tradeFee(): Promise<BigNumber>{
        let result = await this.methods('tradeFee');
        return new BigNumber(result);
    }
    async transfer(params:{to:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transfer',params.to,Utils.toString(params.value));
        return result;
    }
    async transferFrom(params:{from:string,to:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transferFrom',params.from,params.to,Utils.toString(params.value));
        return result;
    }
    async updateFee(): Promise<TransactionReceipt>{
        let result = await this.methods('updateFee');
        return result;
    }
    async updateProtocolFee(): Promise<TransactionReceipt>{
        let result = await this.methods('updateProtocolFee');
        return result;
    }
}
export module OSWAP_Pair{
    export interface ApprovalEvent {_event:Event,owner:string,spender:string,value:BigNumber}
    export interface BurnEvent {_event:Event,sender:string,amount0:BigNumber,amount1:BigNumber,to:string}
    export interface MintEvent {_event:Event,sender:string,amount0:BigNumber,amount1:BigNumber}
    export interface ProtocolFeeSetEvent {_event:Event,protocolFee:BigNumber}
    export interface SwapEvent {_event:Event,sender:string,amount0In:BigNumber,amount1In:BigNumber,amount0Out:BigNumber,amount1Out:BigNumber,to:string}
    export interface SyncEvent {_event:Event,reserve0:BigNumber,reserve1:BigNumber}
    export interface TradeFeeSetEvent {_event:Event,tradeFee:BigNumber}
    export interface TransferEvent {_event:Event,from:string,to:string,value:BigNumber}
}