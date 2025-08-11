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

