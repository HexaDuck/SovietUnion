// script.js

// Função para alternar entre as abas (páginas)
function showPage(pageId) {
    // Ocultar todas as páginas
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    // Exibir a página selecionada
    document.getElementById(pageId).style.display = 'block';
}

// Função de busca para a lista de cidadãos
function searchObject() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const objects = document.querySelectorAll('#objectList .object');

    objects.forEach((object) => {
        const name = object.getAttribute('data-name').toLowerCase();
        object.style.display = name.includes(input) ? '' : 'none';
    });
}

// Função para adicionar pessoas ao seguro de vida
function adicionarSeguro(event) {
    event.preventDefault();

    // Pegando os valores do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const plano = document.getElementById('plano').value;

    // Criando um novo elemento de seguro
    adicionarSegurado(nome, idade, plano);

    // Limpar o formulário
    document.getElementById('seguroForm').reset();
}

// Função para adicionar manualmente uma pessoa no seguro de vida
function adicionarSegurado(nome, idade, plano) {
    const seguroList = document.getElementById('seguroList');
    const novoSegurado = document.createElement('div');
    novoSegurado.classList.add('segurado');
    novoSegurado.setAttribute('data-name', nome);

    novoSegurado.innerHTML = `
        <h2>${nome}</h2>
        <p>Idade: ${idade}</p>
        <p>Plano: ${plano}</p>
    `;

    seguroList.appendChild(novoSegurado);
}

// Função de busca para a lista de segurados
function searchSeguro() {
    const input = document.getElementById('searchSegurado').value.toLowerCase();
    const segurados = document.querySelectorAll('#seguroList .segurado');

    segurados.forEach((segurado) => {
        const name = segurado.getAttribute('data-name').toLowerCase();
        segurado.style.display = name.includes(input) ? '' : 'none';
    });
}

// Função para busca na lista criminal
function searchCriminal() {
    const input = document.getElementById('searchCriminal').value.toLowerCase();
    const criminosos = document.querySelectorAll('#criminalList .criminoso');

    criminosos.forEach((criminoso) => {
        const name = criminoso.getAttribute('data-name').toLowerCase();
        criminoso.style.display = name.includes(input) ? '' : 'none';
    });
}

// Função para alternar a exibição de crimes
function toggleCrime(criminosoName) {
    const crimes = document.querySelector(`.criminoso[data-name="${criminosoName}"] .crimes`);
    if (crimes.style.display === 'none') {
        crimes.style.display = 'block';
    } else {
        crimes.style.display = 'none';
    }
}

// Adicionar alguns segurados e criminosos manualmente ao carregar a página
window.onload = function() {
    showPage('Cidadãos');  // Mostra a primeira aba (Lista de Cidadãos) ao iniciar

    // Adicionando segurados dinamicamente
    adicionarSegurado('Isabela Cunha Zeri', '35', 'Básico');
    adicionarSegurado('Felipe Ferrari Caixeta', '42', 'Premium');
    adicionarSegurado('João José Soares Bueno', '29', 'Completo');
    adicionarSegurado('Tobias', '50', 'Básico');
    adicionarSegurado('Gabriel Moraes Alvez', '33', 'Completo');
    adicionarSegurado('Luigi', '47', 'Premium');
    adicionarSegurado('João Marlos Brito', '28', 'Básico');
    adicionarSegurado('Totelho Botelho', '40', 'Completo');
    adicionarSegurado('------------', '38', 'Premium');
    adicionarSegurado('------------', '45', 'Básico');

    // Adicionando criminosos dinamicamente
    adicionarCriminoso('Isabela Cunha Zeri', ['Falsificação de documentos', 'Subversão']);
    adicionarCriminoso('Felipe Ferrari Caixeta', ['Atividade suspeita']);
    adicionarCriminoso('João José Soares Bueno', ['Fraude financeira']);
    adicionarCriminoso('Tobias', ['Desobediência']);
    adicionarCriminoso('Gabriel Moraes Alvez', ['Incitação ao caos']);
    adicionarCriminoso('Luigi', ['Tráfico de influência']);
    adicionarCriminoso('João Marlos Brito', ['Extorsão']);
    adicionarCriminoso('Totelho Botelho', ['Desacato']);
    adicionarCriminoso('------------', ['Conspiração']);
    adicionarCriminoso('------------', ['Agitação subversiva']);
};

// Função para adicionar manualmente um criminoso à lista criminal
function adicionarCriminoso(nome, crimes) {
    const criminalList = document.getElementById('criminalList');
    const novoCriminoso = document.createElement('div');
    novoCriminoso.classList.add('criminoso');
    novoCriminoso.setAttribute('data-name', nome);

    const crimeListHtml = crimes.map(crime => `<p>- Crime: ${crime}</p>`).join('');

    novoCriminoso.innerHTML = `
        <h2>${nome}</h2>
        <button onclick="toggleCrime('${nome}')">Ver Crimes</button>
        <div class="crimes" style="display:none;">
            ${crimeListHtml}
        </div>
    `;

    criminalList.appendChild(novoCriminoso);
}
