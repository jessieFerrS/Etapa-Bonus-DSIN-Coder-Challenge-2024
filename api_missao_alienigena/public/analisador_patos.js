// ANALISADOR DE PATOS

// APARELHO INTEGRADO AOS ÓCULOS DE MONITORAMENTO

(function() {
    function handleButtonClick(event) {
        const flockSizeBox = document.getElementById('flockSizeBox');
        
        if (event.target.classList.contains('number-btn')) {
            const number = event.target.textContent;

            // Se o conteúdo for '0' ou vazio, substitui por um novo número
            if (flockSizeBox.textContent === '0' || flockSizeBox.textContent === '') {
                flockSizeBox.textContent = number;
            } else {
                flockSizeBox.textContent += number; // Adiciona o número ao final
            }
        } else if (event.target.classList.contains('clear-btn')) {
            flockSizeBox.textContent = ''; // Limpa o conteúdo
        }
    }

    // Adiciona o evento de clique para todos os botões de número e de limpar
    document.querySelectorAll('.number-btn, .clear-btn').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
})();


// Efeito de maquina de escrever
function typeWriterEffect(text, elementId, speed, delay) {
    let i = 0;
    const element = document.getElementById(elementId);
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Aguarda um tempo e depois apaga o texto para começar de novo
            setTimeout(() => {
                clearText();
            }, delay);
        }
    }

    function clearText() {
        let j = text.length;
        function erase() {
            if (j >= 0) {
                element.textContent = text.substring(0, j);
                j--;
                setTimeout(erase, speed / 2); // Velocidade mais rápida para apagar
            } else {
                i = 0; // Reseta o índice
                type(); // Começa a digitar novamente
            }
        }
        erase();
    }

    type();
}

const textToType = "Processando os dados...";
typeWriterEffect(textToType, 'processingText', 100, 2000); // 100ms entre letras, 2000ms de pausa antes de repetir



// Inicia a função de efeito de digitação ao carregar a página
window.onload = function() {
  generateDucks(4);
};

// Função para gerar patos dinamicamente
function generateDucks(flockSize) {
  const duckContainer = document.getElementById('duckContainer');

  // Limpa qualquer conteúdo anterior
  duckContainer.innerHTML = '';

  for (let i = 0; i < flockSize; i++) {
    const duckImg = document.createElement('img');
    duckImg.src = '../img/pato.png';
    duckImg.classList.add('duck');
    duckImg.alt = 'Pato Alienígena';

    duckContainer.appendChild(duckImg);
  }
}

// Controle de áudio
const audioControl = document.getElementById('audioControl');
const backgroundAudio = document.getElementById('backgroundAudio');
let isPlaying = false; // Estado do áudio

// Função para alternar a reprodução de áudio
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

// Função para enviar dados para a API e exibir a resposta na lente direita
function sendDataToAPI() {
  // Coleta de dados dos inputs
  const color = document.getElementById("cor").value;
  const beakSize = document.getElementById("tamanho-bico").value;
  const location = document.getElementById("localizacao").value;
  const quackAccent = document.getElementById("sotaque").value;
  const flockSize = document.getElementById("flockSizeBox").textContent;

  // Coleta de status dos checkboxes
  const behaviors= Array.from(document.querySelectorAll("input[name='status']:checked")).map(el => el.value);

  // Dados a serem enviados
  const dataToSend = {
      color,
      beakSize,
      location,
      quackAccent,
      flockSize,
      behaviors
  };

  // Envia os dados usando POST
  axios.post('http://localhost:3000/api/analyzeduckobservation', dataToSend)
  .then(response => {
      console.log("Resposta do POST:", response.data); // Log da resposta do POST

      if (response.data.success) {
          // Chama a função para exibir os dados do pato recém-criado
          displayDuckData(response.data.data);
      } else {
          console.error("Erro na resposta da API:", response.data.message);
      }
  })
  .catch(error => {
      console.error('Erro ao enviar dados para a API:', error);
  }); 

}

// Função para exibir os dados do pato na lente direita
function displayDuckData(duckData) {
  const duckDataElement = document.getElementById("duckData");

  // Limpa o conteúdo anterior na lente direita
  duckDataElement.innerHTML = '';

  // Campos específicos para exibição
  const fieldsToDisplay = [
      'color', 
      'beakSize', 
      'quackAccent', 
      'suspiciousBehavior', 
      'location', 
      'flockSize', 
      'identifiedAsXenophage', 
      'captureStrategy', 
      'suggestedWeapon'
  ];

  // Exibe cada campo na lente direita com efeito de máquina de escrever
  fieldsToDisplay.forEach(field => {
      if (duckData[field] !== undefined) {
          const item = document.createElement('p');
          duckDataElement.appendChild(item); // Adiciona o parágrafo ao elemento

          // Chama a função de efeito de digitação
          typeWriterEffect(`${field}: ${duckData[field]}`, item.id = `field-${field}`, 200, 100000); // 200ms entre letras, 20000ms de pausa antes de repetir
      } else {
          console.warn(`Campo '${field}' não encontrado nos dados do pato.`);
      }
  });

  // Exibe os comportamentos se existirem
  if (duckData.behaviors && duckData.behaviors.length > 0) {
      const behaviorsElement = document.createElement('p');
      duckDataElement.appendChild(behaviorsElement); // Adiciona o parágrafo ao elemento

      // Chama a função de efeito de digitação para os comportamentos
      typeWriterEffect(`Behaviors: ${duckData.behaviors.join(', ')}`, behaviorsElement.id = 'behaviors', 200, 100000);
  }
}


// Adiciona o evento de clique ao botão de envio
document.querySelector(".submit-button").addEventListener("click", sendDataToAPI);