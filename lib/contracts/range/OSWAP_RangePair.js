"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RangePair = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_RangePair_json_1 = __importDefault(require("./OSWAP_RangePair.json"));
class OSWAP_RangePair extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RangePair_json_1.default.abi, OSWAP_RangePair_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    parseAddLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "AddLiquidity").map(e => this.decodeAddLiquidityEvent(e));
    }
    decodeAddLiquidityEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            staked: new eth_contract_1.BigNumber(result.staked),
            amount: new eth_contract_1.BigNumber(result.amount),
            newStakeBalance: new eth_contract_1.BigNumber(result.newStakeBalance),
            newAmountBalance: new eth_contract_1.BigNumber(result.newAmountBalance),
            lowerLimit: new eth_contract_1.BigNumber(result.lowerLimit),
            upperLimit: new eth_contract_1.BigNumber(result.upperLimit),
            startDate: new eth_contract_1.BigNumber(result.startDate),
            expire: new eth_contract_1.BigNumber(result.expire),
            _event: event
        };
    }
    parseNewProviderEvent(receipt) {
        return this.parseEvents(receipt, "NewProvider").map(e => this.decodeNewProviderEvent(e));
    }
    decodeNewProviderEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            index: new eth_contract_1.BigNumber(result.index),
            _event: event
        };
    }
    parseRemoveAllLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "RemoveAllLiquidity").map(e => this.decodeRemoveAllLiquidityEvent(e));
    }
    decodeRemoveAllLiquidityEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            unstake: new eth_contract_1.BigNumber(result.unstake),
            amount0Out: new eth_contract_1.BigNumber(result.amount0Out),
            amount1Out: new eth_contract_1.BigNumber(result.amount1Out),
            _event: event
        };
    }
    parseRemoveLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "RemoveLiquidity").map(e => this.decodeRemoveLiquidityEvent(e));
    }
    decodeRemoveLiquidityEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            unstake: new eth_contract_1.BigNumber(result.unstake),
            amountOut: new eth_contract_1.BigNumber(result.amountOut),
            reserveOut: new eth_contract_1.BigNumber(result.reserveOut),
            newStakeBalance: new eth_contract_1.BigNumber(result.newStakeBalance),
            newAmountBalance: new eth_contract_1.BigNumber(result.newAmountBalance),
            newReserveBalance: new eth_contract_1.BigNumber(result.newReserveBalance),
            lowerLimit: new eth_contract_1.BigNumber(result.lowerLimit),
            upperLimit: new eth_contract_1.BigNumber(result.upperLimit),
            startDate: new eth_contract_1.BigNumber(result.startDate),
            expire: new eth_contract_1.BigNumber(result.expire),
            _event: event
        };
    }
    parseReplenishEvent(receipt) {
        return this.parseEvents(receipt, "Replenish").map(e => this.decodeReplenishEvent(e));
    }
    decodeReplenishEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            amountIn: new eth_contract_1.BigNumber(result.amountIn),
            newAmountBalance: new eth_contract_1.BigNumber(result.newAmountBalance),
            newReserveBalance: new eth_contract_1.BigNumber(result.newReserveBalance),
            _event: event
        };
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event) {
        let result = event.data;
        return {
            to: result.to,
            direction: result.direction,
            price: new eth_contract_1.BigNumber(result.price),
            amountIn: new eth_contract_1.BigNumber(result.amountIn),
            amountOut: new eth_contract_1.BigNumber(result.amountOut),
            tradeFee: new eth_contract_1.BigNumber(result.tradeFee),
            protocolFee: new eth_contract_1.BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwappedOneProviderEvent(receipt) {
        return this.parseEvents(receipt, "SwappedOneProvider").map(e => this.decodeSwappedOneProviderEvent(e));
    }
    decodeSwappedOneProviderEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            amountOut: new eth_contract_1.BigNumber(result.amountOut),
            amountIn: new eth_contract_1.BigNumber(result.amountIn),
            newAmountBalance: new eth_contract_1.BigNumber(result.newAmountBalance),
            newCounterReserveBalance: new eth_contract_1.BigNumber(result.newCounterReserveBalance),
            _event: event
        };
    }
    parseUpdateProviderOfferEvent(receipt) {
        return this.parseEvents(receipt, "UpdateProviderOffer").map(e => this.decodeUpdateProviderOfferEvent(e));
    }
    decodeUpdateProviderOfferEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            replenish: new eth_contract_1.BigNumber(result.replenish),
            newAmountBalance: new eth_contract_1.BigNumber(result.newAmountBalance),
            newReserveBalance: new eth_contract_1.BigNumber(result.newReserveBalance),
            lowerLimit: new eth_contract_1.BigNumber(result.lowerLimit),
            upperLimit: new eth_contract_1.BigNumber(result.upperLimit),
            startDate: new eth_contract_1.BigNumber(result.startDate),
            expire: new eth_contract_1.BigNumber(result.expire),
            privateReplenish: result.privateReplenish,
            _event: event
        };
    }
    assign() {
        let counter_call = async (options) => {
            let result = await this.call('counter', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.counter = counter_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let getAmountInParams = (params) => [params.tokenOut, this.wallet.utils.toString(params.amountOut), this.wallet.utils.stringToBytes(params.data)];
        let getAmountIn_call = async (params, options) => {
            let result = await this.call('getAmountIn', getAmountInParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [params.tokenIn, this.wallet.utils.toString(params.amountIn), this.wallet.utils.stringToBytes(params.data)];
        let getAmountOut_call = async (params, options) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getBalances_call = async (options) => {
            let result = await this.call('getBalances', [], options);
            return {
                param1: new eth_contract_1.BigNumber(result[0]),
                param2: new eth_contract_1.BigNumber(result[1]),
                param3: new eth_contract_1.BigNumber(result[2])
            };
        };
        this.getBalances = getBalances_call;
        let getLastBalances_call = async (options) => {
            let result = await this.call('getLastBalances', [], options);
            return {
                param1: new eth_contract_1.BigNumber(result[0]),
                param2: new eth_contract_1.BigNumber(result[1])
            };
        };
        this.getLastBalances = getLastBalances_call;
        let getLatestPriceParams = (params) => [params.direction, this.wallet.utils.stringToBytes(params.payload)];
        let getLatestPrice_call = async (params, options) => {
            let result = await this.call('getLatestPrice', getLatestPriceParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getLatestPrice = getLatestPrice_call;
        let getOffersParams = (params) => [params.direction, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.end)];
        let getOffers_call = async (params, options) => {
            let result = await this.call('getOffers', getOffersParams(params), options);
            return {
                provider: result.provider,
                amountAndReserve: result.amountAndReserve.map(e => new eth_contract_1.BigNumber(e)),
                lowerLimitAndUpperLimit: result.lowerLimitAndUpperLimit.map(e => new eth_contract_1.BigNumber(e)),
                startDateAndExpire: result.startDateAndExpire.map(e => new eth_contract_1.BigNumber(e)),
                privateReplenish: result.privateReplenish
            };
        };
        this.getOffers = getOffers_call;
        let getProviderOfferParams = (params) => [params.provider, params.direction];
        let getProviderOffer_call = async (params, options) => {
            let result = await this.call('getProviderOffer', getProviderOfferParams(params), options);
            return {
                index: new eth_contract_1.BigNumber(result.index),
                staked: new eth_contract_1.BigNumber(result.staked),
                amount: new eth_contract_1.BigNumber(result.amount),
                reserve: new eth_contract_1.BigNumber(result.reserve),
                lowerLimit: new eth_contract_1.BigNumber(result.lowerLimit),
                upperLimit: new eth_contract_1.BigNumber(result.upperLimit),
                startDate: new eth_contract_1.BigNumber(result.startDate),
                expire: new eth_contract_1.BigNumber(result.expire),
                privateReplenish: result.privateReplenish
            };
        };
        this.getProviderOffer = getProviderOffer_call;
        let govToken_call = async (options) => {
            let result = await this.call('govToken', [], options);
            return result;
        };
        this.govToken = govToken_call;
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
        let lastGovBalance_call = async (options) => {
            let result = await this.call('lastGovBalance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastGovBalance = lastGovBalance_call;
        let lastToken0Balance_call = async (options) => {
            let result = await this.call('lastToken0Balance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastToken0Balance = lastToken0Balance_call;
        let lastToken1Balance_call = async (options) => {
            let result = await this.call('lastToken1Balance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastToken1Balance = lastToken1Balance_call;
        let offersParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let offers_call = async (params, options) => {
            let result = await this.call('offers', offersParams(params), options);
            return {
                provider: result.provider,
                amount: new eth_contract_1.BigNumber(result.amount),
                reserve: new eth_contract_1.BigNumber(result.reserve),
                lowerLimit: new eth_contract_1.BigNumber(result.lowerLimit),
                upperLimit: new eth_contract_1.BigNumber(result.upperLimit),
                startDate: new eth_contract_1.BigNumber(result.startDate),
                expire: new eth_contract_1.BigNumber(result.expire),
                privateReplenish: result.privateReplenish
            };
        };
        this.offers = offers_call;
        let oracleFactory_call = async (options) => {
            let result = await this.call('oracleFactory', [], options);
            return result;
        };
        this.oracleFactory = oracleFactory_call;
        let protocolFeeBalance0_call = async (options) => {
            let result = await this.call('protocolFeeBalance0', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFeeBalance0 = protocolFeeBalance0_call;
        let protocolFeeBalance1_call = async (options) => {
            let result = await this.call('protocolFeeBalance1', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFeeBalance1 = protocolFeeBalance1_call;
        let providerOfferIndex_call = async (param1, options) => {
            let result = await this.call('providerOfferIndex', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.providerOfferIndex = providerOfferIndex_call;
        let providerStaking_call = async (param1, options) => {
            let result = await this.call('providerStaking', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.providerStaking = providerStaking_call;
        let rangeLiquidityProvider_call = async (options) => {
            let result = await this.call('rangeLiquidityProvider', [], options);
            return result;
        };
        this.rangeLiquidityProvider = rangeLiquidityProvider_call;
        let scaleDirection_call = async (options) => {
            let result = await this.call('scaleDirection', [], options);
            return result;
        };
        this.scaleDirection = scaleDirection_call;
        let scaler_call = async (options) => {
            let result = await this.call('scaler', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.scaler = scaler_call;
        let stakeBalance_call = async (options) => {
            let result = await this.call('stakeBalance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakeBalance = stakeBalance_call;
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
        let addLiquidityParams = (params) => [params.provider, params.direction, this.wallet.utils.toString(params.staked), this.wallet.utils.toString(params.lowerLimit), this.wallet.utils.toString(params.upperLimit), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire)];
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
        let redeemProtocolFee_send = async (options) => {
            let result = await this.send('redeemProtocolFee', [], options);
            return result;
        };
        let redeemProtocolFee_call = async (options) => {
            let result = await this.call('redeemProtocolFee', [], options);
            return;
        };
        this.redeemProtocolFee = Object.assign(redeemProtocolFee_send, {
            call: redeemProtocolFee_call
        });
        let removeAllLiquidity_send = async (provider, options) => {
            let result = await this.send('removeAllLiquidity', [provider], options);
            return result;
        };
        let removeAllLiquidity_call = async (provider, options) => {
            let result = await this.call('removeAllLiquidity', [provider], options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1),
                staked: new eth_contract_1.BigNumber(result.staked)
            };
        };
        this.removeAllLiquidity = Object.assign(removeAllLiquidity_send, {
            call: removeAllLiquidity_call
        });
        let removeLiquidityParams = (params) => [params.provider, params.direction, this.wallet.utils.toString(params.unstake), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.reserveOut), this.wallet.utils.toString(params.lowerLimit), this.wallet.utils.toString(params.upperLimit), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire)];
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
        let replenishParams = (params) => [params.provider, params.direction, this.wallet.utils.toString(params.amountIn)];
        let replenish_send = async (params, options) => {
            let result = await this.send('replenish', replenishParams(params), options);
            return result;
        };
        let replenish_call = async (params, options) => {
            let result = await this.call('replenish', replenishParams(params), options);
            return;
        };
        this.replenish = Object.assign(replenish_send, {
            call: replenish_call
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
        let updateProviderOfferParams = (params) => [params.provider, params.direction, this.wallet.utils.toString(params.replenishAmount), this.wallet.utils.toString(params.lowerLimit), this.wallet.utils.toString(params.upperLimit), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire), params.privateReplenish];
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
exports.OSWAP_RangePair = OSWAP_RangePair;
