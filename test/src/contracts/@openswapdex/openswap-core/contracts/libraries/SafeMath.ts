import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../../../../bin/@openswapdex/openswap-core/contracts/libraries/SafeMath.json");

export class SafeMath extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{        	
        return this._deploy();
    }
}