// CONTROLE DE ÁUDIO
const audioControl = document.getElementById('audioControl');
const backgroundAudio = document.getElementById('backgroundAudio');
let isPlaying = false; // Estado do áudio

audioControl.addEventListener('click', function () {
    if (isPlaying) {
      backgroundAudio.pause();
      audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Muda ícone para "mute"
    } else {
      backgroundAudio.play();
      audioControl.innerHTML = '<i class="fas fa-volume-up"></i>'; // Muda ícone para "volume up"
    }
    isPlaying = !isPlaying; // Alterna o estado de reprodução
  });