import { getValorJogador, getValorComputador } from "./tabuleiro.js";

function jogaDados() {
    let min, max;
    let resultado;
    min = Math.ceil(1);
    max = Math.floor(6);
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
    // mostraResultado;
    // escreveResultadoNaTela(resultado);
  }

  console.log("Dado: ", jogaDados(1, 6));
  console.log("jogador: ", getValorJogador(1, 1));
  console.log("computador: ", getValorComputador(1, 1));