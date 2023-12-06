import { getJogador } from "./tabuleiro.js";

function jogaDados(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log("Dado: ", jogaDados(1, 6));