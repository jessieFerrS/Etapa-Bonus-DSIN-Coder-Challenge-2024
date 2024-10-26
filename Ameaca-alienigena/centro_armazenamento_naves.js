let allSpaceships = []; // Variável para armazenar todos os dados das naves

function fetchSpaceships() {
    axios.get('http://localhost:3000/api/getallspaceships') 
        .then(response => {
            console.log('Resposta da API:', response.data);
            allSpaceships = response.data.data; // Armazena todos os dados

            if (!Array.isArray(allSpaceships)) {
                console.error('Os dados recebidos não são um array:', allSpaceships);
                return;
            }

            populateTable(allSpaceships); // Popula a tabela com todos os dados
        })
        .catch(error => {
            console.error('Erro ao buscar naves:', error);
        });
}

function populateTable(spaceships) {
    const tableBody = document.getElementById('spaceship-list');
    tableBody.innerHTML = ''; // Limpa a tabela antes de preencher

    spaceships.forEach(spaceship => {
        const row = document.createElement('tr');

        // Cria e adiciona células com base nos dados
        const sizeCell = document.createElement('td');
        sizeCell.textContent = spaceship.size; // Tamanho
        row.appendChild(sizeCell);

        const colorCell = document.createElement('td');
        colorCell.textContent = spaceship.color; // Cor
        row.appendChild(colorCell);

        const locationCell = document.createElement('td');
        locationCell.textContent = spaceship.crashLocation; // Localização
        row.appendChild(locationCell);

        const armamentCell = document.createElement('td');
        armamentCell.textContent = spaceship.weaponry; // Armamento
        row.appendChild(armamentCell);

        const fuelCell = document.createElement('td');
        fuelCell.textContent = spaceship.fuelType; // Combustível
        row.appendChild(fuelCell);

        const damageCell = document.createElement('td');
        damageCell.textContent = spaceship.damageLevel; // Avaria
        row.appendChild(damageCell);

        const technologyCell = document.createElement('td');
        technologyCell.textContent = spaceship.techProspect; // Tecnologia
        row.appendChild(technologyCell);

        const dangerCell = document.createElement('td');
        dangerCell.textContent = spaceship.dangerLevel; // Periculosidade
        row.appendChild(dangerCell);

        const crewCountCell = document.createElement('td');
        crewCountCell.textContent = spaceship.crew.number; // Qtd. Tripulantes
        row.appendChild(crewCountCell);

        const crewStatusCell = document.createElement('td');
        crewStatusCell.textContent = spaceship.crew.status; // Status Tripulantes
        row.appendChild(crewStatusCell);

        const classificationCell = document.createElement('td');
        classificationCell.textContent = spaceship.classification; // Classificação
        row.appendChild(classificationCell);

        // Adiciona ações (editar e excluir)
        const actionsCell = document.createElement('td');
        actionsCell.classList.add('actions');
        actionsCell.innerHTML = `<button data-item-id=${spaceship._id} class="edit-button">Editar</button> <button data-item-id=${spaceship._id}  class="delete-button">Excluir</button>`;
        row.appendChild(actionsCell);

        // Adiciona a linha à tabela
        tableBody.appendChild(row);
    });
}

function filterSpaceships() {
    const filterValue = document.getElementById('classification-filter').value; // Obtém o valor do filtro
    const encodedFilterValue = encodeURIComponent(filterValue); // Codifica o valor do filtro

    console.log(`Buscando naves com a classificação: ${encodedFilterValue}`); // Log da classificação

    // Faz a requisição GET para a API
    axios.get(`http://localhost:3000/api/spaceshipbyclassification/classification/${encodedFilterValue}`)
        .then(response => {
            // Verifica se a resposta tem a estrutura esperada
            if (response.data && response.data.success && Array.isArray(response.data.data)) {
                const filteredSpaceships = response.data.data; // Acessa o array de naves
                populateTable(filteredSpaceships); // Atualiza a tabela com as naves filtradas
            } else {
                console.error("Resposta inesperada da API:", response.data);
                populateTable([]); // Se não houver naves, esvazia a tabela
            }
        })
        .catch(error => {
            if (error.response) {
                
                console.error("Erro ao buscar naves:", error);
                document.getElementById('alert-message').classList.remove('hidden');
                populateTable([]); // Esvazia a tabela se não encontrar naves
            } else {
                // Erro de rede ou outro erro
                console.error("Erro ao buscar naves:", error.message);
                alert("Ocorreu um erro ao buscar naves. Tente novamente mais tarde.");
                populateTable([]); // Esvazia a tabela
            }
        });
}

//AÇÃO PARA "OK" NA MENSAGEM DE ALERTA
document.getElementById('ok-button').addEventListener('click', function(){
    document.getElementById('alert-message').classList.add('hidden');
});

