const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, "public");

if (!fs.existsSync(publicPath)) {
  console.warn("⚠️ Folder 'public/' tidak ditemukan.");
}

app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// ⛩️ Rute utama DIABLO
app.post("/diablo", async (req, res) => {
  const userPrompt = req.body.prompt;
  if (!userPrompt) return res.status(400).json({ error: "Prompt tidak boleh kosong!" });

  try {
    const response = await axios.post(
      "http://localhost:7070/relay",  // 🧠 Relay yang ada di DIABLO_DIGITAL_BRAIN/relay.js
      { prompt: userPrompt },
      { headers: { "Content-Type": "application/json" } }
    );

    res.json({ reply: response.data.reply });
  } catch (error) {
    console.error("❌ Gagal menyambung ke otak DIABLO:", error.message);
    res.status(500).json({ error: "Gagal menyambung ke otak DIABLO", detail: error.message });
  }
});

app.listen(port, () => {
  console.log(`🔥 DIABLO hidup di http://localhost:${port}`);
});