"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_PausableFactory = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_PausableFactory_json_1 = __importDefault(require("./OSWAP_PausableFactory.json"));
class OSWAP_PausableFactory extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_PausableFactory_json_1.default.abi, OSWAP_PausableFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance, options) {
        return this.__deploy([governance], options);
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
exports.OSWAP_PausableFactory = OSWAP_PausableFactory;
