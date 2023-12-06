let jogador = [ [" ", " ", " "],
                [" ", 5, " "],
                [" ", " ", " "] ];

let computador = [ [" ", " ", " "],
                    [" ", 6, " "],
                    [" ", " ", " "] ];

function getValorJogador(lin, col) {
  return jogador[lin][col];
}

function getValorComputador(lin, col) {
  return computador[lin][col];
}

export { getValorJogador, getValorComputador };
