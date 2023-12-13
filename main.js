import { getJogador, getComputador, getPontosJogador, getPontosComputador, jogaDado, 
  atualizaPontos, escreveNaTabelaJogador, escreveNaTabelaComputador, verificaFimDeJogo, 
  verificaCounterJogador, verificaCounterComputador, contaCasasVazias, verificaVencedor } from "./tabuleiro.js";

const btnIniciaJogo = document.querySelector("#iniciaJogo");

btnIniciaJogo.addEventListener('click', iniciarJogo);

let jog = getJogador(); 
let comp = getComputador();
let jogPontos = getPontosJogador();
let compPontos = getPontosComputador();

// const cels1 = document.querySelectorAll(".board>.cell")

const pComp = document.querySelector("#pontosComp");

const matC00 = document.querySelector("#c00");
const matC01 = document.querySelector("#c01");
const matC02 = document.querySelector("#c02");
const matC10 = document.querySelector("#c10");
const matC11 = document.querySelector("#c11");
const matC12 = document.querySelector("#c12");
const matC20 = document.querySelector("#c20");
const matC21 = document.querySelector("#c21");
const matC22 = document.querySelector("#c22");

const pJog = document.querySelector("#pontosJog");

const matJ00 = document.querySelector("#j00");
const matJ01 = document.querySelector("#j01");
const matJ02 = document.querySelector("#j02");
const matJ10 = document.querySelector("#j10");
const matJ11 = document.querySelector("#j11");
const matJ12 = document.querySelector("#j12");
const matJ20 = document.querySelector("#j20");
const matJ21 = document.querySelector("#j21");
const matJ22 = document.querySelector("#j22");

function preenchePontos(player, pont) {
  player.innerHTML = "";
  player.textContent = pont;
}

function preencheCasaTabela(casa, res) {
  casa.innerHTML = "";
  casa.textContent = res;
}

function preencheCasaJogador() {
  jog = getJogador();
  preencheCasaTabela(matJ00, jog[0][0]);
  preencheCasaTabela(matJ01, jog[0][1]);
  preencheCasaTabela(matJ02, jog[0][2]);
  preencheCasaTabela(matJ10, jog[1][0]);
  preencheCasaTabela(matJ11, jog[1][1]);
  preencheCasaTabela(matJ12, jog[1][2]);
  preencheCasaTabela(matJ20, jog[2][0]);
  preencheCasaTabela(matJ21, jog[2][1]);
  preencheCasaTabela(matJ22, jog[2][2]);
}

function preencheCasaComputador() {
  comp = getComputador();
  preencheCasaTabela(matC00, comp[0][0]);
  preencheCasaTabela(matC01, comp[0][1]);
  preencheCasaTabela(matC02, comp[0][2]);
  preencheCasaTabela(matC10, comp[1][0]);
  preencheCasaTabela(matC11, comp[1][1]);
  preencheCasaTabela(matC12, comp[1][2]);
  preencheCasaTabela(matC20, comp[2][0]);
  preencheCasaTabela(matC21, comp[2][1]);
  preencheCasaTabela(matC22, comp[2][2]);
}

function atualizaTela() {
  atualizaPontos();
  jogPontos = getPontosJogador();
  compPontos = getPontosComputador();
  preenchePontos(pComp, compPontos);
  preenchePontos(pJog, jogPontos);
  preencheCasaComputador();
  preencheCasaJogador();
}

atualizaTela();

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
