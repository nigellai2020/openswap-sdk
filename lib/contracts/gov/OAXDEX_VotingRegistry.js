"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_VotingRegistry = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OAXDEX_VotingRegistry_json_1 = __importDefault(require("./OAXDEX_VotingRegistry.json"));
class OAXDEX_VotingRegistry extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OAXDEX_VotingRegistry_json_1.default.abi, OAXDEX_VotingRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance, options) {
        return this.__deploy([governance], options);
    }
    assign() {
        let governance_call = async (options) => {
            let result = await this.call('governance', [], options);
            return result;
        };
        this.governance = governance_call;
        let newVoteParams = (params) => [params.executor, this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.options), this.wallet.utils.toString(params.quorum), this.wallet.utils.toString(params.threshold), this.wallet.utils.toString(params.voteEndTime), this.wallet.utils.toString(params.executeDelay), this.wallet.utils.stringToBytes32(params.executeParam)];
        let newVote_send = async (params, options) => {
            let result = await this.send('newVote', newVoteParams(params), options);
            return result;
        };
        let newVote_call = async (params, options) => {
            let result = await this.call('newVote', newVoteParams(params), options);
            return;
        };
        this.newVote = Object.assign(newVote_send, {
            call: newVote_call
        });
    }
}
exports.OAXDEX_VotingRegistry = OAXDEX_VotingRegistry;
