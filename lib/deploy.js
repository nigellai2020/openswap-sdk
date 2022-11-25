"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploy = exports.deployHybridRouter = exports.initHybridRouterRegistry = exports.deployRestrictedPairOracle = exports.deployRestrictedContracts = exports.deployRangeContracts = exports.deployOracleContracts = exports.deployCoreContracts = exports.toDeploymentContracts = exports.DefaultGovTokenOptions = exports.DefaultGovOptions = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const index_1 = require("./contracts/index");
const OpenSwap_1 = require("./OpenSwap");
exports.DefaultGovOptions = {
    minStakePeriod: 1,
    tradeFee: 0.2,
    protocolFee: 0,
    protocolFeeTo: '',
    profiles: {
        name: ['poll', 'vote', 'addOldOracleToNewPair'],
        minExeDelay: [1, 1, 1],
        minVoteDuration: [0, 0, 0],
        maxVoteDuration: [1209600, 1209600, 1209600],
        minGovTokenToCreateVote: [eth_wallet_1.Utils.toDecimals(100000), eth_wallet_1.Utils.toDecimals(100000), eth_wallet_1.Utils.toDecimals(100000)],
        minQuorum: [eth_wallet_1.Utils.toDecimals(0), eth_wallet_1.Utils.toDecimals(10000000), eth_wallet_1.Utils.toDecimals(100)]
    }
};
exports.DefaultGovTokenOptions = {
    initSupply: 0,
    initSupplyTo: '',
    minter: '',
    totalSupply: 1000000000
};
function toDeploymentContracts(wallet, result) {
    return {
        openSwap: new OpenSwap_1.OpenSwap(wallet, result.oswap),
        governance: new index_1.OAXDEX_Governance(wallet, result.governance),
        administrator: new index_1.OAXDEX_Administrator(wallet, result.administrator),
        registry: new index_1.OAXDEX_VotingRegistry(wallet, result.votingRegistry),
        pairCreator: new index_1.OSWAP_PairCreator(wallet, result.pairCreator),
        factory: new index_1.OSWAP_Factory(wallet, result.factory),
        oraclePairCreator: new index_1.OSWAP_OraclePairCreator(wallet, result.oraclePairCreator),
        router: new index_1.OSWAP_Router(wallet, result.router),
        oracleFactory: new index_1.OSWAP_OracleFactory(wallet, result.oracleFactory),
        oracleRouter: new index_1.OSWAP_OracleRouter(wallet, result.oracleRouter),
        oracleLiquidityProvider: new index_1.OSWAP_OracleLiquidityProvider(wallet, result.oracleLiquidityProvider),
        hybridRouterRegistry: new index_1.OSWAP_HybridRouterRegistry(wallet, result.hybridRouterRegistry),
        hybridRouter: new index_1.OSWAP_HybridRouter2(wallet, result.hybridRouter),
        executor: new index_1.OAXDEX_VotingExecutor(wallet, result.votingExecutor),
        executor1: new index_1.OSWAP_VotingExecutor1(wallet, result.votingExecutor1),
        executor2: new index_1.OSWAP_VotingExecutor2(wallet, result.votingExecutor2)
    };
}
exports.toDeploymentContracts = toDeploymentContracts;
async function deployCoreContracts(wallet, options) {
    let result = {};
    if (!options.tokens.oswap) {
        let oswap = new OpenSwap_1.OpenSwap(wallet);
        result.oswap = await oswap.deploy(options.govTokenOptions);
    }
    else
        result.oswap = options.tokens.oswap;
    if (!options.tokens.votingToken) {
        result.votingToken = result.oswap;
    }
    else {
        result.votingToken = options.tokens.votingToken;
    }
    if (options.tokens.weth)
        result.weth = options.tokens.weth;
    let governance = new index_1.OAXDEX_Governance(wallet);
    result.governance = await governance.deploy({
        names: options.govOptions.profiles.name,
        maxVoteDuration: options.govOptions.profiles.maxVoteDuration,
        minExeDelay: options.govOptions.profiles.minExeDelay,
        minOaxTokenToCreateVote: options.govOptions.profiles.minGovTokenToCreateVote,
        minQuorum: options.govOptions.profiles.minQuorum,
        minStakePeriod: options.govOptions.minStakePeriod,
        minVoteDuration: options.govOptions.profiles.minVoteDuration,
        oaxToken: result.oswap,
        votingToken: result.votingToken
    });
    let administrator = new index_1.OAXDEX_Administrator(wallet);
    result.administrator = await administrator.deploy(governance.address);
    await governance.initAdmin(result.administrator);
    let votingRegistry = new index_1.OAXDEX_VotingRegistry(wallet);
    result.votingRegistry = await votingRegistry.deploy(result.governance);
    await governance.setVotingRegister(result.votingRegistry);
    let pairCreator = new index_1.OSWAP_PairCreator(wallet);
    result.pairCreator = await pairCreator.deploy();
    let factory = new index_1.OSWAP_Factory(wallet);
    result.factory = await factory.deploy({
        governance: options.amm.governance || result.governance,
        pairCreator: result.pairCreator,
        protocolFee: 0,
        protocolFeeTo: options.amm.protocolFeeTo || eth_wallet_1.Utils.nullAddress,
        tradeFee: 0
    });
    let router = new index_1.OSWAP_Router(wallet);
    result.router = await router.deploy({
        WETH: result.weth,
        factory: result.factory
    });
    let votingExecutor = new index_1.OAXDEX_VotingExecutor(wallet);
    result.votingExecutor = await votingExecutor.deploy({
        admin: result.administrator,
        governance: result.governance
    });
    let votingExecutor1 = new index_1.OSWAP_VotingExecutor1(wallet);
    result.votingExecutor1 = await votingExecutor1.deploy(factory.address);
    return result;
}
exports.deployCoreContracts = deployCoreContracts;
async function deployOracleContracts(wallet, options, coreContractsResult) {
    let result = {};
    let oraclePairCreator = new index_1.OSWAP_OraclePairCreator(wallet);
    result.oraclePairCreator = await oraclePairCreator.deploy();
    let oracleFactory = new index_1.OSWAP_OracleFactory(wallet);
    result.oracleFactory = await oracleFactory.deploy({
        feePerDelegator: options.feePerDelegator || 0,
        governance: options.governance || coreContractsResult.governance,
        pairCreator: options.pairCreator || result.oraclePairCreator,
        protocolFee: options.protocolFee || 0,
        protocolFeeTo: options.protocolFeeTo || eth_wallet_1.Utils.nullAddress,
        tradeFee: options.tradeFee || 0
    });
    let oracleRouter = new index_1.OSWAP_OracleRouter(wallet);
    result.oracleRouter = await oracleRouter.deploy({
        WETH: coreContractsResult.weth,
        ammFactory: coreContractsResult.factory,
        oracleFactory: result.oracleFactory
    });
    let oracleLiquidityProvider = new index_1.OSWAP_OracleLiquidityProvider(wallet);
    result.oracleLiquidityProvider = await oracleLiquidityProvider.deploy({
        WETH: coreContractsResult.weth,
        factory: result.oracleFactory
    });
    await oracleFactory.setOracleLiquidityProvider({
        oracleLiquidityProvider: result.oracleLiquidityProvider,
        oracleRouter: result.oracleRouter
    });
    let votingExecutor2 = new index_1.OSWAP_VotingExecutor2(wallet);
    result.votingExecutor2 = await votingExecutor2.deploy(oracleFactory.address);
    return result;
}
exports.deployOracleContracts = deployOracleContracts;
async function deployRangeContracts(wallet, options, weth, hybridRegistry) {
    let result = {};
    let rangePairCreator = new index_1.OSWAP_RangePairCreator(wallet);
    result.rangePairCreator = await rangePairCreator.deploy();
    let rangeFactory = new index_1.OSWAP_RangeFactory(wallet);
    result.rangeFactory = await rangeFactory.deploy({
        governance: options.governance,
        oracleFactory: options.oracleFactory,
        pairCreator: options.pairCreator || result.rangePairCreator,
        tradeFee: options.tradeFee || 0,
        stakeAmount: options.stakeAmount || [],
        liquidityProviderShare: options.liquidityProviderShare || [],
        protocolFeeTo: options.protocolFeeTo || eth_wallet_1.Utils.nullAddress
    });
    let rangeLiquidityProvider = new index_1.OSWAP_RangeLiquidityProvider(wallet);
    result.rangeLiquidityProvider = await rangeLiquidityProvider.deploy({
        WETH: weth,
        factory: result.rangeFactory
    });
    await rangeFactory.setRangeLiquidityProvider(result.rangeLiquidityProvider);
    let votingExecutor3 = new index_1.OSWAP_VotingExecutor3(wallet);
    result.votingExecutor3 = await votingExecutor3.deploy({
        governance: options.governance,
        factory: rangeFactory.address,
        hybridRegistry: hybridRegistry
    });
    return result;
}
exports.deployRangeContracts = deployRangeContracts;
async function deployRestrictedContracts(wallet, options, weth) {
    let result = {};
    if (!options.configStore) {
        let configStore = new index_1.OSWAP_ConfigStore(wallet);
        result.configStore = await configStore.deploy(options.governance);
        options.configStore = result.configStore;
    }
    let restrictedPairCreator = new index_1.OSWAP_RestrictedPairCreator(wallet);
    result.restrictedPairCreator = await restrictedPairCreator.deploy();
    let restrictedFactory = new index_1.OSWAP_RestrictedFactory(wallet);
    result.restrictedFactory = await restrictedFactory.deploy({
        governance: options.governance,
        whitelistFactory: options.whitelistFactory,
        pairCreator: options.pairCreator || result.restrictedPairCreator,
        tradeFee: options.tradeFee || 0,
        configStore: options.configStore,
        protocolFee: options.protocolFee || 0,
        protocolFeeTo: options.protocolFeeTo || eth_wallet_1.Utils.nullAddress
    });
    let restrictedLiquidityProvider = new index_1.OSWAP_RestrictedLiquidityProvider1(wallet);
    result.restrictedLiquidityProvider = await restrictedLiquidityProvider.deploy({
        WETH: weth,
        factory: result.restrictedFactory
    });
    await restrictedFactory.init(result.restrictedLiquidityProvider);
    let votingExecutor4 = new index_1.OSWAP_VotingExecutor4(wallet);
    result.votingExecutor4 = await votingExecutor4.deploy({
        governance: options.governance,
        factory: restrictedFactory.address,
        configStore: options.configStore
    });
    return result;
}
exports.deployRestrictedContracts = deployRestrictedContracts;
async function deployRestrictedPairOracle(wallet) {
    let restrictedPairOracle = new index_1.OSWAP_RestrictedPairOracle(wallet);
    let result = await restrictedPairOracle.deploy();
    return result;
}
exports.deployRestrictedPairOracle = deployRestrictedPairOracle;
async function initHybridRouterRegistry(wallet, options) {
    let hybridRouterRegistry = new index_1.OSWAP_HybridRouterRegistry(wallet, options.registryAddress);
    let { name, factory, fee, feeBase, typeCode } = options;
    await hybridRouterRegistry.init({
        name,
        factory,
        fee,
        feeBase,
        typeCode
    });
}
exports.initHybridRouterRegistry = initHybridRouterRegistry;
async function deployHybridRouter(wallet, options) {
    let result = {};
    if (!options.registryAddress) {
        let hybridRouterRegistry = new index_1.OSWAP_HybridRouterRegistry(wallet);
        result.hybridRouterRegistry = await hybridRouterRegistry.deploy(options.governance);
    }
    else {
        result.hybridRouterRegistry = options.registryAddress;
    }
    let hybridRouter = new index_1.OSWAP_HybridRouter2(wallet);
    result.hybridRouter = await hybridRouter.deploy({
        WETH: options.weth,
        registry: result.hybridRouterRegistry
    });
    return result;
}
exports.deployHybridRouter = deployHybridRouter;
function deploy(wallet, options) {
    options = options || {};
    if (!options.govOptions)
        options.govOptions = exports.DefaultGovOptions;
    if (!options.govTokenOptions) {
        options.govTokenOptions = exports.DefaultGovTokenOptions;
        options.govTokenOptions.initSupplyTo = wallet.defaultAccount;
        options.govTokenOptions.minter = wallet.defaultAccount;
    }
    if (!options.tokens)
        options.tokens = {};
    if (!options.amm)
        options.amm = {};
    if (!options.oracle)
        options.oracle = {};
    return new Promise(async function (resolve, reject) {
        try {
            let coreContractsResult = await deployCoreContracts(wallet, options);
            let oracleContractsResult = await deployOracleContracts(wallet, options.oracle, coreContractsResult);
            let result = Object.assign(Object.assign({}, coreContractsResult), oracleContractsResult);
            if (options.hybridRouter) {
                options.hybridRouter.governance = coreContractsResult.governance;
                options.hybridRouter.weth = coreContractsResult.weth;
                let hybridRouterResult = await deployHybridRouter(wallet, options.hybridRouter);
                result = Object.assign(Object.assign({}, result), hybridRouterResult);
                if (options.range) {
                    options.range.governance = coreContractsResult.governance;
                    options.range.oracleFactory = oracleContractsResult.oracleFactory;
                    let rangeContractsResult = await deployRangeContracts(wallet, options.range, coreContractsResult.weth, hybridRouterResult.hybridRouterRegistry);
                    result = Object.assign(Object.assign({}, result), rangeContractsResult);
                }
                if (options.restricted) {
                    options.restricted.governance = coreContractsResult.governance;
                    options.restricted.whitelistFactory = oracleContractsResult.oracleFactory;
                    let restrictedContractsResult = await deployRestrictedContracts(wallet, options.restricted, coreContractsResult.weth);
                    result = Object.assign(Object.assign({}, result), restrictedContractsResult);
                }
            }
            let governance = new index_1.OAXDEX_Governance(wallet, coreContractsResult.governance);
            await governance.initVotingExecutor([
                result.votingExecutor,
                result.votingExecutor1,
                result.votingExecutor2,
                result.votingExecutor3,
                result.votingExecutor4,
                result.hybridRouterRegistry
            ].filter(Boolean));
            console.dir(result);
            resolve(result);
        }
        catch (err) {
            reject(err);
        }
    });
}
exports.deploy = deploy;
