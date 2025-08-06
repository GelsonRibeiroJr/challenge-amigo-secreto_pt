//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// array de amigos e variável para seu nome
let amigos = [];
let meuNome = '';

// Entrada do seu próprio nome
let definirMeuNome = () => {
  let input = document.getElementById('meuNome');
  let nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira seu nome.');
  } else {
    meuNome = nome;
    input.disabled = true;
    document.getElementById('botaoMeuNome').disabled = true;
  }
};

// 2) Adicionar amigos a lista
let adicionarAmigo = () => {
  let input = document.getElementById('amigo');
  let nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
  } else {
    amigos.push(nome);
    input.value = '';
    criarLista();
  }
};

