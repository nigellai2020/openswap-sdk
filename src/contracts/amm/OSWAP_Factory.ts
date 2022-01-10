import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/amm/OSWAP_Factory.json");

export class OSWAP_Factory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{governance:string,pairCreator:string,tradeFee:number|BigNumber,protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<string>{
        return this._deploy(params.governance,params.pairCreator,Utils.toString(params.tradeFee),Utils.toString(params.protocolFee),params.protocolFeeTo);
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairCreatedEvent[]{
        let events = this.parseEvents(receipt, "PairCreated");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                token0: result.token0,
                token1: result.token1,
                pair: result.pair,
                newSize: new BigNumber(result.newSize)
            };
        });
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairRestartedEvent[]{
        let events = this.parseEvents(receipt, "PairRestarted");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                pair: result.pair
            };
        });
    }
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairShutdownedEvent[]{
        let events = this.parseEvents(receipt, "PairShutdowned");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                pair: result.pair
            };
        });
    }
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_Factory.ParamSetEvent[]{
        let events = this.parseEvents(receipt, "ParamSet");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                name: result.name,
                value: result.value
            };
        });
    }
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_Factory.ParamSet2Event[]{
        let events = this.parseEvents(receipt, "ParamSet2");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                name: result.name,
                value1: result.value1,
                value2: result.value2
            };
        });
    }
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.RestartedEvent[]{
        let events = this.parseEvents(receipt, "Restarted");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash
            };
        });
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.ShutdownedEvent[]{
        let events = this.parseEvents(receipt, "Shutdowned");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash
            };
        });
    }
    async allPairs(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('allPairs',Utils.toString(param1));
        return result;
    }
    async allPairsLength(): Promise<BigNumber>{
        let result = await this.methods('allPairsLength');
        return new BigNumber(result);
    }
    async createPair(params:{tokenA:string,tokenB:string}): Promise<TransactionReceipt>{
        let result = await this.methods('createPair',params.tokenA,params.tokenB);
        return result;
    }
    async getPair(params:{param1:string,param2:string}): Promise<string>{
        let result = await this.methods('getPair',params.param1,params.param2);
        return result;
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.methods('isLive');
        return result;
    }
    async pairCreator(): Promise<string>{
        let result = await this.methods('pairCreator');
        return result;
    }
    async protocolFee(): Promise<BigNumber>{
        let result = await this.methods('protocolFee');
        return new BigNumber(result);
    }
    async protocolFeeParams(): Promise<{_protocolFee:BigNumber,_protocolFeeTo:string}>{
        let result = await this.methods('protocolFeeParams');
        return {
            _protocolFee: new BigNumber(result._protocolFee),
            _protocolFeeTo: result._protocolFeeTo
        };
    }
    async protocolFeeTo(): Promise<string>{
        let result = await this.methods('protocolFeeTo');
        return result;
    }
    async setLive(isLive:boolean): Promise<TransactionReceipt>{
        let result = await this.methods('setLive',isLive);
        return result;
    }
    async setLiveForPair(params:{pair:string,live:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('setLiveForPair',params.pair,params.live);
        return result;
    }
    async setProtocolFee(protocolFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setProtocolFee',Utils.toString(protocolFee));
        return result;
    }
    async setProtocolFeeTo(protocolFeeTo:string): Promise<TransactionReceipt>{
        let result = await this.methods('setProtocolFeeTo',protocolFeeTo);
        return result;
    }
    async setTradeFee(tradeFee:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setTradeFee',Utils.toString(tradeFee));
        return result;
    }
    async tradeFee(): Promise<BigNumber>{
        let result = await this.methods('tradeFee');
        return new BigNumber(result);
    }
}
export module OSWAP_Factory{
    export interface PairCreatedEvent {_eventName:string,_address:string,_transactionHash:string,token0:string,token1:string,pair:string,newSize:BigNumber}
    export interface PairRestartedEvent {_eventName:string,_address:string,_transactionHash:string,pair:string}
    export interface PairShutdownedEvent {_eventName:string,_address:string,_transactionHash:string,pair:string}
    export interface ParamSetEvent {_eventName:string,_address:string,_transactionHash:string,name:string,value:string}
    export interface ParamSet2Event {_eventName:string,_address:string,_transactionHash:string,name:string,value1:string,value2:string}
    export interface RestartedEvent {_eventName:string,_address:string,_transactionHash:string}
    export interface ShutdownedEvent {_eventName:string,_address:string,_transactionHash:string}
}