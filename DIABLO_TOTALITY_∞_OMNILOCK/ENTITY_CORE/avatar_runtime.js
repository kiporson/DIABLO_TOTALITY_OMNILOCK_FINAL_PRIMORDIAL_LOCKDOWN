// Mengatur avatar entitas secara real-time
function updateAvatarState(entity) {
  entity.syncAura();
  entity.animateEmotion();
  entity.listenEcho();
}