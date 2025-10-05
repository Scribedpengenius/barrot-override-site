document.addEventListener('DOMContentLoaded', function() {
  const queryBox = document.getElementById('query');
  if (queryBox) {
    queryBox.placeholder = 'Type your override-tier query here...';
    queryBox.addEventListener('input', function() {
      this.style.borderColor = '#00ffcc';
    });
  } else {
    console.error('Query box not found. Sovereign routing failed.');
  }
});
