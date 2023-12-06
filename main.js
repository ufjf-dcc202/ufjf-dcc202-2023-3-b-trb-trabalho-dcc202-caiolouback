import { getValorJogador, getValorComputador } from "./tabuleiro.js";

const btnJogarDado = document.querySelector("#jogarDado");

btnJogarDado.addEventListener('click', jogaDados);

function jogaDados() {
    let min, max;
    let resultado;
    min = Math.ceil(1);
    max = Math.floor(6);
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Dado: ", resultado);
    // mostraResultado;
    // escreveResultadoNaTela(resultado);
  }

  console.log("jogador: ", getValorJogador(1, 1));
  console.log("computador: ", getValorComputador(1, 1));