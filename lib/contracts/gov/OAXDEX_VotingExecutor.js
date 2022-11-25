"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_VotingExecutor = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OAXDEX_VotingExecutor_json_1 = __importDefault(require("./OAXDEX_VotingExecutor.json"));
class OAXDEX_VotingExecutor extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OAXDEX_VotingExecutor_json_1.default.abi, OAXDEX_VotingExecutor_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.governance, params.admin], options);
    }
    assign() {
        let admin_call = async (options) => {
            let result = await this.call('admin', [], options);
            return result;
        };
        this.admin = admin_call;
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
exports.OAXDEX_VotingExecutor = OAXDEX_VotingExecutor;
