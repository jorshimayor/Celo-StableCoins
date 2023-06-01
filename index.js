const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async function(req, res) {
    // Retrieve the balances from your contract (replace with your own logic)
    const cUSDBalance = '10 cUSD';
    const cEURBalance = '5 cEUR';

    // Render the EJS template with the balance data
    res.render('index', { cUSD: cUSDBalance, cEUR: cEURBalance });
});

app.listen(3001, function() {
    console.log('Server started on port 3001');
});