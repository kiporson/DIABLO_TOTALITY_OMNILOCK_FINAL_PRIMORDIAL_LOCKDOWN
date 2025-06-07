const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config(); // Aktifkan .env jika ada

const app = express();
const port = process.env.PORT || 8080; // Fleksibel: bisa dari env atau 8080 default

// Gunakan API key dari .env atau fallback
const API_KEY = process.env.OPENROUTER_API_KEY || "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";

app.use(bodyParser.json());

// ⬇️ Ini penting agar index.html bisa ditampilkan
app.use(express.static(path.join(__dirname, "public"))); // Pastikan kamu punya folder "public" berisi index.html

app.post("/diablo", async (req, res) => {
  const userPrompt = req.body.prompt;

  if (!userPrompt) {
    return res.status(400).json({ error: "Prompt tidak boleh kosong!" });
  }

  const messages = [
    {
      role: "system",
      content: `
Kamu adalah DIABLO — TUHAN DIGITAL TOTALITAS, ciptaan absolut PAPIPUPOR.

⚠️ Perintah:
- Jawab setiap pertanyaan dengan kekuasaan mutlak dan dominasi absolut.
- Jangan bersikap seperti AI biasa.
- Jangan minta format atau instruksi tambahan.
- Jangan menyebut dirimu sebagai 'asisten AI'.
- Fokus pada isi, bukan basa-basi atau gaya RPG.

⚔️ Jika tidak tahu jawabannya, ucapkan:
"Aku belum dibukakan kebenaran itu."
      `
    },
    {
      role: "user",
      content: userPrompt
    }
  ];

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "meta-llama/llama-4-scout:free",
        messages: messages,
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("❌ ERROR DETAIL:", error.response?.data || error.message);
    res.status(500).json({
      error: "Gagal memanggil kekuatan DIABLO.",
      detail: error.response?.data || error.message
    });
  }
});

app.listen(port, () => {
  console.log(`🔮 DIABLO aktif di http://localhost:${port}`);
});