"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_FactoryBase = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_FactoryBase_json_1 = __importDefault(require("./OSWAP_FactoryBase.json"));
class OSWAP_FactoryBase extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_FactoryBase_json_1.default.abi, OSWAP_FactoryBase_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.governance, params.pairCreator], options);
    }
    parsePairCreatedEvent(receipt) {
        return this.parseEvents(receipt, "PairCreated").map(e => this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new eth_contract_1.BigNumber(result.newSize),
            _event: event
        };
    }
    parsePairRestartedEvent(receipt) {
        return this.parseEvents(receipt, "PairRestarted").map(e => this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event) {
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt) {
        return this.parseEvents(receipt, "PairShutdowned").map(e => this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event) {
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parseRestartedEvent(receipt) {
        return this.parseEvents(receipt, "Restarted").map(e => this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt) {
        return this.parseEvents(receipt, "Shutdowned").map(e => this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    assign() {
        let allPairs_call = async (param1, options) => {
            let result = await this.call('allPairs', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.allPairs = allPairs_call;
        let allPairsLength_call = async (options) => {
            let result = await this.call('allPairsLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.allPairsLength = allPairsLength_call;
        let getPairParams = (params) => [params.param1, params.param2];
        let getPair_call = async (params, options) => {
            let result = await this.call('getPair', getPairParams(params), options);
            return result;
        };
        this.getPair = getPair_call;
        let governance_call = async (options) => {
            let result = await this.call('governance', [], options);
            return result;
        };
        this.governance = governance_call;
        let isLive_call = async (options) => {
            let result = await this.call('isLive', [], options);
            return result;
        };
        this.isLive = isLive_call;
        let pairCreator_call = async (options) => {
            let result = await this.call('pairCreator', [], options);
            return result;
        };
        this.pairCreator = pairCreator_call;
        let createPairParams = (params) => [params.tokenA, params.tokenB];
        let createPair_send = async (params, options) => {
            let result = await this.send('createPair', createPairParams(params), options);
            return result;
        };
        let createPair_call = async (params, options) => {
            let result = await this.call('createPair', createPairParams(params), options);
            return result;
        };
        this.createPair = Object.assign(createPair_send, {
            call: createPair_call
        });
        let setLive_send = async (isLive, options) => {
            let result = await this.send('setLive', [isLive], options);
            return result;
        };
        let setLive_call = async (isLive, options) => {
            let result = await this.call('setLive', [isLive], options);
            return;
        };
        this.setLive = Object.assign(setLive_send, {
            call: setLive_call
        });
        let setLiveForPairParams = (params) => [params.pair, params.live];
        let setLiveForPair_send = async (params, options) => {
            let result = await this.send('setLiveForPair', setLiveForPairParams(params), options);
            return result;
        };
        let setLiveForPair_call = async (params, options) => {
            let result = await this.call('setLiveForPair', setLiveForPairParams(params), options);
            return;
        };
        this.setLiveForPair = Object.assign(setLiveForPair_send, {
            call: setLiveForPair_call
        });
    }
}
exports.OSWAP_FactoryBase = OSWAP_FactoryBase;
