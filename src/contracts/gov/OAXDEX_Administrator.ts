import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OAXDEX_Administrator.json";

export interface IExecutePairRestartParams {factory:string;pair:string}
export interface IExecutePairShutdownParams {factory:string;pair:string}
export interface IFactoryRestartParams {factory:string;YorN:boolean}
export interface IFactoryRestartVoteParams {param1:string;param2:string}
export interface IFactoryShutdownParams {factory:string;YorN:boolean}
export interface IFactoryShutdownVoteParams {param1:string;param2:string}
export interface IPairRestartParams {pair:string;YorN:boolean}
export interface IPairRestartVoteParams {param1:string;param2:string}
export interface IPairShutdownParams {pair:string;YorN:boolean}
export interface IPairShutdownVoteParams {param1:string;param2:string}
export interface IVetoVotingParams {votingContract:string;YorN:boolean}
export interface IVetoVotingVoteParams {param1:string;param2:string}
export class OAXDEX_Administrator extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([governance], options);
    }
    parseAddAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.AddAdminEvent[]{
        return this.parseEvents(receipt, "AddAdmin").map(e=>this.decodeAddAdminEvent(e));
    }
    decodeAddAdminEvent(event: Event): OAXDEX_Administrator.AddAdminEvent{
        let result = event.data;
        return {
            admin: result.admin,
            _event: event
        };
    }
    parseRemoveAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.RemoveAdminEvent[]{
        return this.parseEvents(receipt, "RemoveAdmin").map(e=>this.decodeRemoveAdminEvent(e));
    }
    decodeRemoveAdminEvent(event: Event): OAXDEX_Administrator.RemoveAdminEvent{
        let result = event.data;
        return {
            admin: result.admin,
            _event: event
        };
    }
    parseSetMaxAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.SetMaxAdminEvent[]{
        return this.parseEvents(receipt, "SetMaxAdmin").map(e=>this.decodeSetMaxAdminEvent(e));
    }
    decodeSetMaxAdminEvent(event: Event): OAXDEX_Administrator.SetMaxAdminEvent{
        let result = event.data;
        return {
            maxAdmin: new BigNumber(result.maxAdmin),
            _event: event
        };
    }
    parseVotedFactoryRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryRestartEvent[]{
        return this.parseEvents(receipt, "VotedFactoryRestart").map(e=>this.decodeVotedFactoryRestartEvent(e));
    }
    decodeVotedFactoryRestartEvent(event: Event): OAXDEX_Administrator.VotedFactoryRestartEvent{
        let result = event.data;
        return {
            admin: result.admin,
            factory: result.factory,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedFactoryShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryShutdownEvent[]{
        return this.parseEvents(receipt, "VotedFactoryShutdown").map(e=>this.decodeVotedFactoryShutdownEvent(e));
    }
    decodeVotedFactoryShutdownEvent(event: Event): OAXDEX_Administrator.VotedFactoryShutdownEvent{
        let result = event.data;
        return {
            admin: result.admin,
            factory: result.factory,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedPairRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairRestartEvent[]{
        return this.parseEvents(receipt, "VotedPairRestart").map(e=>this.decodeVotedPairRestartEvent(e));
    }
    decodeVotedPairRestartEvent(event: Event): OAXDEX_Administrator.VotedPairRestartEvent{
        let result = event.data;
        return {
            admin: result.admin,
            pair: result.pair,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedPairShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairShutdownEvent[]{
        return this.parseEvents(receipt, "VotedPairShutdown").map(e=>this.decodeVotedPairShutdownEvent(e));
    }
    decodeVotedPairShutdownEvent(event: Event): OAXDEX_Administrator.VotedPairShutdownEvent{
        let result = event.data;
        return {
            admin: result.admin,
            pair: result.pair,
            YorN: result.YorN,
            _event: event
        };
    }
    parseVotedVetoEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedVetoEvent[]{
        return this.parseEvents(receipt, "VotedVeto").map(e=>this.decodeVotedVetoEvent(e));
    }
    decodeVotedVetoEvent(event: Event): OAXDEX_Administrator.VotedVetoEvent{
        let result = event.data;
        return {
            admin: result.admin,
            votingContract: result.votingContract,
            YorN: result.YorN,
            _event: event
        };
    }
    addAdmin: {
        (admin:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (admin:string, options?: TransactionOptions) => Promise<void>;
    }
    admins: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    adminsIdx: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    allAdmins: {
        (options?: TransactionOptions): Promise<string[]>;
    }
    executeFactoryRestart: {
        (factory:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (factory:string, options?: TransactionOptions) => Promise<void>;
    }
    executeFactoryShutdown: {
        (factory:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (factory:string, options?: TransactionOptions) => Promise<void>;
    }
    executePairRestart: {
        (params: IExecutePairRestartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IExecutePairRestartParams, options?: TransactionOptions) => Promise<void>;
    }
    executePairShutdown: {
        (params: IExecutePairShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IExecutePairShutdownParams, options?: TransactionOptions) => Promise<void>;
    }
    executeVetoVoting: {
        (votingContract:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingContract:string, options?: TransactionOptions) => Promise<void>;
    }
    factoryRestart: {
        (params: IFactoryRestartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IFactoryRestartParams, options?: TransactionOptions) => Promise<void>;
    }
    factoryRestartVote: {
        (params: IFactoryRestartVoteParams, options?: TransactionOptions): Promise<boolean>;
    }
    factoryShutdown: {
        (params: IFactoryShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IFactoryShutdownParams, options?: TransactionOptions) => Promise<void>;
    }
    factoryShutdownVote: {
        (params: IFactoryShutdownVoteParams, options?: TransactionOptions): Promise<boolean>;
    }
    getFactoryRestartVote: {
        (factory:string, options?: TransactionOptions): Promise<boolean[]>;
    }
    getFactoryShutdownVote: {
        (factory:string, options?: TransactionOptions): Promise<boolean[]>;
    }
    getPairRestartVote: {
        (pair:string, options?: TransactionOptions): Promise<boolean[]>;
    }
    getPairShutdownVote: {
        (pair:string, options?: TransactionOptions): Promise<boolean[]>;
    }
    getVetoVotingVote: {
        (votingContract:string, options?: TransactionOptions): Promise<boolean[]>;
    }
    governance: {
        (options?: TransactionOptions): Promise<string>;
    }
    maxAdmin: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    pairRestart: {
        (params: IPairRestartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPairRestartParams, options?: TransactionOptions) => Promise<void>;
    }
    pairRestartVote: {
        (params: IPairRestartVoteParams, options?: TransactionOptions): Promise<boolean>;
    }
    pairShutdown: {
        (params: IPairShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPairShutdownParams, options?: TransactionOptions) => Promise<void>;
    }
    pairShutdownVote: {
        (params: IPairShutdownVoteParams, options?: TransactionOptions): Promise<boolean>;
    }
    removeAdmin: {
        (admin:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (admin:string, options?: TransactionOptions) => Promise<void>;
    }
    setMaxAdmin: {
        (maxAdmin:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (maxAdmin:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    vetoVoting: {
        (params: IVetoVotingParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVetoVotingParams, options?: TransactionOptions) => Promise<void>;
    }
    vetoVotingVote: {
        (params: IVetoVotingVoteParams, options?: TransactionOptions): Promise<boolean>;
    }
    private assign(){
        let admins_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('admins',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.admins = admins_call
        let adminsIdx_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('adminsIdx',[param1],options);
            return new BigNumber(result);
        }
        this.adminsIdx = adminsIdx_call
        let allAdmins_call = async (options?: TransactionOptions): Promise<string[]> => {
            let result = await this.call('allAdmins',[],options);
            return result;
        }
        this.allAdmins = allAdmins_call
        let factoryRestartVoteParams = (params: IFactoryRestartVoteParams) => [params.param1,params.param2];
        let factoryRestartVote_call = async (params: IFactoryRestartVoteParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('factoryRestartVote',factoryRestartVoteParams(params),options);
            return result;
        }
        this.factoryRestartVote = factoryRestartVote_call
        let factoryShutdownVoteParams = (params: IFactoryShutdownVoteParams) => [params.param1,params.param2];
        let factoryShutdownVote_call = async (params: IFactoryShutdownVoteParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('factoryShutdownVote',factoryShutdownVoteParams(params),options);
            return result;
        }
        this.factoryShutdownVote = factoryShutdownVote_call
        let getFactoryRestartVote_call = async (factory:string, options?: TransactionOptions): Promise<boolean[]> => {
            let result = await this.call('getFactoryRestartVote',[factory],options);
            return result;
        }
        this.getFactoryRestartVote = getFactoryRestartVote_call
        let getFactoryShutdownVote_call = async (factory:string, options?: TransactionOptions): Promise<boolean[]> => {
            let result = await this.call('getFactoryShutdownVote',[factory],options);
            return result;
        }
        this.getFactoryShutdownVote = getFactoryShutdownVote_call
        let getPairRestartVote_call = async (pair:string, options?: TransactionOptions): Promise<boolean[]> => {
            let result = await this.call('getPairRestartVote',[pair],options);
            return result;
        }
        this.getPairRestartVote = getPairRestartVote_call
        let getPairShutdownVote_call = async (pair:string, options?: TransactionOptions): Promise<boolean[]> => {
            let result = await this.call('getPairShutdownVote',[pair],options);
            return result;
        }
        this.getPairShutdownVote = getPairShutdownVote_call
        let getVetoVotingVote_call = async (votingContract:string, options?: TransactionOptions): Promise<boolean[]> => {
            let result = await this.call('getVetoVotingVote',[votingContract],options);
            return result;
        }
        this.getVetoVotingVote = getVetoVotingVote_call
        let governance_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('governance',[],options);
            return result;
        }
        this.governance = governance_call
        let maxAdmin_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('maxAdmin',[],options);
            return new BigNumber(result);
        }
        this.maxAdmin = maxAdmin_call
        let pairRestartVoteParams = (params: IPairRestartVoteParams) => [params.param1,params.param2];
        let pairRestartVote_call = async (params: IPairRestartVoteParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('pairRestartVote',pairRestartVoteParams(params),options);
            return result;
        }
        this.pairRestartVote = pairRestartVote_call
        let pairShutdownVoteParams = (params: IPairShutdownVoteParams) => [params.param1,params.param2];
        let pairShutdownVote_call = async (params: IPairShutdownVoteParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('pairShutdownVote',pairShutdownVoteParams(params),options);
            return result;
        }
        this.pairShutdownVote = pairShutdownVote_call
        let vetoVotingVoteParams = (params: IVetoVotingVoteParams) => [params.param1,params.param2];
        let vetoVotingVote_call = async (params: IVetoVotingVoteParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('vetoVotingVote',vetoVotingVoteParams(params),options);
            return result;
        }
        this.vetoVotingVote = vetoVotingVote_call
        let addAdmin_send = async (admin:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addAdmin',[admin],options);
            return result;
        }
        let addAdmin_call = async (admin:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addAdmin',[admin],options);
            return;
        }
        this.addAdmin = Object.assign(addAdmin_send, {
            call:addAdmin_call
        });
        let executeFactoryRestart_send = async (factory:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('executeFactoryRestart',[factory],options);
            return result;
        }
        let executeFactoryRestart_call = async (factory:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('executeFactoryRestart',[factory],options);
            return;
        }
        this.executeFactoryRestart = Object.assign(executeFactoryRestart_send, {
            call:executeFactoryRestart_call
        });
        let executeFactoryShutdown_send = async (factory:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('executeFactoryShutdown',[factory],options);
            return result;
        }
        let executeFactoryShutdown_call = async (factory:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('executeFactoryShutdown',[factory],options);
            return;
        }
        this.executeFactoryShutdown = Object.assign(executeFactoryShutdown_send, {
            call:executeFactoryShutdown_call
        });
        let executePairRestartParams = (params: IExecutePairRestartParams) => [params.factory,params.pair];
        let executePairRestart_send = async (params: IExecutePairRestartParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('executePairRestart',executePairRestartParams(params),options);
            return result;
        }
        let executePairRestart_call = async (params: IExecutePairRestartParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('executePairRestart',executePairRestartParams(params),options);
            return;
        }
        this.executePairRestart = Object.assign(executePairRestart_send, {
            call:executePairRestart_call
        });
        let executePairShutdownParams = (params: IExecutePairShutdownParams) => [params.factory,params.pair];
        let executePairShutdown_send = async (params: IExecutePairShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('executePairShutdown',executePairShutdownParams(params),options);
            return result;
        }
        let executePairShutdown_call = async (params: IExecutePairShutdownParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('executePairShutdown',executePairShutdownParams(params),options);
            return;
        }
        this.executePairShutdown = Object.assign(executePairShutdown_send, {
            call:executePairShutdown_call
        });
        let executeVetoVoting_send = async (votingContract:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('executeVetoVoting',[votingContract],options);
            return result;
        }
        let executeVetoVoting_call = async (votingContract:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('executeVetoVoting',[votingContract],options);
            return;
        }
        this.executeVetoVoting = Object.assign(executeVetoVoting_send, {
            call:executeVetoVoting_call
        });
        let factoryRestartParams = (params: IFactoryRestartParams) => [params.factory,params.YorN];
        let factoryRestart_send = async (params: IFactoryRestartParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('factoryRestart',factoryRestartParams(params),options);
            return result;
        }
        let factoryRestart_call = async (params: IFactoryRestartParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('factoryRestart',factoryRestartParams(params),options);
            return;
        }
        this.factoryRestart = Object.assign(factoryRestart_send, {
            call:factoryRestart_call
        });
        let factoryShutdownParams = (params: IFactoryShutdownParams) => [params.factory,params.YorN];
        let factoryShutdown_send = async (params: IFactoryShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('factoryShutdown',factoryShutdownParams(params),options);
            return result;
        }
        let factoryShutdown_call = async (params: IFactoryShutdownParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('factoryShutdown',factoryShutdownParams(params),options);
            return;
        }
        this.factoryShutdown = Object.assign(factoryShutdown_send, {
            call:factoryShutdown_call
        });
        let pairRestartParams = (params: IPairRestartParams) => [params.pair,params.YorN];
        let pairRestart_send = async (params: IPairRestartParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('pairRestart',pairRestartParams(params),options);
            return result;
        }
        let pairRestart_call = async (params: IPairRestartParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('pairRestart',pairRestartParams(params),options);
            return;
        }
        this.pairRestart = Object.assign(pairRestart_send, {
            call:pairRestart_call
        });
        let pairShutdownParams = (params: IPairShutdownParams) => [params.pair,params.YorN];
        let pairShutdown_send = async (params: IPairShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('pairShutdown',pairShutdownParams(params),options);
            return result;
        }
        let pairShutdown_call = async (params: IPairShutdownParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('pairShutdown',pairShutdownParams(params),options);
            return;
        }
        this.pairShutdown = Object.assign(pairShutdown_send, {
            call:pairShutdown_call
        });
        let removeAdmin_send = async (admin:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeAdmin',[admin],options);
            return result;
        }
        let removeAdmin_call = async (admin:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('removeAdmin',[admin],options);
            return;
        }
        this.removeAdmin = Object.assign(removeAdmin_send, {
            call:removeAdmin_call
        });
        let setMaxAdmin_send = async (maxAdmin:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setMaxAdmin',[this.wallet.utils.toString(maxAdmin)],options);
            return result;
        }
        let setMaxAdmin_call = async (maxAdmin:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setMaxAdmin',[this.wallet.utils.toString(maxAdmin)],options);
            return;
        }
        this.setMaxAdmin = Object.assign(setMaxAdmin_send, {
            call:setMaxAdmin_call
        });
        let vetoVotingParams = (params: IVetoVotingParams) => [params.votingContract,params.YorN];
        let vetoVoting_send = async (params: IVetoVotingParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('vetoVoting',vetoVotingParams(params),options);
            return result;
        }
        let vetoVoting_call = async (params: IVetoVotingParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('vetoVoting',vetoVotingParams(params),options);
            return;
        }
        this.vetoVoting = Object.assign(vetoVoting_send, {
            call:vetoVoting_call
        });
    }
}
export module OAXDEX_Administrator{
    export interface AddAdminEvent {admin:string,_event:Event}
    export interface RemoveAdminEvent {admin:string,_event:Event}
    export interface SetMaxAdminEvent {maxAdmin:BigNumber,_event:Event}
    export interface VotedFactoryRestartEvent {admin:string,factory:string,YorN:boolean,_event:Event}
    export interface VotedFactoryShutdownEvent {admin:string,factory:string,YorN:boolean,_event:Event}
    export interface VotedPairRestartEvent {admin:string,pair:string,YorN:boolean,_event:Event}
    export interface VotedPairShutdownEvent {admin:string,pair:string,YorN:boolean,_event:Event}
    export interface VotedVetoEvent {admin:string,votingContract:string,YorN:boolean,_event:Event}
}