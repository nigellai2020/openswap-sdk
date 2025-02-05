import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RangePairCreator.json";

export class OSWAP_RangePairCreator extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: number|BigNumber|TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    createPair: {
        (salt:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (salt:string, options?: TransactionOptions) => Promise<string>;
    }
    private assign(){
        let createPair_send = async (salt:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('createPair',[this.wallet.utils.stringToBytes32(salt)],options);
            return result;
        }
        let createPair_call = async (salt:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('createPair',[this.wallet.utils.stringToBytes32(salt)],options);
            return result;
        }
        this.createPair = Object.assign(createPair_send, {
            call:createPair_call
        });
    }
}