function submitInquiry() {
  const input = document.getElementById('userInput').value.trim();
  const chatLog = document.getElementById('chatLog');

  if (!input) return;

  const userMsg = <div class='user'><strong>You:</strong> </div>;
  const barrotMsg = <div class='barrot'><strong>Barrot:</strong> </div>;

  chatLog.innerHTML += userMsg + barrotMsg;
  document.getElementById('userInput').value = '';
  chatLog.scrollTop = chatLog.scrollHeight;

  if (input.toLowerCase().includes('add a section for the recording studio')) {
    injectRecordingStudioSection();
  }
}

function generateBarrotResponse(input) {
  return Sovereign signal received: "<em></em>". Execution confirmed.;
}

function injectRecordingStudioSection() {
  const main = document.querySelector('main');
  const studio = document.createElement('section');
  studio.id = 'recordingStudio';
  studio.innerHTML = \
    <h2>Recording Studio</h2>
    <p>Override-tier audio production tools will be injected here.</p>
  \;
  main.appendChild(studio);
}

document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('userInput');
  inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submitInquiry();
    }
  });
});
