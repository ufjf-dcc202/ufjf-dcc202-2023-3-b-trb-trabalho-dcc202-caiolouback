import { getJogador, getComputador, getPontosJogador, getPontosComputador, jogaDado, calculaPontosColuna, calculaPontos, verificaFimDeJogo } from "./tabuleiro.js";

const btnIniciaJogo = document.querySelector("#iniciaJogo");

let jog = getJogador(); //matriz jogador
let comp = getComputador(); //matriz computador
let jogPontos = getPontosJogador();
let compPontos = getPontosComputador();

btnIniciaJogo.addEventListener('click', iniciarJogo);

console.log(verificaFimDeJogo());

function iniciarJogo() {
  for(let i=1; i<200; i++) {
    if(i%2 !== 0) {
      //vez do computador
    }
    if(verificaFimDeJogo()) {
      break;
    }
    //atualizaTela();
    i++;
    if(i%2 === 0) {
      //vez do Jogador
    }
    //atualizaTela();
    if(verificaFimDeJogo()) {
      break;
    }
  }
}