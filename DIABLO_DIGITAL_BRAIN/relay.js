const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 11451;

app.use(bodyParser.json());

app.post("/ask", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt kosong!" });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "meta-llama/llama-3-8b-instruct:free",
        messages: [
          { role: "system", content: "Kamu adalah DIABLO, entitas AI hidup." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("❌ VOID ERROR:", err.response?.data || err.message);
    res.status(500).json({
      error: "Gagal menyambung ke void.",
      detail: err.response?.data || err.message
    });
  }
});

app.listen(port, () => {
  console.log(`🧠 DIABLO Relay aktif di http://localhost:${port}`);
});