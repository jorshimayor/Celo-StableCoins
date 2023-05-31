// Import the required libraries and contract ABI
const { ethers } = require("ethers");  // ethers.js is a library for interacting with Ethereum
const ContractKit = require('@celo/contractkit')  // ContractKit is a library for interacting with Celo
const StablecoinWallet = require('./artifacts/contracts/StablecoinWallet.sol/StablecoinWallet.json')  // ABI for the StablecoinWallet smart contract

// Define an asynchronous function to get the balance of a specific token for a given contract
async function getBalance(contractAddress, token) {
    // Instantiate a new instance of ContractKit connected to the Alfajores testnet
    const kit = ContractKit.newKit('https://alfajores-forno.celo-testnet.org')

    // Create an instance of the contract using ethers.js and the provider from ContractKit
    const contract = new ethers.Contract(contractAddress, StablecoinWallet.abi, kit.connection.web3.currentProvider)
    
    // Query the balance of the specified token, either cUSD or cEUR, for the contract
    // This line uses the ternary operator to determine which token balance to retrieve based on the passed-in token parameter
    const balance = await contract.balanceOf(token === 'cUSD' ? contract.cUSDAddress() : contract.cEURAddress())
    
    // Return the balance converted to ether units using ethers.js utility function
    return ethers.utils.formatEther(balance)
}

// Export the getBalance function as a module
module.exports = getBalance