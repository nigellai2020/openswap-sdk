import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/amm/OSWAP_Pair.json");

export class OSWAP_Pair extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{        	
        return this._deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): {owner:string,spender:string,value:BigNumber}[]{
        return this.parseEvents(receipt, "Approval");
    }
    parseBurnEvent(receipt: TransactionReceipt): {sender:string,amount0:BigNumber,amount1:BigNumber,to:string}[]{
        return this.parseEvents(receipt, "Burn");
    }
    parseMintEvent(receipt: TransactionReceipt): {sender:string,amount0:BigNumber,amount1:BigNumber}[]{
        return this.parseEvents(receipt, "Mint");
    }
    parseProtocolFeeSetEvent(receipt: TransactionReceipt): {protocolFee:BigNumber}[]{
        return this.parseEvents(receipt, "ProtocolFeeSet");
    }
    parseSwapEvent(receipt: TransactionReceipt): {sender:string,amount0In:BigNumber,amount1In:BigNumber,amount0Out:BigNumber,amount1Out:BigNumber,to:string}[]{
        return this.parseEvents(receipt, "Swap");
    }
    parseSyncEvent(receipt: TransactionReceipt): {reserve0:BigNumber,reserve1:BigNumber}[]{
        return this.parseEvents(receipt, "Sync");
    }
    parseTradeFeeSetEvent(receipt: TransactionReceipt): {tradeFee:BigNumber}[]{
        return this.parseEvents(receipt, "TradeFeeSet");
    }
    parseTransferEvent(receipt: TransactionReceipt): {from:string,to:string,value:BigNumber}[]{
        return this.parseEvents(receipt, "Transfer");
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
        }
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