const input = require("prompt-sync")({ sigint: true });

//HERRAMIENTAS DE COLORES
let rojo = '\x1b[31m%s\x1b[0m';
// amarillo: '\x1b[33m%s\x1b[0m',
let verde = '\x1b[32m%s\x1b[0m';
let victoria = false;
let derrota = false;


mostrarreglas()

function mostrarreglas() {
  console.log(' ----------------------------- ');
console.log(' ESTO NO ES TRES EN RAYA COMUN ')
console.log(' ----------------------------- ');
console.log('           LAS REGLAS          ');
console.log(' ----------------------------- ');
console.log(' - Para ganar debes hacer raya ');
console.log('    - Vale Horizontales        ');
console.log('    - Vale Verticales          ');
console.log('    - Vale Diagonales          ');
console.log('-SI TE EQUIVOCAS PIERDES TURNO ');
console.log(' ----------------------------- ');
    
  
}

const reglas = input('Si entiendes las reglas escribe (si) ==> ')
console.log('Vas a jugar como X');
  if (reglas === 'no'){
    mostrarreglas()
  }else if(reglas === 'si'){
    let a = 'a';
    let b = 'b';
    let c = 'c';
    let d = 'd';
    let e = 'e';
    let f = 'f';
    let g = 'g';
    let h = 'h';
    let i = 'i';

function mostrarTablero() {
  console.log('-----------');
  console.log(` ${a} `+ `|` + ` ${b} ` + `|` + ` ${c} `);
  console.log('-----------');
  console.log(` ${d} | ${e} | ${f}`);
  console.log('-----------');
  console.log(` ${g} | ${h} | ${i}`);
  console.log('-----------');
    
  
}



while (victoria !== true) {
  mostrarTablero();

  const preguntaX = input('En qué casilla quieres la X ==> ');
  console.log('DEBUG: Has seleccionado ' + preguntaX);
  mostrarTablero();


  if (preguntaX === 'a' && a !== 'o' ) {
    a = 'x'
    mostrarTablero();
  } else if (preguntaX === 'b' && b !== 'o') {
    b= 'x'
    mostrarTablero();
  } else if (preguntaX === 'c' && c !== 'o') {
    c = 'x';mostrarTablero();
  } else if (preguntaX === 'd' && d !== 'o') {
    d = 'x';mostrarTablero();
  } else if (preguntaX === 'e' && e !== 'o') {
    e = 'x';mostrarTablero();
  } else if (preguntaX === 'f' && f !== 'o') {
    f = 'x';mostrarTablero();
  } else if (preguntaX === 'g' && g !== 'o') {
    g = 'x';mostrarTablero();
  } else if (preguntaX === 'h' && h !== 'o') {
    h = 'x';mostrarTablero();
  } else if (preguntaX === 'i' && i !== 'o') {
    i = 'x';mostrarTablero();
  }else{
    console.log('HAY NO PUEDES HAS PERDIDO EL TURNO')
    mostrarTablero()
  }
  
  
  const preguntaO = input('En qué casilla quieres la O ==> ');
  console.log('DEBUG: Has seleccionado ' + preguntaO);
  mostrarTablero();

  if (preguntaO === 'a' && a !== 'x') {
    a = 'o';mostrarTablero();
  } else if (preguntaO === 'b' && b !== 'x') {
    b = 'o';mostrarTablero();
  } else if (preguntaO === 'c' && c!== 'x') {
    c = 'o';mostrarTablero();
  } else if (preguntaO === 'd' && d !== 'x') {
    d = 'o';mostrarTablero();
  } else if (preguntaO === 'e' && e !== 'x') {
    e = 'o';mostrarTablero();
  } else if (preguntaO === 'f' && f !== 'x') {
    f = 'o';mostrarTablero();
  } else if (preguntaO === 'g' && g !== 'x') {
    g = 'o';mostrarTablero();
  } else if (preguntaO === 'h' && h !== 'x') {
    h = 'o';mostrarTablero();
  } else if (preguntaO === 'i' && i !== 'x') {
    i = 'o';mostrarTablero();
  }else{
    console.log('HAY NO PUEDES HAS PERDIDO EL TURNO')
    mostrarTablero()
  }

  if (a === 'x' && b === 'x' && c === 'x') {
    victoria = true;
    mostrarTablero()
    console.log('La X ha ganado, enhorabuena ')
    
  } else if (a === 'a' && d === 'x' && g === 'x') {
    victoria = true;
    mostrarTablero()
    console.log('La X ha ganado, enhorabuena ');
  } else if (a === 'x' && e === 'x' && i === 'x') {
    victoria = true;
    mostrarTablero()
    console.log('La X ha ganado, enhorabuena ');
  } else if (b === 'x' && e === 'x' && h === 'x') {
    victoria = true;
    mostrarTablero()
    console.log('La X ha ganado, enhorabuena ');
  } else if (c === 'x' && f === 'x' && i === 'x') {
    victoria = true;
    mostrarTablero()
    console.log('La X ha ganado, enhorabuena ');
  } else if (c === 'x' && e === 'x' && g === 'x') {
    victoria = true;
    mostrarTablero()
    console.log('La X ha ganado, enhorabuena ');
  } else if (d === 'x' && e === 'x' && f === 'x') {
    victoria = true;
    mostrarTablero()
    console.log('La X ha ganado, enhorabuena ');
  } else if (g === 'x' && h === 'x' && i === 'x') {
    victoria = true;
    mostrarTablero()
    console.log('La X ha ganado, enhorabuena ');
    

  } // victoria o
  else if (a === 'o' && b === 'o' && c === 'o') {
    victoria = true;
    mostrarTablero()
    console.log('La O ha ganado, enhorabuena ')
  } else if (a === 'o' && d === 'o' && g === 'o') {
    victoria = true;
    mostrarTablero()
    console.log('La O ha ganado, enhorabuena ')
  } else if (a === 'o' && e === 'o' && i === 'o') {
    victoria = true;
    mostrarTablero()
    console.log('La O ha ganado, enhorabuena ')
  } else if (b === 'o' && e === 'o' && h === 'o') {
    victoria = true;
    mostrarTablero()
    console.log('La O ha ganado, enhorabuena ')
  } else if (c === 'o' && f === 'o' && i === 'o') {
    victoria = true;
    mostrarTablero()
    console.log('La O ha ganado, enhorabuena ')
  } else if (c === 'o' && e === 'o' && g === 'o') {
    victoria = true;
    mostrarTablero()
    console.log('La O ha ganado, enhorabuena ')
  } else if (d === 'o' && e === 'o' && f === 'o') {
    victoria = true;
    mostrarTablero()
    console.log('La O ha ganado, enhorabuena ')
  } else if (g === 'o' && h === 'o' && i === 'o') {
    victoria = true;
    mostrarTablero()
    console.log('La O ha ganado, enhorabuena ')
    
  }

  
  
//   if (a === 'x' || a=== 'o' && b ==='x' || b==='o' && c === 'x'|| c==='o' && d === 'x' || 
//   d==='o' && e === 'x'|| e==='o' && f === 'x'|| f==='o' && g === 'x'|| g==='o' && h === 'x'||
//   h==='o' && i === 'x'|| i==='o'){
//     console.log('HABEIS ECHO EMPATE');
//     break
//   }

}
}else{
    console.log('no entiendo SUDO SU ==> solo vale (si)/(no)')
}




 


// let recorrercasillas =  [a,b,c,d,e,f,g,h,i];
// recorrercasillas.forEach(function(recorrercasillas)
// {
//      if (recorrercasillas === 'o' || recorrercasillas === 'x') {
//         console.log('casilla ocupada')
//     }else if (recorrercasillas == 'a' || recorrercasillas == 'b' || recorrercasillas =='c' ||
//      recorrercasillas =='d' || recorrercasillas =='e' || recorrercasillas =='f' ||
//       recorrercasillas =='g' || recorrercasillas =='h' || recorrercasillas =='i')
//     {
//         console.log('casilla libre')
//     }
//     console.log(recorrercasillas)
// }
// );