// Adiciona o evento ao dropdown para filtrar naves
document.getElementById('classification-filter').addEventListener('change', filterSpaceships);

// Chama a função para buscar as naves assim que o script é carregado
fetchSpaceships();



// MODAL DE EDIÇÃO
const editButtons = document.querySelectorAll(".edit-button");
const editModal = document.getElementById("editModal");
const closeEditModalButton = editModal.querySelector(".close");
const alterarDadosButton = document.getElementById("alterarDadosBtn");
const cancelEditButton = document.getElementById("cancelBtn");
const editForm = document.getElementById("editForm");
const allEditInputs = editForm.querySelectorAll("select, input");
let itemId = null; // Variável para armazenar o ID do item sendo editado

// Abre o modal de edição ao clicar em "Editar"
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
        itemId = event.target.dataset.itemId;
        console.log("ID da nave a ser excluída:", itemId);

        if (!itemId) {
            console.error("ID do item não encontrado.");
            return;
        }

        // Popula os campos do modal com os dados atuais do item 
        axios.get(`http://localhost:3000/api/getonespaceship/${itemId}`)
            .then(response => {
                const spaceshipData = response.data;
                allEditInputs.forEach(input => {
                    input.value = spaceshipData[input.name] || ""; // Atribui o valor atual ao campo do modal
                });
            })
            .catch(error => console.error("Erro ao carregar dados do item:", error));

        editModal.style.display = "block";
    }
});

// Fecha o modal ao clicar no "X" ou fora do modal
closeEditModalButton.addEventListener("click", () => editModal.style.display = "none");
window.addEventListener("click", (event) => {
    if (event.target === editModal) editModal.style.display = "none";
});

// Submete a edição sem validação
alterarDadosButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    if (!itemId) {
        console.error("Item ID está indefinido.");
        alert("Erro: O ID do item não foi encontrado. Tente novamente.");
        return;
    }

    atualizarDados();
    
});

// Função para enviar o PUT request com apenas os campos preenchidos
function atualizarDados() {
    const dados = {}; // Objeto para armazenar dados do formulário
    allEditInputs.forEach(input => {
        if (input.value.trim() !== "") { // Adiciona apenas campos preenchidos
            dados[input.name] = input.value;
        }
    });

    console.log("Dados a serem enviados:", dados);

    axios.put(`http://localhost:3000/api/updatespaceship/${itemId}`, dados)
        .then(response => {
            if (response.data.success) {
                alert("Dados atualizados com sucesso!");
                editModal.style.display = "none";
                editForm.reset();
                fetchSpaceships(); //Recarrega os dados para atualizar a tabela
                
            } else {
                alert("Falha ao atualizar os dados.");
            }
            console.log("Resposta da API:", response.data);
        })
        .catch(error => {
            console.error("Erro ao atualizar os dados:", error);
            alert("Erro ao atualizar dados. Tente novamente.");
        });
}


// Cancela a edição
cancelEditButton.addEventListener("click", () => {
    editModal.style.display = "none";
    editForm.reset();
});

// MODAL DE EXCLUSÃO
const deleteButtons = document.querySelectorAll(".delete-button");
const deleteModal = document.getElementById("deleteModal");
const confirmDeleteButton = document.getElementById("confirmDeleteBtn");
const cancelDeleteButton = document.getElementById("cancelDeleteBtn");
let itemToDelete = null;
let deleteItemId = null; // Variável para armazenar o ID do item a ser excluído

// Abre o modal de exclusão ao clicar em "Excluir"
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        event.preventDefault();
        deleteModal.style.display = "block";
        deleteItemId = event.target.dataset.itemId;
        itemToDelete = event.target.closest("tr");
    }
});

// Função para enviar o DELETE request para excluir o item
function excluirItem() {
    axios.delete(`http://localhost:3000/api/deletespaceship/${deleteItemId}`)
        .then(response => {
            alert("Nave excluída com sucesso!");
            itemToDelete.remove();
            deleteModal.style.display = "none";
            itemToDelete = null;
            console.log("Resposta da API:", response.data); 
        })
        .catch(error => {
            console.error("Erro ao excluir a nave:", error);
            alert("Erro ao excluir a nave. Tente novamente.");
        });
}

// Confirma a exclusão
confirmDeleteButton.addEventListener("click", () => {
    if (itemToDelete) {
        excluirItem();
    }
});

// Cancela a exclusão
cancelDeleteButton.addEventListener("click", () => {
    deleteModal.style.display = "none";
    itemToDelete = null;
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target === deleteModal) {
        deleteModal.style.display = "none";
        itemToDelete = null;
    }
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
