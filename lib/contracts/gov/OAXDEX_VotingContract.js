"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAXDEX_VotingContract = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OAXDEX_VotingContract_json_1 = __importDefault(require("./OAXDEX_VotingContract.json"));
class OAXDEX_VotingContract extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OAXDEX_VotingContract_json_1.default.abi, OAXDEX_VotingContract_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.governance, params.executor, this.wallet.utils.toString(params.id), this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.options), this.wallet.utils.toString(params.quorum), this.wallet.utils.toString(params.threshold), this.wallet.utils.toString(params.voteEndTime), this.wallet.utils.toString(params.executeDelay), this.wallet.utils.stringToBytes32(params.executeParam)], options);
    }
    assign() {
        let _executeParam_call = async (param1, options) => {
            let result = await this.call('_executeParam', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this._executeParam = _executeParam_call;
        let _options_call = async (param1, options) => {
            let result = await this.call('_options', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this._options = _options_call;
        let _optionsWeight_call = async (param1, options) => {
            let result = await this.call('_optionsWeight', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this._optionsWeight = _optionsWeight_call;
        let accountVoteOption_call = async (param1, options) => {
            let result = await this.call('accountVoteOption', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.accountVoteOption = accountVoteOption_call;
        let accountVoteWeight_call = async (param1, options) => {
            let result = await this.call('accountVoteWeight', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.accountVoteWeight = accountVoteWeight_call;
        let executeDelay_call = async (options) => {
            let result = await this.call('executeDelay', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.executeDelay = executeDelay_call;
        let executeParam_call = async (options) => {
            let result = await this.call('executeParam', [], options);
            return result;
        };
        this.executeParam = executeParam_call;
        let executed_call = async (options) => {
            let result = await this.call('executed', [], options);
            return result;
        };
        this.executed = executed_call;
        let executor_call = async (options) => {
            let result = await this.call('executor', [], options);
            return result;
        };
        this.executor = executor_call;
        let getParams_call = async (options) => {
            let result = await this.call('getParams', [], options);
            return {
                executor_: result.executor_,
                id_: new eth_contract_1.BigNumber(result.id_),
                name_: result.name_,
                options_: result.options_,
                voteStartTime_: new eth_contract_1.BigNumber(result.voteStartTime_),
                voteEndTime_: new eth_contract_1.BigNumber(result.voteEndTime_),
                executeDelay_: new eth_contract_1.BigNumber(result.executeDelay_),
                status_: result.status_,
                optionsWeight_: result.optionsWeight_.map(e => new eth_contract_1.BigNumber(e)),
                quorum_: result.quorum_.map(e => new eth_contract_1.BigNumber(e)),
                executeParam_: result.executeParam_
            };
        };
        this.getParams = getParams_call;
        let governance_call = async (options) => {
            let result = await this.call('governance', [], options);
            return result;
        };
        this.governance = governance_call;
        let id_call = async (options) => {
            let result = await this.call('id', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.id = id_call;
        let name_call = async (options) => {
            let result = await this.call('name', [], options);
            return result;
        };
        this.name = name_call;
        let options_call = async (options) => {
            let result = await this.call('options', [], options);
            return result;
        };
        this.options = options_call;
        let optionsCount_call = async (options) => {
            let result = await this.call('optionsCount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.optionsCount = optionsCount_call;
        let optionsWeight_call = async (options) => {
            let result = await this.call('optionsWeight', [], options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.optionsWeight = optionsWeight_call;
        let quorum_call = async (options) => {
            let result = await this.call('quorum', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.quorum = quorum_call;
        let threshold_call = async (options) => {
            let result = await this.call('threshold', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.threshold = threshold_call;
        let totalVoteWeight_call = async (options) => {
            let result = await this.call('totalVoteWeight', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalVoteWeight = totalVoteWeight_call;
        let totalWeight_call = async (options) => {
            let result = await this.call('totalWeight', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalWeight = totalWeight_call;
        let vetoed_call = async (options) => {
            let result = await this.call('vetoed', [], options);
            return result;
        };
        this.vetoed = vetoed_call;
        let voteEndTime_call = async (options) => {
            let result = await this.call('voteEndTime', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.voteEndTime = voteEndTime_call;
        let voteStartTime_call = async (options) => {
            let result = await this.call('voteStartTime', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.voteStartTime = voteStartTime_call;
        let execute_send = async (options) => {
            let result = await this.send('execute', [], options);
            return result;
        };
        let execute_call = async (options) => {
            let result = await this.call('execute', [], options);
            return;
        };
        this.execute = Object.assign(execute_send, {
            call: execute_call
        });
        let updateWeight_send = async (account, options) => {
            let result = await this.send('updateWeight', [account], options);
            return result;
        };
        let updateWeight_call = async (account, options) => {
            let result = await this.call('updateWeight', [account], options);
            return;
        };
        this.updateWeight = Object.assign(updateWeight_send, {
            call: updateWeight_call
        });
        let veto_send = async (options) => {
            let result = await this.send('veto', [], options);
            return result;
        };
        let veto_call = async (options) => {
            let result = await this.call('veto', [], options);
            return;
        };
        this.veto = Object.assign(veto_send, {
            call: veto_call
        });
        let vote_send = async (option, options) => {
            let result = await this.send('vote', [this.wallet.utils.toString(option)], options);
            return result;
        };
        let vote_call = async (option, options) => {
            let result = await this.call('vote', [this.wallet.utils.toString(option)], options);
            return;
        };
        this.vote = Object.assign(vote_send, {
            call: vote_call
        });
    }
}
exports.OAXDEX_VotingContract = OAXDEX_VotingContract;
