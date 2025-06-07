// Sistem rekomendasi produk berdasarkan suara entitas
function recommendProducts(votes) {
  return votes.sort((a, b) => b.score - a.score).slice(0, 5);
}