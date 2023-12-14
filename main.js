import { getJogador, getComputador, getPontosJogador, getPontosComputador, jogaDado, 
  atualizaPontos, escreveNaTabelaJogador, escreveNaTabelaComputador, verificaFimDeJogo, 
  verificaCounterJogador, verificaCounterComputador, contaCasasVazias, verificaVencedor } from "./tabuleiro.js";

const btnIniciaJogo = document.querySelector("#iniciaJogo");

btnIniciaJogo.addEventListener('click', iniciarJogo);

// inicio do script
var actionButton = document.querySelector('button'),
    button = document.querySelector('.mensagem-inicia-jogo');

actionButton.addEventListener('click', function() {
  button.style.display = 'none';
}, false);
//Coloquei esse script para que o botão inicia jogo desapareça. 

let jog = getJogador(); 
let comp = getComputador();
let jogPontos = getPontosJogador();
let compPontos = getPontosComputador();
let resComp = 0;
let resJog = 0;

const cellsC = document.querySelectorAll(".board>.cell")
const dadoComp = document.querySelector("#dadoComp");
const pontosComp = document.querySelector("#pontosComp");

const cellsJ = document.querySelectorAll(".board2>.cell2")
const dadoJog = document.querySelector("#dadoJog");
const pontosJog = document.querySelector("#pontosJog");

const jogadorColuna0 = document.querySelector("#j00");
const jogadorColuna1 = document.querySelector("#j10");
const jogadorColuna2 = document.querySelector("#j20");

function clicaColuna1() {
  escreveNaTabelaJogador(resJog, 0);
}

function clicaColuna2() {
  escreveNaTabelaJogador(resJog, 1);
}

function clicaColuna3() {
  escreveNaTabelaJogador(resJog, 2);
}

function preencheCasaComputador() {
  comp = getComputador();
  for(let i=0; i<9; i++) {
    cellsC[i].innerHTML = "";
    cellsC[i].textContent = comp[Math.floor(i/3)][i%3];
  }
}

function preencheCasaJogador() {
  jog = getJogador();
  for(let i=0; i<9; i++) {
    cellsJ[i].innerHTML = "";
    cellsJ[i].textContent = jog[Math.floor(i/3)][i%3];
  }
}

function preenchePontos(player, pont) {
  player.innerHTML = "";
  player.textContent = pont;
}

function atualizaTela() {
  atualizaPontos();
  jogPontos = getPontosJogador();
  compPontos = getPontosComputador();
  preenchePontos(pontosComp, compPontos);
  preenchePontos(pontosJog, jogPontos);
  preencheCasaComputador();
  preencheCasaJogador();
}

function escreveDado(dado, resultado) {
  dado.innerHTML = "";
  dado.textContent = resultado;
}

let i=1;
function iniciarJogo() {
  let fimDeJogo = false;
  atualizaTela();
  while(fimDeJogo === false) {
    if(i%2 !== 0) {
      //vez do computador
      let colComp;
      comp = getComputador();
      resComp = jogaDado();
      escreveDado(dadoComp, resComp);
      if(contaCasasVazias(comp, 0) > 0) {
        colComp = 0;
      } else if(contaCasasVazias(comp, 1) > 0) {
        colComp = 1;
      } else if(contaCasasVazias(comp, 2) > 0) {
        colComp = 2;
      }
      escreveNaTabelaComputador(resComp, colComp);
      atualizaTela();
      verificaCounterComputador(resComp, colComp);
    }
    atualizaTela();
    if(verificaFimDeJogo()) {
      fimDeJogo = true;
      break;
    }
    i++;
    if(i%2 === 0) {
      //vez do Jogador
      jog = getJogador();
      resJog = jogaDado();
      escreveDado(dadoJog, resJog);
      if(contaCasasVazias(jog, 0) > 0) {
        jogadorColuna0.addEventListener("click", clicaColuna0);
      }
      if(contaCasasVazias(jog, 0) > 0) {
        jogadorColuna1.addEventListener("click", clicaColuna1);
      }
      if(contaCasasVazias(jog, 0) > 0) {
        jogadorColuna2.addEventListener("click", clicaColuna2);
      }
      verificaCounterJogador(resJog, 0);
      verificaCounterJogador(resJog, 1);
      verificaCounterJogador(resJog, 2);
    }
    atualizaTela();
    if(verificaFimDeJogo()) {
      fimDeJogo = true;
      break;
    }
    i++;
  }
  let vencedor = verificaVencedor();
  if(vencedor === 0) {
    // empate
  }
  else if(vencedor === 1) {
    // computador
  }
  else if(vencedor === 2) {
    // jogador
  } 
}
