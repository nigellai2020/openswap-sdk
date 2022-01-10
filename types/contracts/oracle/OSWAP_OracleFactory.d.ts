import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleFactory extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        feePerDelegator: number | BigNumber;
        protocolFeeTo: string;
    }): Promise<string>;
    parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleAddedEvent[];
    parseOracleScoresEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleScoresEvent[];
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OwnershipTransferredEvent[];
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairCreatedEvent[];
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairRestartedEvent[];
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairShutdownedEvent[];
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSetEvent[];
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSet2Event[];
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.RestartedEvent[];
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ShutdownedEvent[];
    parseWhitelistedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.WhitelistedEvent[];
    addOldOracleToNewPair(params: {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }): Promise<TransactionReceipt>;
    allPairs(param1: number | BigNumber): Promise<string>;
    allPairsLength(): Promise<BigNumber>;
    allWhiteListed(): Promise<{
        list: string[];
        allowed: boolean[];
    }>;
    checkAndGetOracle(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<string>;
    checkAndGetOracleSwapParams(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<{
        oracle_: string;
        tradeFee_: BigNumber;
        protocolFee_: BigNumber;
    }>;
    createPair(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<TransactionReceipt>;
    feePerDelegator(): Promise<BigNumber>;
    getPair(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    governance(): Promise<string>;
    isLive(): Promise<boolean>;
    isOracle(param1: string): Promise<boolean>;
    isWhitelisted(param1: string): Promise<boolean>;
    minLotSize(param1: string): Promise<BigNumber>;
    minOracleScore(): Promise<BigNumber>;
    oracleLiquidityProvider(): Promise<string>;
    oracleScores(param1: string): Promise<BigNumber>;
    oracles(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    owner(): Promise<string>;
    pairCreator(): Promise<string>;
    protocolFee(): Promise<BigNumber>;
    protocolFeeTo(): Promise<string>;
    renounceOwnership(): Promise<TransactionReceipt>;
    securityScoreOracle(): Promise<string>;
    setFeePerDelegator(feePerDelegator: number | BigNumber): Promise<TransactionReceipt>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setLiveForPair(params: {
        pair: string;
        live: boolean;
    }): Promise<TransactionReceipt>;
    setMinLotSize(params: {
        token: string;
        minLotSize: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setOracle(params: {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }): Promise<TransactionReceipt>;
    setOracleLiquidityProvider(params: {
        oracleRouter: string;
        oracleLiquidityProvider: string;
    }): Promise<TransactionReceipt>;
    setProtocolFee(protocolFee: number | BigNumber): Promise<TransactionReceipt>;
    setProtocolFeeTo(protocolFeeTo: string): Promise<TransactionReceipt>;
    setSecurityScoreOracle(params: {
        securityScoreOracle: string;
        minOracleScore: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setTradeFee(tradeFee: number | BigNumber): Promise<TransactionReceipt>;
    setWhiteList(params: {
        who: string;
        allow: boolean;
    }): Promise<TransactionReceipt>;
    tradeFee(): Promise<BigNumber>;
    transferOwnership(newOwner: string): Promise<TransactionReceipt>;
    updateOracleScore(oracle: string): Promise<TransactionReceipt>;
    whitelisted(param1: number | BigNumber): Promise<string>;
    whitelistedInv(param1: string): Promise<BigNumber>;
    whitelistedLength(): Promise<BigNumber>;
}
export declare module OSWAP_OracleFactory {
    interface OracleAddedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        token0: string;
        token1: string;
        oracle: string;
    }
    interface OracleScoresEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        oracle: string;
        score: BigNumber;
    }
    interface OwnershipTransferredEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        previousOwner: string;
        newOwner: string;
    }
    interface PairCreatedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        token0: string;
        token1: string;
        pair: string;
        newSize: BigNumber;
    }
    interface PairRestartedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        pair: string;
    }
    interface PairShutdownedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        pair: string;
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
    interface RestartedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
    }
    interface ShutdownedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
    }
    interface WhitelistedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        who: string;
        allow: boolean;
    }
}
