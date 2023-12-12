import { getJogador, getComputador, getPontosJogador, getPontosComputador, jogaDado, 
  atualizaPontos, escreveNaTabelaJogador, escreveNaTabelaComputador, verificaFimDeJogo, 
  verificaCounterJogador, verificaCounterComputador, contaCasasVazias, verificaVencedor } from "./tabuleiro.js";
s
const btnIniciaJogo = document.querySelector("#iniciaJogo");

let jog = getJogador(); 
let comp = getComputador();
let jogPontos = getPontosJogador();
let compPontos = getPontosComputador();

btnIniciaJogo.addEventListener('click', iniciarJogo);

var button = document.querySelector(".botao-inicia-jogo"); // botão inicia jogo 
button.onclick = function() {  //função para botão desaparecer depois de clicar
 button.style.display = "none";
 document.querySelector('.mensagem-inicia-jogo').style.position = 'relative';
}

function atualizaTela() {
  jog = getJogador(); 
  comp = getComputador();
  //escreve matrizes na tela
  atualizaPontos();
  jogPontos = getPontosJogador();
  compPontos = getPontosComputador();
  //escreve pontos na tela
}

function iniciarJogo() {
  let fimDeJogo = false;
  atualizaTela();
  while(fimDeJogo === false) {
    let i=1;
    if(i%2 !== 0) {
      //vez do computador
      let resComp, colComp;
      let iComp, jComp, kComp;
      comp = getComputador();
      resComp = jogaDado();
      iComp = contaCasasVazias(comp, 0);
      jComp = contaCasasVazias(comp, 1);
      kComp = contaCasasVazias(comp, 2);
      if(iComp > 0) {
        colComp = 0;
      } else if(jComp > 0) {
        colComp = 1;
      } else if(kComp > 0) {
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
      let resJog, colJog;
      let iJog, jJog, kJog;
      jog = getJogador();
      iJog = contaCasasVazias(jog, 0);
      jJog = contaCasasVazias(jog, 1);
      kJog = contaCasasVazias(jog, 2);
      resJog = jogaDado();
      // escreveNaTabelaJogador(resJog, colJog);
      // verificaCounterJogador(resJog, colJog);
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
