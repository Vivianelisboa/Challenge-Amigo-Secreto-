//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    // Pega o campo de texto do HTML onde o usuário digita o nome
    let campo = document.getElementById("amigo");
    
    // Pega o valor digitado, removendo espaços extras no começo e fim
    let nome = campo.value.trim();

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, digite um nome.");
        return; // Sai da função se estiver vazio
    }

    // Verifica se o nome já foi adicionado na lista para evitar repetição
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return; // Sai da função se o nome já existir
    }

    // Adiciona o nome no array 'amigos'
    amigos.push(nome);

    // Limpa o campo de texto para o usuário digitar outro nome
    campo.value = "";
    
    // Atualiza a lista na tela (função que vamos criar logo em seguida)
    mostrarLista();
}
// Função para mostrar a lista de amigos na tela
function mostrarLista() {
    // Pega o elemento UL onde os nomes serão mostrados
    let listaHTML = document.getElementById("listaAmigos");
    
    // Limpa o conteúdo atual para não duplicar os nomes
    listaHTML.innerHTML = "";

    // Para cada nome no array 'amigos', cria um novo item na lista
    amigos.forEach(function(nome) {
        // Cria um elemento <li> para o nome
        let item = document.createElement("li");
        item.textContent = nome;

        // Adiciona o item na lista HTML
        listaHTML.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se a lista está vazia
    if (amigos.length === 0) {
        alert("A lista está vazia!");
        return; // Sai da função se não tiver nomes
    }

    // Gera um índice aleatório entre 0 e tamanho do array - 1
    let indice = Math.floor(Math.random() * amigos.length);

    // Pega o nome sorteado usando o índice
    let sorteado = amigos[indice];

    // Pega o elemento onde o resultado será exibido
    let resultadoHTML = document.getElementById("resultado");

    // Mostra o nome sorteado na tela dentro de uma <li>
    resultadoHTML.innerHTML = `<li>Amigo secreto: ${sorteado}</li>`;

    // Remove o nome sorteado do array para não repetir no próximo sorteio
    amigos.splice(indice, 1);

    // Atualiza a lista de nomes na tela após remover o sorteado
    mostrarLista();
}

