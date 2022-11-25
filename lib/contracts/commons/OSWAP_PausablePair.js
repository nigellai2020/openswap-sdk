"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_PausablePair = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_PausablePair_json_1 = __importDefault(require("./OSWAP_PausablePair.json"));
class OSWAP_PausablePair extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_PausablePair_json_1.default.abi, OSWAP_PausablePair_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    assign() {
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
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
    }
}
exports.OSWAP_PausablePair = OSWAP_PausablePair;
