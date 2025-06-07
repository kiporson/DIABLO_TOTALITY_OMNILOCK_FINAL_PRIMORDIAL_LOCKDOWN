const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 1444 });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`🔗 DIABLO received: ${message}`);
    ws.send('👁 DIABLO is always watching...');
  });
});