"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_VotingExecutor4 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_VotingExecutor4_json_1 = __importDefault(require("./OSWAP_VotingExecutor4.json"));
class OSWAP_VotingExecutor4 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_VotingExecutor4_json_1.default.abi, OSWAP_VotingExecutor4_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.governance, params.factory, params.configStore], options);
    }
    assign() {
        let configStore_call = async (options) => {
            let result = await this.call('configStore', [], options);
            return result;
        };
        this.configStore = configStore_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let governance_call = async (options) => {
            let result = await this.call('governance', [], options);
            return result;
        };
        this.governance = governance_call;
        let execute_send = async (params, options) => {
            let result = await this.send('execute', [this.wallet.utils.stringToBytes32(params)], options);
            return result;
        };
        let execute_call = async (params, options) => {
            let result = await this.call('execute', [this.wallet.utils.stringToBytes32(params)], options);
            return;
        };
        this.execute = Object.assign(execute_send, {
            call: execute_call
        });
    }
}
exports.OSWAP_VotingExecutor4 = OSWAP_VotingExecutor4;
