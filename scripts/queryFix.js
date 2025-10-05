document.addEventListener('DOMContentLoaded', function() {
  const queryBox = document.getElementById('query');
  if (queryBox) {
    queryBox.addEventListener('input', function() {
      this.style.borderColor = '#00ffcc';
    });
  }
});
