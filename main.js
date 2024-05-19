import './style.css';

document.querySelector('#app').innerHTML = `
<div class="status-bar">
  <div class="loading-bar">
    <div class="progress"></div>
  </div>
  <p class="message">
    NerdGenérico está em processo de salvamento, não desligue o console ou
    retire o memory card!
  </p>
</div>

<div class="success-popup" id="success-popup">
  <p>Salvamento concluído! <span>NerdGenérico</span> salvo com sucesso</p>
</div>
`;

const progressBar = document.querySelector('.progress');
const successPopup = document.getElementById('success-popup');

let progress = 0;

export function updateProgress() {
  progress += 1;
  progressBar.style.width = `${progress}%`;
  if (progress >= 5000) {
    setTimeout(() => {
      successPopup.classList.add('show');
    }, 1);
  }
}

setInterval(updateProgress, 50);
