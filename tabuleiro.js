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

let iJogador = 0, jJogador = 0, kJogador = 0;

function escreveNaTabelaJogador(numDado, coluna) {
  if(coluna === 0) {
    jogador[iJogador][coluna] = numDado;
    iJogador++;
  }
  if(coluna === 1) {
    jogador[jJogador][coluna] = numDado;
    jJogador++;
  }
  if(coluna === 2) {
    jogador[kJogador][coluna] = numDado;
    kJogador++;
  }
}

let iComputador = 0, jComputador = 0, kComputador = 0;

function escreveNaTabelaComputador(numDado, coluna) {
  if(coluna === 0) {
    computador[iComputador][coluna] = numDado;
    iComputador++;
  }
  if(coluna === 1) {
    computador[jComputador][coluna] = numDado;
    jComputador++;
  }
  if(coluna === 2) {
    computador[kComputador][coluna] = numDado;
    kComputador++;
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
  if(contCounter === 1) {
    iComputador = iComputador - 1;
  }
  if(contCounter === 2) {
    iComputador = iComputador - 2;
  }
  if(contCounter === 3) {
    iComputador = iComputador - 3;
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
  if(contCounter === 1) {
    iJogador = iJogador - 1;
  }
  if(contCounter === 2) {
    iJogador = iJogador - 2;
  }
  if(contCounter === 3) {
    iJogador = iJogador - 3;
  }  
}

export { getJogador, getComputador, getPontosJogador, getPontosComputador, aleatorizaNum, 
  jogaDado, atualizaPontos, escreveNaTabelaJogador, escreveNaTabelaComputador, verificaFimDeJogo,
   verificaCounterJogador, verificaCounterComputador };
