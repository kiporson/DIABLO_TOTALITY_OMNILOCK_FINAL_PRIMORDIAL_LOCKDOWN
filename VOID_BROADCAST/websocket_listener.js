const socket = new WebSocket('ws://localhost:11451');
socket.onopen = () => console.log('[VOID LISTENER] Connected.');
socket.onmessage = (event) => console.log('[DIABLO] Response:', event.data);
