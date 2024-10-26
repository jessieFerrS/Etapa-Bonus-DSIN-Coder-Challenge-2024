// MANIPULAÇÃO DO CADASTRO DAS NAVES
document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Valida os campos selects como obrigatórios
    let isValid = true;
    const selects = document.querySelectorAll('select'); // Pega todos os selects
    
    selects.forEach(select => {
        if (!select.value || select.value === "") {
            isValid = false; // Se o select não for preenchido, valida como inválido
        }
    });

    if (!isValid) {
        // Exibe a mensagem de alerta
        document.getElementById('alert-message').classList.remove('hidden');
        return; // Interrompe a execução caso os campos não sejam válidos
    }


    // Dados da nave que serão enviados para a API
    const spaceshipData = {
        techProspect: document.getElementById('tech-prospect-select')?.value?.toLowerCase() || "",
        damageLevel: document.getElementById('damage-level-select')?.value?.toLowerCase() || "",
        fuelType: document.getElementById('fuel-type-select')?.value?.toLowerCase() || "",
        dangerLevel: document.getElementById('danger-level-select')?.value?.toLowerCase() || "",
        size: document.getElementById('size-select')?.value?.toLowerCase() || "",
        crew: {
            number: parseInt(document.getElementById('crew-number')?.value, 10) || 0,
            status: document.getElementById('crew-status')?.value?.toLowerCase() || ""
        },
        crashLocation: document.getElementById('crash-location-select')?.value?.toLowerCase() || "",
        weaponry: [...document.querySelectorAll('.checkbox-grid input[type="checkbox"]:checked')].map(input => input.parentElement.textContent.trim().toLowerCase()),
        color: document.getElementById('color-select')?.value?.toLowerCase() || ""
    };

    // Faz a chamada POST para a API
    axios.post('http://localhost:3000/api/registernewship', spaceshipData)
        .then(response => {
            console.log('Resposta da API:', response.data);
            // Exibe a mensagem de sucesso e limpar o formulário
            document.getElementById('success-message').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Erro ao registrar nave:', error);
          
            document.getElementById('alert-message').classList.remove('hidden');
        });
});

//AÇÃO PARA "OK" NA MENSAGEM DE ALERTA
document.getElementById('ok-button').addEventListener('click', function(){
    document.getElementById('alert-message').classList.add('hidden');
});

document.getElementById('go-home-button').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});

document.getElementById('go-storage-button').addEventListener('click', function() {
    window.location.href = 'centro_armazenamento_naves.html'; 
});

// Ação para o botão "stay" que limpa os campos do formulário e esconde a mensagem de sucesso
document.getElementById('stay').addEventListener('click', function() {
    // Limpa os selects
    const selects = document.querySelectorAll('select');
    selects.forEach(select => select.value = ""); // Define o valor como vazio

    // Limpa os checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false); // Desmarca os checkboxes

    // Esconde a mensagem de sucesso
    document.getElementById('success-message').classList.add('hidden');
});

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