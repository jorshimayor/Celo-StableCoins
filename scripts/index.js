// Import the express module to create a new Express application
const express = require('express')

// Import the 'getBalance' module, which presumably contains a function
// to get the balance of a given Celo account for a specified token (cUSD, cEUR, etc.)
const getBalance = require('./getBalance')

// Create a new Express application
const app = express()

// Set the view engine for the application to EJS (Embedded JavaScript),
// which will be used to render the views
app.set('view engine', 'ejs')

// Define the behavior for GET requests to the root ("/") of the application
app.get('/', async (req, res) => {
  // Use the 'getBalance' function to get the balance of the Celo account for cUSD and cEUR
  const cUSDBalance = await getBalance('0xYourContractAddress', 'cUSD')
  const cEURBalance = await getBalance('0xYourContractAddress', 'cEUR')

  // Render the 'index' view, passing in the balances of cUSD and cEUR
  res.render('index', { cUSD: cUSDBalance, cEUR: cEURBalance })
})

// Start the Express server on port 3000, and log a message to the console once the server has started
app.listen(3000, () => {
  console.log('Server started on port 3000')
})