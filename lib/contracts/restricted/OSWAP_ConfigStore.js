"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ConfigStore = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_ConfigStore_json_1 = __importDefault(require("./OSWAP_ConfigStore.json"));
class OSWAP_ConfigStore extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ConfigStore_json_1.default.abi, OSWAP_ConfigStore_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance, options) {
        return this.__deploy([governance], options);
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
    assign() {
        let customParam_call = async (param1, options) => {
            let result = await this.call('customParam', [this.wallet.utils.stringToBytes32(param1)], options);
            return result;
        };
        this.customParam = customParam_call;
        let customParamNames_call = async (param1, options) => {
            let result = await this.call('customParamNames', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.customParamNames = customParamNames_call;
        let customParamNamesIdx_call = async (param1, options) => {
            let result = await this.call('customParamNamesIdx', [this.wallet.utils.stringToBytes32(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.customParamNamesIdx = customParamNamesIdx_call;
        let customParamNamesLength_call = async (options) => {
            let result = await this.call('customParamNamesLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.customParamNamesLength = customParamNamesLength_call;
        let governance_call = async (options) => {
            let result = await this.call('governance', [], options);
            return result;
        };
        this.governance = governance_call;
        let setCustomParamParams = (params) => [this.wallet.utils.stringToBytes32(params.paramName), this.wallet.utils.stringToBytes32(params.paramValue)];
        let setCustomParam_send = async (params, options) => {
            let result = await this.send('setCustomParam', setCustomParamParams(params), options);
            return result;
        };
        let setCustomParam_call = async (params, options) => {
            let result = await this.call('setCustomParam', setCustomParamParams(params), options);
            return;
        };
        this.setCustomParam = Object.assign(setCustomParam_send, {
            call: setCustomParam_call
        });
        let setMultiCustomParamParams = (params) => [this.wallet.utils.stringToBytes32(params.paramName), this.wallet.utils.stringToBytes32(params.paramValue)];
        let setMultiCustomParam_send = async (params, options) => {
            let result = await this.send('setMultiCustomParam', setMultiCustomParamParams(params), options);
            return result;
        };
        let setMultiCustomParam_call = async (params, options) => {
            let result = await this.call('setMultiCustomParam', setMultiCustomParamParams(params), options);
            return;
        };
        this.setMultiCustomParam = Object.assign(setMultiCustomParam_send, {
            call: setMultiCustomParam_call
        });
    }
}
exports.OSWAP_ConfigStore = OSWAP_ConfigStore;
