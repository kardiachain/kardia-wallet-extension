const {
  chainTypes,
  KARDIA,
  KARDIA_TESTNET,
  DROPDOWN_KARDIA_DISPLAY_NAME,
  DROPDOWN_KARDIA_TESTNET_DISPLAY_NAME,
  KARDIA_DISPLAY_NAME,
  KARDIA_TESTNET_DISPLAY_NAME,
  KARDIA_CODE,
  KARDIA_TESTNET_CODE
} = require('./enums')

const { TEST, PROD } = chainTypes
const networks = {}

// const POA_OBJ = {
//   order: 1,
//   chainType: PROD,
//   providerName: POA,
//   networkID: POA_CODE,
//   displayName: POA_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_POA_DISPLAY_NAME,
// }
// networks[POA_CODE] = POA_OBJ
// networks[POA] = POA_OBJ

// const DAI_OBJ = {
//   order: 2,
//   chainType: PROD,
//   providerName: DAI,
//   networkID: DAI_CODE,
//   displayName: DAI_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_DAI_DISPLAY_NAME,
// }
// networks[DAI_CODE] = DAI_OBJ
// networks[DAI] = DAI_OBJ

// const MAINNET_OBJ = {
//   order: 3,
//   chainType: PROD,
//   providerName: MAINNET,
//   networkID: MAINNET_CODE,
//   displayName: MAINNET_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_MAINNET_DISPLAY_NAME,
// }
// networks[MAINNET_CODE] = MAINNET_OBJ
// networks[MAINNET] = MAINNET_OBJ

// const CLASSIC_OBJ = {
//   order: 4,
//   chainType: PROD,
//   providerName: CLASSIC,
//   networkID: CLASSIC_CODE,
//   displayName: CLASSIC_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_CLASSIC_DISPLAY_NAME,
// }
// networks[CLASSIC_CODE] = CLASSIC_OBJ
// networks[CLASSIC] = CLASSIC_OBJ

// const RSK_OBJ = {
//   order: 5,
//   providerName: RSK,
//   networkID: RSK_CODE,
//   displayName: RSK_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_RSK_DISPLAY_NAME,
// }
// networks[RSK_CODE] = RSK_OBJ
// networks[RSK] = RSK_OBJ

// const GOERLI_TESTNET_OBJ = {
//   order: 6,
//   providerName: GOERLI_TESTNET,
//   networkID: GOERLI_TESTNET_CODE,
//   displayName: GOERLI_TESTNET_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_GOERLI_TESTNET_DISPLAY_NAME,
// }
// networks[GOERLI_TESTNET_CODE] = GOERLI_TESTNET_OBJ
// networks[GOERLI_TESTNET] = GOERLI_TESTNET_OBJ

// const KOVAN_OBJ = {
//   order: 7,
//   chainType: TEST,
//   providerName: KOVAN,
//   networkID: KOVAN_CODE,
//   displayName: KOVAN_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_KOVAN_DISPLAY_NAME,
// }
// networks[KOVAN_CODE] = KOVAN_OBJ
// networks[KOVAN] = KOVAN_OBJ

// const POA_SOKOL_OBJ = {
//   order: 8,
//   chainType: TEST,
//   providerName: POA_SOKOL,
//   networkID: POA_SOKOL_CODE,
//   displayName: POA_SOKOL_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_POA_SOKOL_DISPLAY_NAME,
// }
// networks[POA_SOKOL_CODE] = POA_SOKOL_OBJ
// networks[POA_SOKOL] = POA_SOKOL_OBJ

// const RINKEBY_OBJ = {
//   order: 9,
//   chainType: TEST,
//   providerName: RINKEBY,
//   networkID: RINKEBY_CODE,
//   displayName: RINKEBY_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_RINKEBY_DISPLAY_NAME,
// }
// networks[RINKEBY_CODE] = RINKEBY_OBJ
// networks[RINKEBY] = RINKEBY_OBJ

// const ROPSTEN_OBJ = {
//   order: 10,
//   chainType: TEST,
//   providerName: ROPSTEN,
//   networkID: ROPSTEN_CODE,
//   displayName: ROPSTEN_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_ROPSTEN_DISPLAY_NAME,
// }
// networks[ROPSTEN_CODE] = ROPSTEN_OBJ
// networks[ROPSTEN] = ROPSTEN_OBJ

// const RSK_TESTNET_OBJ = {
//   order: 11,
//   providerName: RSK_TESTNET,
//   networkID: RSK_TESTNET_CODE,
//   displayName: RSK_TESTNET_DISPLAY_NAME,
//   displayNameDropdown: DROPDOWN_RSK_TESTNET_DISPLAY_NAME,
// }
// networks[RSK_TESTNET_CODE] = RSK_TESTNET_OBJ
// networks[RSK_TESTNET] = RSK_TESTNET_OBJ

const KARDIA_MAINNET_OBJ = {
  order: 1,
  providerName: KARDIA,
  networkID: KARDIA_CODE,
  displayName: KARDIA_DISPLAY_NAME,
  displayNameDropdown: DROPDOWN_KARDIA_DISPLAY_NAME,
}
networks[KARDIA_CODE] = KARDIA_MAINNET_OBJ
networks[KARDIA] = KARDIA_MAINNET_OBJ

const KARDIA_TESTNET_OBJ = {
  order: 2,
  providerName: KARDIA_TESTNET,
  networkID: KARDIA_TESTNET_CODE,
  displayName: KARDIA_TESTNET_DISPLAY_NAME,
  displayNameDropdown: DROPDOWN_KARDIA_TESTNET_DISPLAY_NAME,
}
networks[KARDIA_TESTNET_CODE] = KARDIA_TESTNET_OBJ
networks[KARDIA_TESTNET] = KARDIA_TESTNET_OBJ

const getNetworkDisplayName = key => networks[key].displayName

function formatTxMetaForRpcResult (txMeta) {
  return {
    blockHash: txMeta.txReceipt ? txMeta.txReceipt.blockHash : null,
    blockNumber: txMeta.txReceipt ? txMeta.txReceipt.blockNumber : null,
    from: txMeta.txParams.from,
    gas: txMeta.txParams.gas,
    gasPrice: txMeta.txParams.gasPrice,
    hash: txMeta.hash,
    input: txMeta.txParams.data || '0x',
    nonce: txMeta.txParams.nonce,
    to: txMeta.txParams.to,
    transactionIndex: txMeta.txReceipt
      ? txMeta.txReceipt.transactionIndex
      : null,
    value: txMeta.txParams.value || '0x0',
    v: txMeta.v,
    r: txMeta.r,
    s: txMeta.s,
  }
}

module.exports = {
  networks,
  getNetworkDisplayName,
  formatTxMetaForRpcResult,
}
