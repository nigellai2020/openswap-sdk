import { Wallet, BigNumber } from "@ijstech/eth-wallet";
import { OSWAP_Factory, OSWAP_PairCreator, OSWAP_Router, OSWAP_VotingExecutor1, OAXDEX_Governance, OAXDEX_VotingExecutor, OAXDEX_Administrator, OAXDEX_VotingRegistry, OSWAP_OraclePairCreator, OSWAP_VotingExecutor2, OSWAP_OracleFactory, OSWAP_OracleLiquidityProvider, OSWAP_OracleRouter, OSWAP_HybridRouterRegistry, OSWAP_HybridRouter2 } from './contracts/index';
import { OpenSwap } from './OpenSwap';
export interface ICoreContractsDeploymentResult {
    administrator?: string;
    factory?: string;
    governance?: string;
    oswap?: string;
    votingToken?: string;
    pairCreator?: string;
    router?: string;
    votingRegistry?: string;
    votingExecutor?: string;
    votingExecutor1?: string;
    weth?: string;
}
export interface IOracleContractsDeploymentResult {
    oracleFactory?: string;
    oracleLiquidityProvider?: string;
    oraclePairCreator?: string;
    oracleRouter?: string;
    votingExecutor2?: string;
}
export interface IRangeContractsDeploymentResult {
    rangeFactory?: string;
    rangeLiquidityProvider?: string;
    rangePairCreator?: string;
    votingExecutor3?: string;
}
export interface IRestrictedContractsDeploymentResult {
    restrictedFactory?: string;
    restrictedLiquidityProvider?: string;
    restrictedPairCreator?: string;
    configStore?: string;
    votingExecutor4?: string;
}
export interface IHybridRouterDeploymentResult {
    hybridRouter?: string;
    hybridRouterRegistry?: string;
}
export interface IDeploymentResult extends ICoreContractsDeploymentResult, IOracleContractsDeploymentResult, IRangeContractsDeploymentResult, IRestrictedContractsDeploymentResult, IHybridRouterDeploymentResult {
}
export interface IGovProfile {
    "minExeDelay": number;
    "minVoteDuration": number;
    "maxVoteDuration": number;
    "minGovTokenToCreateVote": number;
    "minQuorum": number;
}
export interface IGovOptions {
    minStakePeriod: number;
    tradeFee: number;
    protocolFee: number;
    protocolFeeTo: string;
    profiles: {
        name: string[];
        minExeDelay: number[];
        minVoteDuration: number[];
        maxVoteDuration: number[];
        minGovTokenToCreateVote: number[] | BigNumber[];
        minQuorum: number[] | BigNumber[];
    };
}
export declare const DefaultGovOptions: IGovOptions;
export interface IGovTokenOptions {
    initSupply: number | BigNumber;
    initSupplyTo: string;
    minter: string;
    totalSupply: number | BigNumber;
}
export declare const DefaultGovTokenOptions: IGovTokenOptions;
export interface IAmmOptions {
    governance?: string;
    pairCreator?: string;
    protocolFee?: number;
    protocolFeeTo?: string;
    tradeFee?: number;
}
export interface IOracleFactoryOptions {
    feePerDelegator?: number | BigNumber;
    governance?: string;
    pairCreator?: string;
    protocolFee?: number | BigNumber;
    protocolFeeTo?: string;
    tradeFee?: number | BigNumber;
}
export interface IRangeFactoryOptions {
    governance?: string;
    oracleFactory?: string;
    pairCreator?: string;
    tradeFee?: number | BigNumber;
    stakeAmount?: number[] | BigNumber[];
    liquidityProviderShare?: number[] | BigNumber[];
    protocolFeeTo?: string;
}
export interface IRestrictedFactoryOptions {
    governance?: string;
    whitelistFactory?: string;
    pairCreator?: string;
    configStore?: string;
    tradeFee?: number | BigNumber;
    protocolFee?: number | BigNumber;
    protocolFeeTo?: string;
}
export interface IHybridRouterOptions {
    registryAddress?: string;
    weth?: string;
    governance?: string;
    name?: string[];
    factory?: string[];
    fee?: number[] | BigNumber[];
    feeBase?: number[] | BigNumber[];
    typeCode?: number[] | BigNumber[];
}
export interface IDeployOptions {
    govTokenOptions?: IGovTokenOptions;
    govOptions?: IGovOptions;
    amm?: IAmmOptions;
    oracle?: IOracleFactoryOptions;
    range?: IRangeFactoryOptions;
    restricted?: IRestrictedFactoryOptions;
    hybridRouter?: IHybridRouterOptions;
    tokens?: {
        oswap?: string;
        weth?: string;
        votingToken?: string;
    };
}
export interface IDeploymentContracts {
    openSwap: OpenSwap;
    governance: OAXDEX_Governance;
    administrator: OAXDEX_Administrator;
    registry: OAXDEX_VotingRegistry;
    pairCreator: OSWAP_PairCreator;
    factory: OSWAP_Factory;
    oraclePairCreator: OSWAP_OraclePairCreator;
    router: OSWAP_Router;
    oracleFactory: OSWAP_OracleFactory;
    oracleRouter: OSWAP_OracleRouter;
    oracleLiquidityProvider: OSWAP_OracleLiquidityProvider;
    hybridRouterRegistry: OSWAP_HybridRouterRegistry;
    hybridRouter: OSWAP_HybridRouter2;
    executor: OAXDEX_VotingExecutor;
    executor1: OSWAP_VotingExecutor1;
    executor2: OSWAP_VotingExecutor2;
}
export declare function toDeploymentContracts(wallet: Wallet, result: IDeploymentResult): IDeploymentContracts;
export declare function deployCoreContracts(wallet: Wallet, options: IDeployOptions): Promise<ICoreContractsDeploymentResult>;
export declare function deployOracleContracts(wallet: Wallet, options: IOracleFactoryOptions, coreContractsResult: ICoreContractsDeploymentResult): Promise<IOracleContractsDeploymentResult>;
export declare function deployRangeContracts(wallet: Wallet, options: IRangeFactoryOptions, weth: string, hybridRegistry: string): Promise<IRangeContractsDeploymentResult>;
export declare function deployRestrictedContracts(wallet: Wallet, options: IRestrictedFactoryOptions, weth: string): Promise<IRestrictedContractsDeploymentResult>;
export declare function deployRestrictedPairOracle(wallet: Wallet): Promise<string>;
export declare function initHybridRouterRegistry(wallet: Wallet, options: IHybridRouterOptions): Promise<void>;
export declare function deployHybridRouter(wallet: Wallet, options: IHybridRouterOptions): Promise<IHybridRouterDeploymentResult>;
export declare function deploy(wallet: Wallet, options?: IDeployOptions): Promise<IDeploymentResult>;
