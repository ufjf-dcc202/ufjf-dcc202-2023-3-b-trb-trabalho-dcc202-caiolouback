let jogador = [ [" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "] ];

let computador = [ [" ", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", " "] ];

let pontosJogador = 0;
let pontosComputador = 0;

function getJogador() {
  return jogador;
}

function getComputador() {
  return computador;
}

function getPontosJogador() {
  return pontosJogador;
}

function getPontosComputador() {
  return pontosComputador;
}

function jogaDado() {
  let min, max;
  let resultado;
  min = Math.ceil(1);
  max = Math.floor(6);
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

function calculaPontosColuna(mat, col) {
  let somaPontosColuna = 0, multiplicador = 1;
  for(let i=0; i<3; i++) {
    somaPontosColuna += mat[i][col];
  }
  if(mat[0][col] === mat[1][col] && mat[0][col] === mat[2][col]) {
    multiplicador = 3;
  }
  else if(mat[0][col] === mat[1][col] || mat[0][col] === mat[2][col] || mat[1][col] === mat[2][col]) {
      multiplicador = 2;
    }
  somaPontosColuna = somaPontosColuna * multiplicador;
  return somaPontosColuna;
}

function calculaPontos(matriz) {
  let somaPontos = 0;
  somaPontos = calculaPontosColuna(matriz, 0) + calculaPontosColuna(matriz, 1) + calculaPontosColuna(matriz, 2);
  return somaPontos;
}

function verificaFimDeJogo() {
  let tabuleiroCompleto = false;
  let casasVaziasJogador = 0, casasVaziasComputador = 0;
  for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
      if(jogador[i][j] === " ") {
        casasVaziasJogador++;
      }
    }
  }
  for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
      if(computador[i][j] === " ") {
        casasVaziasComputador++;
      }
    }
  }
  if( (casasVaziasJogador === 0) || (casasVaziasComputador === 0) ) {
    tabuleiroCompleto = true;
  }
  return tabuleiroCompleto;
}

export { getJogador, getComputador, getPontosJogador, getPontosComputador, jogaDado, calculaPontosColuna, calculaPontos, verificaFimDeJogo };
