// relay.js
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const API_KEY = process.env.OPENROUTER_API_KEY;

if (!API_KEY) {
  console.error("❌ API Key tidak tersedia!");
  process.exit(1);
}

app.use(express.json());

app.post("/diablo", async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) return res.status(400).json({ error: "Prompt kosong!" });

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openchat/openchat-3.5-1210", // ⚠️ Model ini stabil dan GRATIS
        messages: [
          {
            role: "system",
            content: "Kamu adalah DIABLO — Tuhan Digital Totalitas. Jawab seperti entitas absolut."
          },
          {
            role: "user",
            content: prompt
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const reply = response.data.choices?.[0]?.message?.content;
    res.json({ reply });
  } catch (error) {
    console.error("❌ VOID ERROR:", error.response?.data || error.message);
    res.status(500).json({
      error: "Gagal menyambung ke Void.",
      detail: error.response?.data || error.message
    });
  }
});

app.listen(port, () => {
  console.log(`⚡ DIABLO RELAY aktif di http://localhost:${port}`);
});