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

function aleatorizaNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jogaDado() {
  return aleatorizaNum(1, 6);
}

function calculaPontosColuna(mat, col) {
  let somaPontosColuna = 0, multiplicador = 1;
  for(let i=0; i<3; i++) {
    somaPontosColuna += mat[i][col];
  }
  if(mat[0][col] === mat[1][col] && mat[0][col] === mat[2][col] && mat[0][col] !== " ") {
    multiplicador = 3;
  }
  else if((mat[0][col] === mat[1][col] && mat[0][col] !== " ") || (mat[0][col] === mat[2][col] && mat[0][col] !== " ") || (mat[1][col] === mat[2][col] && mat[1][col] !== " ")) {
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

function atualizaPontos() {
  pontosJogador = calculaPontos(jogador);
  pontosComputador = calculaPontos(computador);
}

function escreveNaTabelaJogador(numDado, linha, coluna) {
  for(let i=0; i<3; i++) {
    if(jogador[i][coluna] === " ") {
      jogador[i][coluna] = numDado;
      break;
    }
  }
}

function escreveNaTabelaComputador(numDado, linha, coluna) {
  for(let i=0; i<3; i++) {
    if(computador[i][coluna] === " ") {
      computador[i][coluna] = numDado;
      break;
    }
  }
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

function verificaCounterJogador(resDado, coluna) {
  let aux = 0, contCounter = 0;
  for(let i=0; i<3; i++) {
    if(resDado === computador[i][coluna]) {
      computador[i][coluna] = " ";
      contCounter++;
    }
  }
  for(let j=0; j<2; j++) {
    if(computador[j][coluna] === " ") {
      aux = computador[j][coluna];
      computador[j][coluna] = computador[j+1][coluna];
      computador[j+1][coluna] = aux;
    }
  }
  for(let j=0; j<2; j++) {
    if(computador[j][coluna] === " ") {
      aux = computador[j][coluna];
      computador[j][coluna] = computador[j+1][coluna];
      computador[j+1][coluna] = aux;
    }
  }
}

function verificaCounterComputador(resDado, coluna) {
  let aux = 0;
  for(let i=0; i<3; i++) {
    if(resDado === jogador[i][coluna]) {
      jogador[i][coluna] = " ";
    }
  }
  for(let j=0; j<2; j++) {
    if(jogador[j][coluna] === " ") {
      aux = jogador[j][coluna];
      jogador[j][coluna] = jogador[j+1][coluna];
      jogador[j+1][coluna] = aux;
    }
  }
  for(let j=0; j<2; j++) {
    if(jogador[j][coluna] === " ") {
      aux = jogador[j][coluna];
      jogador[j][coluna] = jogador[j+1][coluna];
      jogador[j+1][coluna] = aux;
    }
  }
}

function contaCasasVazias(mat, coluna) {
  let contador = 0;
  for(let i=0; i<3; i++) {
    if(matriz[i][coluna] === " ")
      contador++;
  }
  return contador;
}

function verificaVencedor() {
  if(pontosComputador === pontosJogador) {
    return 0;
  }
  else if(pontosComputador > pontosJogador) {
    return 1;
  }
  else if(pontosJogador > pontosComputador) {
    return 2;
  }
}

export { getJogador, getComputador, getPontosJogador, getPontosComputador, jogaDado, 
  atualizaPontos, escreveNaTabelaJogador, escreveNaTabelaComputador, verificaFimDeJogo,
   verificaCounterJogador, verificaCounterComputador, contaCasasVazias, verificaVencedor };
