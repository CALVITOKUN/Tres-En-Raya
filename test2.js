const input = require("prompt-sync")();

let victoria = false;
let derrota = false;

let a = '1';
let b = '2';
let c = '3';
let d = '4';
let e = '5';
let f = '6';
let g = '7';
let h = '8';
let i = '9';

function mostrarTablero() {
  console.log(` ${a} | ${b} | ${c}`);
  console.log('-----------');
  console.log(` ${d} | ${e} | ${f}`);
  console.log('-----------');
  console.log(` ${g} | ${h} | ${i}`);
}

function verificarVictoria() {
  // Función para verificar victoria de 'X' o 'O'
  const combinacionesGanadoras = [
    [a, b, c], [d, e, f], [g, h, i], // Filas
    [a, d, g], [b, e, h], [c, f, i], // Columnas
    [a, e, i], [c, e, g]              // Diagonales
  ];

  for (const combinacion of combinacionesGanadoras) {
    if (combinacion.every(casilla => casilla === 'X')) {
      victoria = true;
      console.log('¡La X ha ganado! ¡Enhorabuena!');
      return;
    } else if (combinacion.every(casilla => casilla === 'O')) {
      victoria = true;
      console.log('¡La O ha ganado! ¡Enhorabuena!');
      return;
    }
  }
}

function jugarTurno(simbolo) {
  let casilla;

  do {
    mostrarTablero();
    casilla = input(`En qué casilla quieres colocar ${simbolo} ==> `);
  } while (!esCasillaValida(casilla));

  asignarValorCasilla(casilla, simbolo);
}

function esCasillaValida(casilla) {
  return (casilla >= '1' && casilla <= '9' && eval(casilla) !== 'X' && eval(casilla) !== 'O');
}

function asignarValorCasilla(casilla, simbolo) {
  eval(`${casilla} = '${simbolo}'`);
}

while (!victoria && !derrota) {
  jugarTurno('X');
  verificarVictoria();

  if (victoria) {
    break;
  }

  jugarTurno('O');
  verificarVictoria();
}

mostrarTablero();