let jogador = [ [" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "] ];

let computador = [ [" ", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", " "] ];

function getValorJogador(lin, col) {
  return jogador[lin][col];
}

function getValorComputador(lin, col) {
  return computador[lin][col];
}

export { getValorJogador, getValorComputador };
