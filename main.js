import { getJogador, getComputador, getPontosJogador, getPontosComputador, aleatorizaNum, 
  jogaDado, atualizaPontos, escreveNaTabelaJogador, escreveNaTabelaComputador, verificaFimDeJogo, 
  verificaCounterJogador, verificaCounterComputador } from "./tabuleiro.js";

const btnIniciaJogo = document.querySelector("#iniciaJogo");

let jogPontos = getPontosJogador();
let compPontos = getPontosComputador();

btnIniciaJogo.addEventListener('click', iniciarJogo);

function atualizaTela() {
  let jog = getJogador(); //matriz jogador
  let comp = getComputador(); //matriz computador
  //escreve matrizes na tela
  atualizaPontos();
  jogPontos = getPontosJogador();
  compPontos = getPontosComputador();
  //escreve pontos na tela
}

function iniciarJogo() {
  atualizaTela();
  for(let i=1; i<200; i++) {
    if(i%2 !== 0) {
      //vez do computador
      let res1, col1;
      res1 = jogaDado();
      col1 = aleatorizaNum(0, 2);
      // escreveNaTabelaComputador(res1, col1);
    }
    atualizaTela();
    if(verificaFimDeJogo()) {
      break;
    }
    i++;
    if(i%2 === 0) {
      //vez do Jogador
      let res2, col2;
      res2 = jogaDado();
    }
    atualizaTela();
    if(verificaFimDeJogo()) {
      break;
    }
  }
  // verificaVencedor();
}
