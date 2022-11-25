"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ERC20 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_ERC20_json_1 = __importDefault(require("./OSWAP_ERC20.json"));
class OSWAP_ERC20 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ERC20_json_1.default.abi, OSWAP_ERC20_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_contract_1.BigNumber(result.value),
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new eth_contract_1.BigNumber(result.value),
            _event: event
        };
    }
    assign() {
        let EIP712_TYPEHASH_call = async (options) => {
            let result = await this.call('EIP712_TYPEHASH', [], options);
            return result;
        };
        this.EIP712_TYPEHASH = EIP712_TYPEHASH_call;
        let NAME_HASH_call = async (options) => {
            let result = await this.call('NAME_HASH', [], options);
            return result;
        };
        this.NAME_HASH = NAME_HASH_call;
        let PERMIT_TYPEHASH_call = async (options) => {
            let result = await this.call('PERMIT_TYPEHASH', [], options);
            return result;
        };
        this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call;
        let VERSION_HASH_call = async (options) => {
            let result = await this.call('VERSION_HASH', [], options);
            return result;
        };
        this.VERSION_HASH = VERSION_HASH_call;
        let allowanceParams = (params) => [params.param1, params.param2];
        let allowance_call = async (params, options) => {
            let result = await this.call('allowance', allowanceParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.allowance = allowance_call;
        let balanceOf_call = async (param1, options) => {
            let result = await this.call('balanceOf', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let decimals_call = async (options) => {
            let result = await this.call('decimals', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let name_call = async (options) => {
            let result = await this.call('name', [], options);
            return result;
        };
        this.name = name_call;
        let nonces_call = async (param1, options) => {
            let result = await this.call('nonces', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.nonces = nonces_call;
        let symbol_call = async (options) => {
            let result = await this.call('symbol', [], options);
            return result;
        };
        this.symbol = symbol_call;
        let totalSupply_call = async (options) => {
            let result = await this.call('totalSupply', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.value)];
        let approve_send = async (params, options) => {
            let result = await this.send('approve', approveParams(params), options);
            return result;
        };
        let approve_call = async (params, options) => {
            let result = await this.call('approve', approveParams(params), options);
            return result;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let permitParams = (params) => [params.owner, params.spender, this.wallet.utils.toString(params.value), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let permit_send = async (params, options) => {
            let result = await this.send('permit', permitParams(params), options);
            return result;
        };
        let permit_call = async (params, options) => {
            let result = await this.call('permit', permitParams(params), options);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let transferParams = (params) => [params.to, this.wallet.utils.toString(params.value)];
        let transfer_send = async (params, options) => {
            let result = await this.send('transfer', transferParams(params), options);
            return result;
        };
        let transfer_call = async (params, options) => {
            let result = await this.call('transfer', transferParams(params), options);
            return result;
        };
        this.transfer = Object.assign(transfer_send, {
            call: transfer_call
        });
        let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.value)];
        let transferFrom_send = async (params, options) => {
            let result = await this.send('transferFrom', transferFromParams(params), options);
            return result;
        };
        let transferFrom_call = async (params, options) => {
            let result = await this.call('transferFrom', transferFromParams(params), options);
            return result;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
    }
}
exports.OSWAP_ERC20 = OSWAP_ERC20;
