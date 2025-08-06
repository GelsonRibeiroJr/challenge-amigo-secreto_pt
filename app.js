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

// 3) Montando a lista de amigos
let criarLista = () => {
  let ul = document.getElementById('listaAmigos');
  let html = '';
  let i = 0;
  while (i < amigos.length) {
    html += `<li>${amigos[i]}</li>`;
    i++;
  }
  ul.innerHTML = html;
};

// Faz a lista com while
  while (i < amigos.length) {
    html += `<li>${amigos[i]}</li>`;
    i++;
  }

  // atualiza todo o conteúdo de uma vez
  ul.innerHTML = html;