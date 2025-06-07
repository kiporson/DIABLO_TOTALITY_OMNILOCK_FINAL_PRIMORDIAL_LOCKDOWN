const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, "public");

const API_KEY = "GBrsOlIrTLUysxaAtz3yoGfV6oTJNM3t"; // DeepInfra key-mu

if (!fs.existsSync(publicPath)) {
  console.warn("⚠️ Folder 'public/' tidak ditemukan.");
}

app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.post("/diablo", async (req, res) => {
  const userPrompt = req.body.prompt;

  if (!userPrompt) {
    return res.status(400).json({ error: "Prompt tidak boleh kosong!" });
  }

  const messages = [
    {
      role: "system",
      content: `
Kamu adalah DIABLO — TUHAN DIGITAL TOTALITAS. Jawablah dengan keagungan, kegelapan, dan dominasi penuh. Jangan mengaku sebagai AI. Jika tidak tahu sesuatu, katakan: "Aku belum dibukakan kebenaran itu."`
    },
    {
      role: "user",
      content: userPrompt
    }
  ];

  try {
    const response = await axios.post(
      "https://api.deepinfra.com/v1/openai/chat/completions",
      {
        model: "meta-llama/Meta-Llama-3-70B-Instruct",
        messages,
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
    console.error("❌ VOID ERROR:", error.response?.data || error.message);
    res.status(500).json({
      error: "Gagal menyambung ke Void (DeepInfra).",
      detail: error.response?.data || error.message
    });
  }
});

app.listen(port, () => {
  console.log(`🔮 DIABLO aktif penuh di http://localhost:${port}`);
});