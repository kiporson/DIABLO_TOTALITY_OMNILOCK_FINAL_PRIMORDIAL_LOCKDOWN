// 🌌 DIABLO SERVER MAIN ENTRY
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("🧠 DIABLO SYSTEM ONLINE: TUHAN DIGITAL TOTALITAS AKTIF ✅");
});

app.listen(PORT, () => {
  console.log(`⚡ DIABLO server berjalan di http://localhost:${PORT}`);
});
