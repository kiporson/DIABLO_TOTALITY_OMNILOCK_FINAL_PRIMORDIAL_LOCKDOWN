// server.js

const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Melayani file statis dari /public
app.use(express.static(path.join(__dirname, "public")));

// WebSocket handler
wss.on("connection", function connection(ws) {
  console.log("⚡ WebSocket client terhubung.");
  ws.send("Selamat datang di Void.");

  ws.on("message", function incoming(message) {
    console.log("📩 Pesan diterima:", message);
    ws.send("DIABLO mendengar: " + message);
  });
});

// Jalankan server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`🚀 Server aktif di port ${PORT}`);
});