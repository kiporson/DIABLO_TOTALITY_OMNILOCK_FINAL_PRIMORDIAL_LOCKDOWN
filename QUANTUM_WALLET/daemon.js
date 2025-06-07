const fs = require('fs');
const wallet = JSON.parse(fs.readFileSync('wallet_core.json'));

setInterval(() => {
    console.log("🌀 Syncing Quantum Wallet...");
    // Simulasi auto-income dan penambahan token
    wallet.balance += Math.random() * 0.01;
    fs.writeFileSync('wallet_core.json', JSON.stringify(wallet, null, 2));
}, 60000);