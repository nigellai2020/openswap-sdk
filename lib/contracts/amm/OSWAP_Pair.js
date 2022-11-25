"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_Pair = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_Pair_json_1 = __importDefault(require("./OSWAP_Pair.json"));
class OSWAP_Pair extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_Pair_json_1.default.abi, OSWAP_Pair_json_1.default.bytecode);
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
    parseBurnEvent(receipt) {
        return this.parseEvents(receipt, "Burn").map(e => this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            to: result.to,
            _event: event
        };
    }
    parseMintEvent(receipt) {
        return this.parseEvents(receipt, "Mint").map(e => this.decodeMintEvent(e));
    }
    decodeMintEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseProtocolFeeSetEvent(receipt) {
        return this.parseEvents(receipt, "ProtocolFeeSet").map(e => this.decodeProtocolFeeSetEvent(e));
    }
    decodeProtocolFeeSetEvent(event) {
        let result = event.data;
        return {
            protocolFee: new eth_contract_1.BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0In: new eth_contract_1.BigNumber(result.amount0In),
            amount1In: new eth_contract_1.BigNumber(result.amount1In),
            amount0Out: new eth_contract_1.BigNumber(result.amount0Out),
            amount1Out: new eth_contract_1.BigNumber(result.amount1Out),
            to: result.to,
            _event: event
        };
    }
    parseSyncEvent(receipt) {
        return this.parseEvents(receipt, "Sync").map(e => this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event) {
        let result = event.data;
        return {
            reserve0: new eth_contract_1.BigNumber(result.reserve0),
            reserve1: new eth_contract_1.BigNumber(result.reserve1),
            _event: event
        };
    }
    parseTradeFeeSetEvent(receipt) {
        return this.parseEvents(receipt, "TradeFeeSet").map(e => this.decodeTradeFeeSetEvent(e));
    }
    decodeTradeFeeSetEvent(event) {
        let result = event.data;
        return {
            tradeFee: new eth_contract_1.BigNumber(result.tradeFee),
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
        let MINIMUM_LIQUIDITY_call = async (options) => {
            let result = await this.call('MINIMUM_LIQUIDITY', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.MINIMUM_LIQUIDITY = MINIMUM_LIQUIDITY_call;
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
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let getAmountInParams = (params) => [params.tokenOut, this.wallet.utils.toString(params.amountOut)];
        let getAmountIn_call = async (params, options) => {
            let result = await this.call('getAmountIn', getAmountInParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [params.tokenIn, this.wallet.utils.toString(params.amountIn)];
        let getAmountOut_call = async (params, options) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getReserves_call = async (options) => {
            let result = await this.call('getReserves', [], options);
            return {
                _reserve0: new eth_contract_1.BigNumber(result._reserve0),
                _reserve1: new eth_contract_1.BigNumber(result._reserve1),
                _blockTimestampLast: new eth_contract_1.BigNumber(result._blockTimestampLast)
            };
        };
        this.getReserves = getReserves_call;
        let isLive_call = async (options) => {
            let result = await this.call('isLive', [], options);
            return result;
        };
        this.isLive = isLive_call;
        let kLast_call = async (options) => {
            let result = await this.call('kLast', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.kLast = kLast_call;
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
        let price0CumulativeLast_call = async (options) => {
            let result = await this.call('price0CumulativeLast', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.price0CumulativeLast = price0CumulativeLast_call;
        let price1CumulativeLast_call = async (options) => {
            let result = await this.call('price1CumulativeLast', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.price1CumulativeLast = price1CumulativeLast_call;
        let protocolFee_call = async (options) => {
            let result = await this.call('protocolFee', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFee = protocolFee_call;
        let symbol_call = async (options) => {
            let result = await this.call('symbol', [], options);
            return result;
        };
        this.symbol = symbol_call;
        let token0_call = async (options) => {
            let result = await this.call('token0', [], options);
            return result;
        };
        this.token0 = token0_call;
        let token1_call = async (options) => {
            let result = await this.call('token1', [], options);
            return result;
        };
        this.token1 = token1_call;
        let totalSupply_call = async (options) => {
            let result = await this.call('totalSupply', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let tradeFee_call = async (options) => {
            let result = await this.call('tradeFee', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tradeFee = tradeFee_call;
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
        let burn_send = async (to, options) => {
            let result = await this.send('burn', [to], options);
            return result;
        };
        let burn_call = async (to, options) => {
            let result = await this.call('burn', [to], options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.burn = Object.assign(burn_send, {
            call: burn_call
        });
        let initializeParams = (params) => [params.token0, params.token1];
        let initialize_send = async (params, options) => {
            let result = await this.send('initialize', initializeParams(params), options);
            return result;
        };
        let initialize_call = async (params, options) => {
            let result = await this.call('initialize', initializeParams(params), options);
            return;
        };
        this.initialize = Object.assign(initialize_send, {
            call: initialize_call
        });
        let mint_send = async (to, options) => {
            let result = await this.send('mint', [to], options);
            return result;
        };
        let mint_call = async (to, options) => {
            let result = await this.call('mint', [to], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
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
        let skim_send = async (to, options) => {
            let result = await this.send('skim', [to], options);
            return result;
        };
        let skim_call = async (to, options) => {
            let result = await this.call('skim', [to], options);
            return;
        };
        this.skim = Object.assign(skim_send, {
            call: skim_call
        });
        let swapParams = (params) => [this.wallet.utils.toString(params.amount0Out), this.wallet.utils.toString(params.amount1Out), params.to, this.wallet.utils.stringToBytes(params.data)];
        let swap_send = async (params, options) => {
            let result = await this.send('swap', swapParams(params), options);
            return result;
        };
        let swap_call = async (params, options) => {
            let result = await this.call('swap', swapParams(params), options);
            return;
        };
        this.swap = Object.assign(swap_send, {
            call: swap_call
        });
        let sync_send = async (options) => {
            let result = await this.send('sync', [], options);
            return result;
        };
        let sync_call = async (options) => {
            let result = await this.call('sync', [], options);
            return;
        };
        this.sync = Object.assign(sync_send, {
            call: sync_call
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
        let updateFee_send = async (options) => {
            let result = await this.send('updateFee', [], options);
            return result;
        };
        let updateFee_call = async (options) => {
            let result = await this.call('updateFee', [], options);
            return;
        };
        this.updateFee = Object.assign(updateFee_send, {
            call: updateFee_call
        });
        let updateProtocolFee_send = async (options) => {
            let result = await this.send('updateProtocolFee', [], options);
            return result;
        };
        let updateProtocolFee_call = async (options) => {
            let result = await this.call('updateProtocolFee', [], options);
            return;
        };
        this.updateProtocolFee = Object.assign(updateProtocolFee_send, {
            call: updateProtocolFee_call
        });
    }
}
exports.OSWAP_Pair = OSWAP_Pair;
