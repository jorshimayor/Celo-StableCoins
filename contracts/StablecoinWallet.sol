//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;  // Specifies the compiler version for Solidity

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";  // Imports the IERC20 interface from OpenZeppelin

// This is a contract for a StablecoinWallet that accepts Celo's cUSD and cEUR
contract StablecoinWallet {
    
    // Public address variables for the cUSD and cEUR tokens
    address public cUSDAddress;
    address public cEURAddress;

    // Constructor that sets the addresses of cUSD and cEUR when the contract is deployed
    constructor(address _cUSDAddress, address _cEURAddress) {
   	 cUSDAddress = _cUSDAddress;
   	 cEURAddress = _cEURAddress;
    }

    // Function to deposit either cUSD or cEUR into the wallet
    function deposit(address token, uint amount) external {
   	 
     // Checks if the token is either cUSD or cEUR, else it throws an "Invalid token" error
   	 require(token == cUSDAddress || token == cEURAddress, "Invalid token");
   	 
     // Attempts to transfer the tokens from the sender to this contract. If the transfer fails, it throws a "Transfer failed" error
   	 require(IERC20(token).transferFrom(msg.sender, address(this), amount), "Transfer failed");
    }

    // Function to check the balance of either cUSD or cEUR in the wallet
    function balanceOf(address token) external view returns (uint) {
   	 
     // Returns the balance of the specified token in the wallet
   	 return IERC20(token).balanceOf(address(this));
    }
}

