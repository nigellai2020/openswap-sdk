"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_Factory = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_Factory_json_1 = __importDefault(require("./OSWAP_Factory.json"));
class OSWAP_Factory extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_Factory_json_1.default.abi, OSWAP_Factory_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.governance, params.pairCreator, this.wallet.utils.toString(params.tradeFee), this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo], options);
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
    parseParamSetEvent(receipt) {
        return this.parseEvents(receipt, "ParamSet").map(e => this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event) {
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt) {
        return this.parseEvents(receipt, "ParamSet2").map(e => this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event) {
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
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
        let protocolFee_call = async (options) => {
            let result = await this.call('protocolFee', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFee = protocolFee_call;
        let protocolFeeParams_call = async (options) => {
            let result = await this.call('protocolFeeParams', [], options);
            return {
                _protocolFee: new eth_contract_1.BigNumber(result._protocolFee),
                _protocolFeeTo: result._protocolFeeTo
            };
        };
        this.protocolFeeParams = protocolFeeParams_call;
        let protocolFeeTo_call = async (options) => {
            let result = await this.call('protocolFeeTo', [], options);
            return result;
        };
        this.protocolFeeTo = protocolFeeTo_call;
        let tradeFee_call = async (options) => {
            let result = await this.call('tradeFee', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tradeFee = tradeFee_call;
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
        let setProtocolFee_send = async (protocolFee, options) => {
            let result = await this.send('setProtocolFee', [this.wallet.utils.toString(protocolFee)], options);
            return result;
        };
        let setProtocolFee_call = async (protocolFee, options) => {
            let result = await this.call('setProtocolFee', [this.wallet.utils.toString(protocolFee)], options);
            return;
        };
        this.setProtocolFee = Object.assign(setProtocolFee_send, {
            call: setProtocolFee_call
        });
        let setProtocolFeeTo_send = async (protocolFeeTo, options) => {
            let result = await this.send('setProtocolFeeTo', [protocolFeeTo], options);
            return result;
        };
        let setProtocolFeeTo_call = async (protocolFeeTo, options) => {
            let result = await this.call('setProtocolFeeTo', [protocolFeeTo], options);
            return;
        };
        this.setProtocolFeeTo = Object.assign(setProtocolFeeTo_send, {
            call: setProtocolFeeTo_call
        });
        let setTradeFee_send = async (tradeFee, options) => {
            let result = await this.send('setTradeFee', [this.wallet.utils.toString(tradeFee)], options);
            return result;
        };
        let setTradeFee_call = async (tradeFee, options) => {
            let result = await this.call('setTradeFee', [this.wallet.utils.toString(tradeFee)], options);
            return;
        };
        this.setTradeFee = Object.assign(setTradeFee_send, {
            call: setTradeFee_call
        });
    }
}
exports.OSWAP_Factory = OSWAP_Factory;
