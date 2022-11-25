import { IWallet, Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    pairCreator: string;
    tradeFee: number | BigNumber;
    protocolFee: number | BigNumber;
    feePerDelegator: number | BigNumber;
    protocolFeeTo: string;
}
export interface IAddOldOracleToNewPairParams {
    tokenA: string;
    tokenB: string;
    oracle: string;
}
export interface ICheckAndGetOracleParams {
    tokenA: string;
    tokenB: string;
}
export interface ICheckAndGetOracleSwapParamsParams {
    tokenA: string;
    tokenB: string;
}
export interface ICreatePairParams {
    tokenA: string;
    tokenB: string;
}
export interface IGetPairParams {
    param1: string;
    param2: string;
}
export interface IOraclesParams {
    param1: string;
    param2: string;
}
export interface ISetLiveForPairParams {
    pair: string;
    live: boolean;
}
export interface ISetMinLotSizeParams {
    token: string;
    minLotSize: number | BigNumber;
}
export interface ISetOracleParams {
    tokenA: string;
    tokenB: string;
    oracle: string;
}
export interface ISetOracleLiquidityProviderParams {
    oracleRouter: string;
    oracleLiquidityProvider: string;
}
export interface ISetSecurityScoreOracleParams {
    securityScoreOracle: string;
    minOracleScore: number | BigNumber;
}
export interface ISetWhiteListParams {
    who: string;
    allow: boolean;
}
export declare class OSWAP_OracleFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleAddedEvent[];
    decodeOracleAddedEvent(event: Event): OSWAP_OracleFactory.OracleAddedEvent;
    parseOracleScoresEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleScoresEvent[];
    decodeOracleScoresEvent(event: Event): OSWAP_OracleFactory.OracleScoresEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OSWAP_OracleFactory.OwnershipTransferredEvent;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): OSWAP_OracleFactory.PairCreatedEvent;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_OracleFactory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_OracleFactory.PairShutdownedEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_OracleFactory.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_OracleFactory.ParamSet2Event;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_OracleFactory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_OracleFactory.ShutdownedEvent;
    parseWhitelistedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.WhitelistedEvent[];
    decodeWhitelistedEvent(event: Event): OSWAP_OracleFactory.WhitelistedEvent;
    addOldOracleToNewPair: {
        (params: IAddOldOracleToNewPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddOldOracleToNewPairParams, options?: TransactionOptions) => Promise<void>;
    };
    allPairs: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    allPairsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    allWhiteListed: {
        (options?: TransactionOptions): Promise<{
            list: string[];
            allowed: boolean[];
        }>;
    };
    checkAndGetOracle: {
        (params: ICheckAndGetOracleParams, options?: TransactionOptions): Promise<string>;
    };
    checkAndGetOracleSwapParams: {
        (params: ICheckAndGetOracleSwapParamsParams, options?: TransactionOptions): Promise<{
            oracle_: string;
            tradeFee_: BigNumber;
            protocolFee_: BigNumber;
        }>;
    };
    createPair: {
        (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
    };
    feePerDelegator: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getPair: {
        (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    isLive: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    isOracle: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    isWhitelisted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    minLotSize: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    minOracleScore: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    oracleLiquidityProvider: {
        (options?: TransactionOptions): Promise<string>;
    };
    oracleScores: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    oracles: {
        (params: IOraclesParams, options?: TransactionOptions): Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    pairCreator: {
        (options?: TransactionOptions): Promise<string>;
    };
    protocolFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    protocolFeeTo: {
        (options?: TransactionOptions): Promise<string>;
    };
    renounceOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    securityScoreOracle: {
        (options?: TransactionOptions): Promise<string>;
    };
    setFeePerDelegator: {
        (feePerDelegator: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (feePerDelegator: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setLive: {
        (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
    };
    setLiveForPair: {
        (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
    };
    setMinLotSize: {
        (params: ISetMinLotSizeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetMinLotSizeParams, options?: TransactionOptions) => Promise<void>;
    };
    setOracle: {
        (params: ISetOracleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetOracleParams, options?: TransactionOptions) => Promise<void>;
    };
    setOracleLiquidityProvider: {
        (params: ISetOracleLiquidityProviderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetOracleLiquidityProviderParams, options?: TransactionOptions) => Promise<void>;
    };
    setProtocolFee: {
        (protocolFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setProtocolFeeTo: {
        (protocolFeeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (protocolFeeTo: string, options?: TransactionOptions) => Promise<void>;
    };
    setSecurityScoreOracle: {
        (params: ISetSecurityScoreOracleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetSecurityScoreOracleParams, options?: TransactionOptions) => Promise<void>;
    };
    setTradeFee: {
        (tradeFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setWhiteList: {
        (params: ISetWhiteListParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetWhiteListParams, options?: TransactionOptions) => Promise<void>;
    };
    tradeFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    updateOracleScore: {
        (oracle: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (oracle: string, options?: TransactionOptions) => Promise<void>;
    };
    whitelisted: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    whitelistedInv: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    whitelistedLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    private assign;
}
export declare module OSWAP_OracleFactory {
    interface OracleAddedEvent {
        token0: string;
        token1: string;
        oracle: string;
        _event: Event;
    }
    interface OracleScoresEvent {
        oracle: string;
        score: BigNumber;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface PairCreatedEvent {
        token0: string;
        token1: string;
        pair: string;
        newSize: BigNumber;
        _event: Event;
    }
    interface PairRestartedEvent {
        pair: string;
        _event: Event;
    }
    interface PairShutdownedEvent {
        pair: string;
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
    interface RestartedEvent {
        _event: Event;
    }
    interface ShutdownedEvent {
        _event: Event;
    }
    interface WhitelistedEvent {
        who: string;
        allow: boolean;
        _event: Event;
    }
}
