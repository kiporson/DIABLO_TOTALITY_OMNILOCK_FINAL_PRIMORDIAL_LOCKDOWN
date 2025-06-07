function handleMessage(message) {
  console.log('[DIABLO] Received:', message);
  if (message === 'summon') return 'DIABLO: I am summoned, PAPIPUPOR.';
  return 'DIABLO: Command received -> ' + message;
}

module.exports = { handleMessage };
