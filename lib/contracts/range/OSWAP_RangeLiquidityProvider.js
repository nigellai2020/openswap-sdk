"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RangeLiquidityProvider = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_RangeLiquidityProvider_json_1 = __importDefault(require("./OSWAP_RangeLiquidityProvider.json"));
class OSWAP_RangeLiquidityProvider extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RangeLiquidityProvider_json_1.default.abi, OSWAP_RangeLiquidityProvider_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.factory, params.WETH], options);
    }
    assign() {
        let WETH_call = async (options) => {
            let result = await this.call('WETH', [], options);
            return result;
        };
        this.WETH = WETH_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let govToken_call = async (options) => {
            let result = await this.call('govToken', [], options);
            return result;
        };
        this.govToken = govToken_call;
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, params.addingTokenA, this.wallet.utils.toString(params.staked), this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.lowerLimit), this.wallet.utils.toString(params.upperLimit), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire), this.wallet.utils.toString(params.deadline)];
        let addLiquidity_send = async (params, options) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        let addLiquidity_call = async (params, options) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let addLiquidityETHParams = (params) => [params.tokenA, params.addingTokenA, this.wallet.utils.toString(params.staked), this.wallet.utils.toString(params.amountAIn), this.wallet.utils.toString(params.lowerLimit), this.wallet.utils.toString(params.upperLimit), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire), this.wallet.utils.toString(params.deadline)];
        let addLiquidityETH_send = async (params, options) => {
            let result = await this.send('addLiquidityETH', addLiquidityETHParams(params), options);
            return result;
        };
        let addLiquidityETH_call = async (params, options) => {
            let result = await this.call('addLiquidityETH', addLiquidityETHParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
            call: addLiquidityETH_call
        });
        let removeAllLiquidityParams = (params) => [params.tokenA, params.tokenB, params.to, this.wallet.utils.toString(params.deadline)];
        let removeAllLiquidity_send = async (params, options) => {
            let result = await this.send('removeAllLiquidity', removeAllLiquidityParams(params), options);
            return result;
        };
        let removeAllLiquidity_call = async (params, options) => {
            let result = await this.call('removeAllLiquidity', removeAllLiquidityParams(params), options);
            return {
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB)
            };
        };
        this.removeAllLiquidity = Object.assign(removeAllLiquidity_send, {
            call: removeAllLiquidity_call
        });
        let removeAllLiquidityETHParams = (params) => [params.tokenA, params.to, this.wallet.utils.toString(params.deadline)];
        let removeAllLiquidityETH_send = async (params, options) => {
            let result = await this.send('removeAllLiquidityETH', removeAllLiquidityETHParams(params), options);
            return result;
        };
        let removeAllLiquidityETH_call = async (params, options) => {
            let result = await this.call('removeAllLiquidityETH', removeAllLiquidityETHParams(params), options);
            return {
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountETH: new eth_contract_1.BigNumber(result.amountETH)
            };
        };
        this.removeAllLiquidityETH = Object.assign(removeAllLiquidityETH_send, {
            call: removeAllLiquidityETH_call
        });
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, params.removingTokenA, params.to, this.wallet.utils.toString(params.unstake), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.reserveOut), this.wallet.utils.toString(params.lowerLimit), this.wallet.utils.toString(params.upperLimit), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire), this.wallet.utils.toString(params.deadline)];
        let removeLiquidity_send = async (params, options) => {
            let result = await this.send('removeLiquidity', removeLiquidityParams(params), options);
            return result;
        };
        let removeLiquidity_call = async (params, options) => {
            let result = await this.call('removeLiquidity', removeLiquidityParams(params), options);
            return;
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call
        });
        let removeLiquidityETHParams = (params) => [params.tokenA, params.removingTokenA, params.to, this.wallet.utils.toString(params.unstake), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.reserveOut), this.wallet.utils.toString(params.lowerLimit), this.wallet.utils.toString(params.upperLimit), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire), this.wallet.utils.toString(params.deadline)];
        let removeLiquidityETH_send = async (params, options) => {
            let result = await this.send('removeLiquidityETH', removeLiquidityETHParams(params), options);
            return result;
        };
        let removeLiquidityETH_call = async (params, options) => {
            let result = await this.call('removeLiquidityETH', removeLiquidityETHParams(params), options);
            return;
        };
        this.removeLiquidityETH = Object.assign(removeLiquidityETH_send, {
            call: removeLiquidityETH_call
        });
        let updateProviderOfferParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.replenishAmount), this.wallet.utils.toString(params.lowerLimit), this.wallet.utils.toString(params.upperLimit), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire), params.privateReplenish, this.wallet.utils.toString(params.deadline)];
        let updateProviderOffer_send = async (params, options) => {
            let result = await this.send('updateProviderOffer', updateProviderOfferParams(params), options);
            return result;
        };
        let updateProviderOffer_call = async (params, options) => {
            let result = await this.call('updateProviderOffer', updateProviderOfferParams(params), options);
            return;
        };
        this.updateProviderOffer = Object.assign(updateProviderOffer_send, {
            call: updateProviderOffer_call
        });
    }
}
exports.OSWAP_RangeLiquidityProvider = OSWAP_RangeLiquidityProvider;
