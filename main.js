import { getJogador, getComputador, getPontosJogador, getPontosComputador, jogaDado, 
  atualizaPontos, escreveNaTabelaJogador, escreveNaTabelaComputador, verificaFimDeJogo, 
  verificaCounterJogador, verificaCounterComputador, contaCasasVazias, verificaVencedor } from "./tabuleiro.js";

const btnIniciaJogo = document.querySelector("#iniciaJogo");

btnIniciaJogo.addEventListener('click', iniciarJogo);

let jog = getJogador(); 
let comp = getComputador();
let jogPontos = getPontosJogador();
let compPontos = getPontosComputador();

const cellsC = document.querySelectorAll(".board>.cell")
const dadoComp = document.querySelector("#dadoComp");
const pontosComp = document.querySelector("#pontosComp");

const cellsJ = document.querySelectorAll(".board2>.cell2")
const dadoJog = document.querySelector("#dadoJog");
const pontosJog = document.querySelector("#pontosJog");

const jogadorColuna0 = document.querySelector("#j00");
jogadorColuna0.addEventListener("click", clicaColuna0)
function clicaColuna0() {
  jog = getJogador();
  if((contaCasasVazias(jog, 0) > 0) && (i%2 === 0)) {
    escreveNaTabelaJogador(resJog, 0);
  }
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
      let resComp, colComp;
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
      let resJog;
      resJog = jogaDado();
      escreveDado(dadoJog, resJog);
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
