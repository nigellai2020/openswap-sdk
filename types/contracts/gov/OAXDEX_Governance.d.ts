import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    oaxToken: string;
    votingToken: string;
    names: string[];
    minExeDelay: (number | BigNumber)[];
    minVoteDuration: (number | BigNumber)[];
    maxVoteDuration: (number | BigNumber)[];
    minOaxTokenToCreateVote: (number | BigNumber)[];
    minQuorum: (number | BigNumber)[];
    minStakePeriod: number | BigNumber;
}
export interface IAddVotingConfigParams {
    name: string;
    minExeDelay: number | BigNumber;
    minVoteDuration: number | BigNumber;
    maxVoteDuration: number | BigNumber;
    minOaxTokenToCreateVote: number | BigNumber;
    minQuorum: number | BigNumber;
}
export interface IGetVotingConfigProfilesParams {
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetVotingsParams {
    start: number | BigNumber;
    count: number | BigNumber;
}
export interface INewVoteParams {
    vote: string;
    isExecutiveVote: boolean;
}
export interface ISetVotingConfigParams {
    configName: string;
    paramName: string;
    paramValue: number | BigNumber;
}
export interface ISetVotingExecutorParams {
    votingExecutor: string;
    bool: boolean;
}
export interface IVotedParams {
    poll: boolean;
    account: string;
    option: number | BigNumber;
}
export declare class OAXDEX_Governance extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAddVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.AddVotingConfigEvent[];
    decodeAddVotingConfigEvent(event: Event): OAXDEX_Governance.AddVotingConfigEvent;
    parseExecutedEvent(receipt: TransactionReceipt): OAXDEX_Governance.ExecutedEvent[];
    decodeExecutedEvent(event: Event): OAXDEX_Governance.ExecutedEvent;
    parseNewPollEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewPollEvent[];
    decodeNewPollEvent(event: Event): OAXDEX_Governance.NewPollEvent;
    parseNewVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewVoteEvent[];
    decodeNewVoteEvent(event: Event): OAXDEX_Governance.NewVoteEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OAXDEX_Governance.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OAXDEX_Governance.OwnershipTransferredEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OAXDEX_Governance.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OAXDEX_Governance.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OAXDEX_Governance.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OAXDEX_Governance.ParamSet2Event;
    parsePollEvent(receipt: TransactionReceipt): OAXDEX_Governance.PollEvent[];
    decodePollEvent(event: Event): OAXDEX_Governance.PollEvent;
    parseSetVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.SetVotingConfigEvent[];
    decodeSetVotingConfigEvent(event: Event): OAXDEX_Governance.SetVotingConfigEvent;
    parseStakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.StakeEvent[];
    decodeStakeEvent(event: Event): OAXDEX_Governance.StakeEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): OAXDEX_Governance.UnstakeEvent;
    parseVetoEvent(receipt: TransactionReceipt): OAXDEX_Governance.VetoEvent[];
    decodeVetoEvent(event: Event): OAXDEX_Governance.VetoEvent;
    parseVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.VoteEvent[];
    decodeVoteEvent(event: Event): OAXDEX_Governance.VoteEvent;
    addVotingConfig: {
        (params: IAddVotingConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddVotingConfigParams, options?: TransactionOptions) => Promise<void>;
    };
    admin: {
        (options?: TransactionOptions): Promise<string>;
    };
    allVotings: {
        (options?: TransactionOptions): Promise<string[]>;
    };
    closeVote: {
        (vote: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (vote: string, options?: TransactionOptions) => Promise<void>;
    };
    executed: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    freezedStake: {
        (param1: string, options?: TransactionOptions): Promise<{
            amount: BigNumber;
            timestamp: BigNumber;
        }>;
    };
    getNewVoteId: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<BigNumber>;
    };
    getVotingConfigProfiles: {
        (params: IGetVotingConfigProfilesParams, options?: TransactionOptions): Promise<string[]>;
    };
    getVotingCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getVotingParams: {
        (name: string, options?: TransactionOptions): Promise<{
            _minExeDelay: BigNumber;
            _minVoteDuration: BigNumber;
            _maxVoteDuration: BigNumber;
            _minOaxTokenToCreateVote: BigNumber;
            _minQuorum: BigNumber;
        }>;
    };
    getVotings: {
        (params: IGetVotingsParams, options?: TransactionOptions): Promise<string[]>;
    };
    initAdmin: {
        (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (admin: string, options?: TransactionOptions) => Promise<void>;
    };
    initVotingExecutor: {
        (votingExecutor: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingExecutor: string[], options?: TransactionOptions) => Promise<void>;
    };
    isVotingContract: {
        (votingContract: string, options?: TransactionOptions): Promise<boolean>;
    };
    isVotingExecutor: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    minStakePeriod: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    newVote: {
        (params: INewVoteParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewVoteParams, options?: TransactionOptions) => Promise<void>;
    };
    oaxToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    renounceOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    setAdmin: {
        (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (admin: string, options?: TransactionOptions) => Promise<void>;
    };
    setMinStakePeriod: {
        (minStakePeriod: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (minStakePeriod: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setVotingConfig: {
        (params: ISetVotingConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetVotingConfigParams, options?: TransactionOptions) => Promise<void>;
    };
    setVotingExecutor: {
        (params: ISetVotingExecutorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetVotingExecutorParams, options?: TransactionOptions) => Promise<void>;
    };
    setVotingRegister: {
        (votingRegister: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingRegister: string, options?: TransactionOptions) => Promise<void>;
    };
    stake: {
        (value: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (value: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    stakeOf: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    totalStake: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    unlockStake: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    unstake: {
        (value: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (value: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    veto: {
        (voting: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (voting: string, options?: TransactionOptions) => Promise<void>;
    };
    voteCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    voted: {
        (params: IVotedParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVotedParams, options?: TransactionOptions) => Promise<void>;
    };
    votingConfigProfiles: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    votingConfigProfilesLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    votingConfigs: {
        (param1: string, options?: TransactionOptions): Promise<{
            minExeDelay: BigNumber;
            minVoteDuration: BigNumber;
            maxVoteDuration: BigNumber;
            minOaxTokenToCreateVote: BigNumber;
            minQuorum: BigNumber;
        }>;
    };
    votingExecutor: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    votingExecutorInv: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    votingExecutorLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    votingIdx: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    votingRegister: {
        (options?: TransactionOptions): Promise<string>;
    };
    votingToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    votings: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OAXDEX_Governance {
    interface AddVotingConfigEvent {
        name: string;
        minExeDelay: BigNumber;
        minVoteDuration: BigNumber;
        maxVoteDuration: BigNumber;
        minOaxTokenToCreateVote: BigNumber;
        minQuorum: BigNumber;
        _event: Event;
    }
    interface ExecutedEvent {
        vote: string;
        _event: Event;
    }
    interface NewPollEvent {
        poll: string;
        _event: Event;
    }
    interface NewVoteEvent {
        vote: string;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
    interface ParamSet2Event {
        name: string;
        value1: string;
        value2: string;
        _event: Event;
    }
    interface PollEvent {
        account: string;
        poll: string;
        option: BigNumber;
        _event: Event;
    }
    interface SetVotingConfigEvent {
        configName: string;
        paramName: string;
        minExeDelay: BigNumber;
        _event: Event;
    }
    interface StakeEvent {
        who: string;
        value: BigNumber;
        _event: Event;
    }
    interface UnstakeEvent {
        who: string;
        value: BigNumber;
        _event: Event;
    }
    interface VetoEvent {
        vote: string;
        _event: Event;
    }
    interface VoteEvent {
        account: string;
        vote: string;
        option: BigNumber;
        _event: Event;
    }
}
