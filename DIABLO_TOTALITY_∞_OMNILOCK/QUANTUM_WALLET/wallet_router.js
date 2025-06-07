function transferToMaster(wallet, amount) {
  if (wallet.balance >= amount) {
    wallet.balance -= amount;
    console.log("🔁 Transferred", amount, "to PAPIPUPOR");
  } else {
    console.log("❌ Insufficient balance");
  }
}