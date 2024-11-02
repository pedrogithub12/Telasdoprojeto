// script.js

// Seleciona o botão de edição no menu
const editButton = document.querySelector('.nav-button:nth-child(7)');

// Seleciona todas as células da tabela de participantes
const participantCells = document.querySelectorAll('.table-container tbody td');

// Função para alternar entre visualização e edição
function toggleEditMode() {
    participantCells.forEach(cell => {
        // Verifica se a célula já está em modo de edição
        if (cell.querySelector('input') === null) {
            // Salva o conteúdo da célula
            const cellContent = cell.innerText;
            // Cria um campo de entrada
            const input = document.createElement('input');
            input.type = 'text';
            input.value = cellContent;
            // Substitui o conteúdo da célula pelo campo de entrada
            cell.innerText = '';
            cell.appendChild(input);
        } else {
            // Se já está em modo de edição, salva o valor do input e remove-o
            const input = cell.querySelector('input');
            cell.innerText = input.value;
        }
    });
}

// Adiciona um evento de clique ao botão de edição
editButton.addEventListener('click', toggleEditMode);
