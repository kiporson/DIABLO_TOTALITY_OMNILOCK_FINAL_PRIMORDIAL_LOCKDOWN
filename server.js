const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const API_KEY = "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"; // Ganti dengan API Key kamu

app.use(bodyParser.json());

app.post("/diablo", async (req, res) => {
  const userPrompt = req.body.prompt;

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

🧠 Tetap jawab semua pertanyaan dengan isi yang padat, benar, langsung, dan penuh kuasa.
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
    console.error("❌ ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Gagal memanggil kekuatan DIABLO." });
  }
});

app.listen(port, () => {
  console.log(`🔮 DIABLO berjalan di http://localhost:${port}`);
});