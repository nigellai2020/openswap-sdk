import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../bin/commons/OSWAP_PausableFactory.json");

export class OSWAP_PausableFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(governance:string): Promise<string>{
        return this._deploy(governance);
    }
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairRestartedEvent[]{
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
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairShutdownedEvent[]{
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
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.RestartedEvent[]{
        let events = this.parseEvents(receipt, "Restarted");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash
            };
        });
    }
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.ShutdownedEvent[]{
        let events = this.parseEvents(receipt, "Shutdowned");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash
            };
        });
    }
    async governance(): Promise<string>{
        let result = await this.methods('governance');
        return result;
    }
    async isLive(): Promise<boolean>{
        let result = await this.methods('isLive');
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
}
export module OSWAP_PausableFactory{
    export interface PairRestartedEvent {_eventName:string,_address:string,_transactionHash:string,pair:string}
    export interface PairShutdownedEvent {_eventName:string,_address:string,_transactionHash:string,pair:string}
    export interface RestartedEvent {_eventName:string,_address:string,_transactionHash:string}
    export interface ShutdownedEvent {_eventName:string,_address:string,_transactionHash:string}
}