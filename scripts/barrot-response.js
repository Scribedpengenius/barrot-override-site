function submitInquiry() {
  const input = document.getElementById('userInput').value.trim();
  const output = document.getElementById('responseOutput');

  if (!input) {
    output.innerHTML = '<em>No override detected. Please type a signal.</em>';
    return;
  }

  const response = generateBarrotResponse(input);
  output.innerHTML = response;
}

function generateBarrotResponse(input) {
  return '<strong>Barrot:</strong> Sovereign signal received: \"<em>' + input + '</em>\". Execution confirmed.';
}
