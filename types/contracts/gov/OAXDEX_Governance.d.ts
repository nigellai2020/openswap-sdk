import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OAXDEX_Governance extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        oaxToken: string;
        names: string[];
        minExeDelay: number[] | BigNumber[];
        minVoteDuration: number[] | BigNumber[];
        maxVoteDuration: number[] | BigNumber[];
        minOaxTokenToCreateVote: number[] | BigNumber[];
        minQuorum: number[] | BigNumber[];
        minStakePeriod: number | BigNumber;
    }): Promise<string>;
    parseAddVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.AddVotingConfigEvent[];
    parseExecutedEvent(receipt: TransactionReceipt): OAXDEX_Governance.ExecutedEvent[];
    parseNewPollEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewPollEvent[];
    parseNewVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewVoteEvent[];
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OAXDEX_Governance.OwnershipTransferredEvent[];
    parseParamSetEvent(receipt: TransactionReceipt): OAXDEX_Governance.ParamSetEvent[];
    parseParamSet2Event(receipt: TransactionReceipt): OAXDEX_Governance.ParamSet2Event[];
    parsePollEvent(receipt: TransactionReceipt): OAXDEX_Governance.PollEvent[];
    parseSetVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.SetVotingConfigEvent[];
    parseStakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.StakeEvent[];
    parseUnstakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.UnstakeEvent[];
    parseVetoEvent(receipt: TransactionReceipt): OAXDEX_Governance.VetoEvent[];
    parseVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.VoteEvent[];
    addVotingConfig(params: {
        name: string;
        minExeDelay: number | BigNumber;
        minVoteDuration: number | BigNumber;
        maxVoteDuration: number | BigNumber;
        minOaxTokenToCreateVote: number | BigNumber;
        minQuorum: number | BigNumber;
    }): Promise<TransactionReceipt>;
    admin(): Promise<string>;
    allVotings(): Promise<string[]>;
    closeVote(vote: string): Promise<TransactionReceipt>;
    executed(): Promise<TransactionReceipt>;
    freezedStake(param1: string): Promise<{
        amount: BigNumber;
        timestamp: BigNumber;
    }>;
    getNewVoteId(): Promise<TransactionReceipt>;
    getVotingConfigProfiles(params: {
        start: number | BigNumber;
        length: number | BigNumber;
    }): Promise<string[]>;
    getVotingCount(): Promise<BigNumber>;
    getVotingParams(name: string): Promise<{
        _minExeDelay: BigNumber;
        _minVoteDuration: BigNumber;
        _maxVoteDuration: BigNumber;
        _minOaxTokenToCreateVote: BigNumber;
        _minQuorum: BigNumber;
    }>;
    getVotings(params: {
        start: number | BigNumber;
        count: number | BigNumber;
    }): Promise<string[]>;
    initAdmin(admin: string): Promise<TransactionReceipt>;
    initVotingExecutor(votingExecutor: string[]): Promise<TransactionReceipt>;
    isVotingContract(votingContract: string): Promise<boolean>;
    isVotingExecutor(param1: string): Promise<boolean>;
    minStakePeriod(): Promise<BigNumber>;
    newVote(params: {
        vote: string;
        isExecutiveVote: boolean;
    }): Promise<TransactionReceipt>;
    oaxToken(): Promise<string>;
    owner(): Promise<string>;
    renounceOwnership(): Promise<TransactionReceipt>;
    setAdmin(admin: string): Promise<TransactionReceipt>;
    setMinStakePeriod(minStakePeriod: number | BigNumber): Promise<TransactionReceipt>;
    setVotingConfig(params: {
        configName: string;
        paramName: string;
        paramValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setVotingExecutor(params: {
        votingExecutor: string;
        bool: boolean;
    }): Promise<TransactionReceipt>;
    setVotingRegister(votingRegister: string): Promise<TransactionReceipt>;
    stake(value: number | BigNumber): Promise<TransactionReceipt>;
    stakeOf(param1: string): Promise<BigNumber>;
    totalStake(): Promise<BigNumber>;
    transferOwnership(newOwner: string): Promise<TransactionReceipt>;
    unlockStake(): Promise<TransactionReceipt>;
    unstake(value: number | BigNumber): Promise<TransactionReceipt>;
    veto(voting: string): Promise<TransactionReceipt>;
    voteCount(): Promise<BigNumber>;
    voted(params: {
        poll: boolean;
        account: string;
        option: number | BigNumber;
    }): Promise<TransactionReceipt>;
    votingConfigProfiles(param1: number | BigNumber): Promise<string>;
    votingConfigProfilesLength(): Promise<BigNumber>;
    votingConfigs(param1: string): Promise<{
        minExeDelay: BigNumber;
        minVoteDuration: BigNumber;
        maxVoteDuration: BigNumber;
        minOaxTokenToCreateVote: BigNumber;
        minQuorum: BigNumber;
    }>;
    votingExecutor(param1: number | BigNumber): Promise<string>;
    votingExecutorInv(param1: string): Promise<BigNumber>;
    votingExecutorLength(): Promise<BigNumber>;
    votingIdx(param1: string): Promise<BigNumber>;
    votingRegister(): Promise<string>;
    votings(param1: number | BigNumber): Promise<string>;
}
export declare module OAXDEX_Governance {
    interface AddVotingConfigEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        name: string;
        minExeDelay: BigNumber;
        minVoteDuration: BigNumber;
        maxVoteDuration: BigNumber;
        minOaxTokenToCreateVote: BigNumber;
        minQuorum: BigNumber;
    }
    interface ExecutedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        vote: string;
    }
    interface NewPollEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        poll: string;
    }
    interface NewVoteEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        vote: string;
    }
    interface OwnershipTransferredEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        previousOwner: string;
        newOwner: string;
    }
    interface ParamSetEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        name: string;
        value: string;
    }
    interface ParamSet2Event {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        name: string;
        value1: string;
        value2: string;
    }
    interface PollEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        account: string;
        poll: string;
        option: BigNumber;
    }
    interface SetVotingConfigEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        configName: string;
        paramName: string;
        minExeDelay: BigNumber;
    }
    interface StakeEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        who: string;
        value: BigNumber;
    }
    interface UnstakeEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        who: string;
        value: BigNumber;
    }
    interface VetoEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        vote: string;
    }
    interface VoteEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        account: string;
        vote: string;
        option: BigNumber;
    }
}
