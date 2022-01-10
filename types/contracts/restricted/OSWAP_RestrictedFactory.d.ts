import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_RestrictedFactory extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        governance: string;
        whitelistFactory: string;
        pairCreator: string;
        configStore: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }): Promise<string>;
    parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OracleAddedEvent[];
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OwnershipTransferredEvent[];
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairCreatedEvent[];
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairRestartedEvent[];
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairShutdownedEvent[];
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSetEvent[];
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSet2Event[];
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.RestartedEvent[];
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ShutdownedEvent[];
    addOldOracleToNewPair(params: {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }): Promise<TransactionReceipt>;
    allPairs(param1: number | BigNumber): Promise<string>;
    allPairsLength(): Promise<BigNumber>;
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
    configStore(): Promise<string>;
    createPair(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<TransactionReceipt>;
    getCreateAddresses(): Promise<{
        _governance: string;
        _whitelistFactory: string;
        _restrictedLiquidityProvider: string;
        _configStore: string;
    }>;
    getPair(params: {
        param1: string;
        param2: string;
        param3: number | BigNumber;
    }): Promise<string>;
    governance(): Promise<string>;
    init(restrictedLiquidityProvider: string): Promise<TransactionReceipt>;
    isLive(): Promise<boolean>;
    isOracle(param1: string): Promise<boolean>;
    isPair(pair: string): Promise<boolean>;
    oracles(params: {
        param1: string;
        param2: string;
    }): Promise<string>;
    owner(): Promise<string>;
    pairCreator(): Promise<string>;
    pairIdx(param1: string): Promise<BigNumber>;
    pairLength(params: {
        tokenA: string;
        tokenB: string;
    }): Promise<BigNumber>;
    protocolFee(): Promise<BigNumber>;
    protocolFeeTo(): Promise<string>;
    renounceOwnership(): Promise<TransactionReceipt>;
    restrictedLiquidityProvider(): Promise<string>;
    setLive(isLive: boolean): Promise<TransactionReceipt>;
    setLiveForPair(params: {
        pair: string;
        live: boolean;
    }): Promise<TransactionReceipt>;
    setOracle(params: {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }): Promise<TransactionReceipt>;
    setProtocolFee(protocolFee: number | BigNumber): Promise<TransactionReceipt>;
    setProtocolFeeTo(protocolFeeTo: string): Promise<TransactionReceipt>;
    setTradeFee(tradeFee: number | BigNumber): Promise<TransactionReceipt>;
    tradeFee(): Promise<BigNumber>;
    transferOwnership(newOwner: string): Promise<TransactionReceipt>;
    whitelistFactory(): Promise<string>;
}
export declare module OSWAP_RestrictedFactory {
    interface OracleAddedEvent {
        _eventName: string;
        _address: string;
        _transactionHash: string;
        token0: string;
        token1: string;
        oracle: string;
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
        newPairSize: BigNumber;
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
}
