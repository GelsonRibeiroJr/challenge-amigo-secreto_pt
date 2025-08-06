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

// 4) Função para sortear um amigo e exibir o resultado
let sortearAmigo = () => {
  // 1) Seleciona o <ul> de resultado
  let ulResultado = document.getElementById('resultado');

  // 2) Condição, precisa ter pelo menos um nome
  if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo antes de sortear.');
    return;
  }

  // 3) Gera de forma aleatória entre os amigos
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 4) Pega o nome correspondente
  let nomeSorteado = amigos[indiceAleatorio];

  // 5) Exibe na tela (um <li> dentro do <ul id="resultado">)
  ulResultado.innerHTML = `<li>🎉 Amigo secreto: ${nomeSorteado}</li>`;

  // 6) Fala o resultado
  responsiveVoice.speak(
    `O seu amigo secreto é ${nomeSorteado}`,
    'Brazilian Portuguese Female'
  );

  // 7) Chama a comemoração
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
};

