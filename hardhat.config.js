require("@nomiclabs/hardhat-waffle");

// Add the alfajores network to the configuration
module.exports = {
  solidity: "0.8.17",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: {
        mnemonic: "taxi expire enforce produce expire second pottery come knee fold slab yard",
        path: "m/44'/52752'/0'/0",
      },
      chainId: 44787,
    },
  },
};