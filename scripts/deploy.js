// Declare an asynchronous function named 'main'.
async function main() {
	// Get the account that will deploy the contracts, called the 'deployer'.
	const [deployer] = await ethers.getSigners();

	// Log the Ethereum address of the deployer account to the console.
	console.log(
   	 "Deploying contracts with the account:",
   	 deployer.address
	);

	// Get the contract factory for the 'StablecoinWallet' contract.
	const StablecoinWallet = await ethers.getContractFactory("StablecoinWallet");

	// Deploy a new instance of the 'StablecoinWallet' contract, initializing it with the
	// addresses of the Celo Dollar and Celo Euro contracts.
	const stablecoinWallet = await StablecoinWallet.deploy(
   	 "0x765de816845861e75a25fca122bb6898b8b1282a",
   	 "0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73"
	);

	// Log the Ethereum address of the newly deployed 'StablecoinWallet' contract to the console.
	console.log("StablecoinWallet contract address:", stablecoinWallet.address);
}

// Call the main function. If the promise it returns is fulfilled, then exit the process with a
// status code of 0, indicating success. If the promise is rejected (i.e., an error occurs), then
// log the error to the console and exit the process with a status code of 1, indicating failure.
main()
	.then(() => process.exit(0))
	.catch((error) => {
    	console.error(error);
    	process.exit(1);
	});