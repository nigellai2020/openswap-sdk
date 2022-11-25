"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenSwap = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const index_1 = require("./contracts/index");
class OpenSwap {
    constructor(wallet, address) {
        this.address = address;
        this._oswap = new index_1.OpenSwap(wallet, address);
    }
    async deploy(params) {
        params.initSupply = eth_wallet_1.Utils.toDecimals(params.initSupply);
        params.totalSupply = eth_wallet_1.Utils.toDecimals(params.totalSupply);
        this.address = await this._oswap.deploy(params);
        return this.address;
    }
    async allowance(params) {
        return eth_wallet_1.Utils.fromDecimals(await this._oswap.allowance(params));
    }
    async approve(params) {
        params.amount = eth_wallet_1.Utils.toDecimals(params.amount);
        let receipt = await this._oswap.approve(params);
        let event = this._oswap.parseApprovalEvent(receipt)[0];
        event.value = eth_wallet_1.Utils.fromDecimals(event.value);
        return event;
    }
    async balanceOf(account) {
        return eth_wallet_1.Utils.fromDecimals(await this._oswap.balanceOf(account));
    }
    get cap() {
        return (async () => { return eth_wallet_1.Utils.fromDecimals(await this._oswap.cap()); })();
    }
    get decimals() {
        return (async () => { return (await this._oswap.decimals()).toNumber(); })();
    }
    async decreaseAllowance(params) {
        params.subtractedValue = eth_wallet_1.Utils.toDecimals(params.subtractedValue);
        let receipt = await this._oswap.decreaseAllowance(params);
        let event = this._oswap.parseApprovalEvent(receipt)[0];
        event.value = eth_wallet_1.Utils.fromDecimals(event.value);
        return event;
    }
    async increaseAllowance(params) {
        params.addedValue = eth_wallet_1.Utils.toDecimals(params.addedValue);
        let receipt = await this._oswap.increaseAllowance(params);
        let event = this._oswap.parseApprovalEvent(receipt)[0];
        event.value = eth_wallet_1.Utils.fromDecimals(event.value);
        return event;
    }
    async mint(params) {
        let receipt = await this._oswap.mint({ account: params.address, amount: eth_wallet_1.Utils.toDecimals(params.amount) });
        let event = this._oswap.parseTransferEvent(receipt)[0];
        event.value = eth_wallet_1.Utils.fromDecimals(event.value);
        return event;
    }
    get minter() {
        return this._oswap.minter();
    }
    get name() {
        return this._oswap.name();
    }
    get symbol() {
        return this._oswap.symbol();
    }
    get totalSupply() {
        return (async () => { return eth_wallet_1.Utils.fromDecimals(await this._oswap.totalSupply()); })();
    }
    async transfer(params) {
        let receipt = await this._oswap.transfer({ recipient: params.address, amount: eth_wallet_1.Utils.toDecimals(params.amount) });
        let event = this._oswap.parseTransferEvent(receipt)[0];
        event.value = eth_wallet_1.Utils.fromDecimals(event.value);
        return event;
    }
    async transferFrom(params) {
        params.amount = eth_wallet_1.Utils.toDecimals(params.amount);
        let receipt = await this._oswap.transferFrom(params);
        let transfer = this._oswap.parseTransferEvent(receipt)[0];
        transfer.value = eth_wallet_1.Utils.fromDecimals(transfer.value);
        let approval = this._oswap.parseApprovalEvent(receipt)[0];
        approval.value = eth_wallet_1.Utils.fromDecimals(approval.value);
        return { transfer, approval };
    }
}
exports.OpenSwap = OpenSwap;
