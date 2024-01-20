const input = require("prompt-sync")({ sigint: true });

//HERRAMIENTAS DE COLORES
let rojo = '\x1b[31m%s\x1b[0m';
// amarillo: '\x1b[33m%s\x1b[0m',
let verde = '\x1b[32m%s\x1b[0m';
let victoria = false;
let derrota = false;

// simbolos ✖  ∅
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

    console.log('VAS A JUGAR COMO X');

function mostrarTablero(color) {
  console.log('-----------');
  console.log(` ${a} | ${b} | ${c}`);
  console.log('-----------');
  console.log(` ${d} | ${e} | ${f}`);
  console.log('-----------');
  console.log(` ${g} | ${h} | ${i}`);
  console.log('-----------');

 
}



while (victoria !== true) {
  mostrarTablero();
  
  const preguntaX = input('En qué casilla quieres la X ==> ');
  console.log('Has seleccionado ' + preguntaX);
  mostrarTablero();
  

  if (preguntaX === 'a' && a !== '∅' ) {
    a = '✖'
    comprobarvictoria()
  } else if (preguntaX === 'b' && b !== '∅') {
    b = '✖'
    comprobarvictoria()
  } else if (preguntaX === 'c' && c !== '∅') {
    c = '✖';
    comprobarvictoria()
  } else if (preguntaX === 'd' && d !== '∅') {
    d = '✖';
    comprobarvictoria()
  } else if (preguntaX === 'e' && e !== '∅') {
    e = '✖';
    comprobarvictoria()
  } else if (preguntaX === 'f' && f !== '∅') {
    f = '✖';
    comprobarvictoria()
  } else if (preguntaX === 'g' && g !== '∅') {
    g = '✖';
    comprobarvictoria()
  } else if (preguntaX === 'h' && h !== '∅') {
    h = '✖';
    comprobarvictoria()
  } else if (preguntaX === 'i' && i !== '∅') {
    i = '✖';
    comprobarvictoria()
  }else{
    console.log('HAY NO PUEDES HAS PERDIDO EL TURNO')
    mostrarTablero()
  }
  mostrarTablero()
  
  
  
  const preguntaO = input('En qué casilla quieres la O ==> ');
  console.log('DEBUG: Has seleccionado ' + preguntaO);
  mostrarTablero();

  if (preguntaO === 'a' && a !== '✖') {
    a = '∅';
    comprobarvictoria()
  } else if (preguntaO === 'b' && b !== '✖') {
    b = '∅';
    comprobarvictoria()
  } else if (preguntaO === 'c' && c !== '✖') {
    c = '∅';
    comprobarvictoria()
  } else if (preguntaO === 'd' && d !== '✖') {
    d = '∅';
    comprobarvictoria()
  } else if (preguntaO === 'e' && e !== '✖') {
    e = '∅';
    comprobarvictoria()
  } else if (preguntaO === 'f' && f !== '✖') {
    f = '∅';
    comprobarvictoria()
  } else if (preguntaO === 'g' && g !== '✖') {
    g = '∅';
    comprobarvictoria()
  } else if (preguntaO === 'h' && h !== '✖') {
    h = '∅';
    comprobarvictoria()
  } else if (preguntaO === 'i' && i !== '✖') {
    i = '∅';
    comprobarvictoria()
  }else{
    console.log('HAY NO PUEDES HAS PERDIDO EL TURNO')
  }
  mostrarTablero()

  function comprobarvictoria(){
    if (a === '✖' && b === '✖' && c === '✖' ||
      a === '✖' && d === '✖' && g === '✖' ||
      a === '✖' && e === '✖' && i === '✖' ||
      b === '✖' && e === '✖' && h === '✖' ||
      c === '✖' && e === '✖' && g === '✖' ||
      c === '✖' && f === '✖' && i === '✖' ||
      d === '✖' && e === '✖' && f === '✖' ||
      g === '✖' && h === '✖' && i === '✖' 
      )        {
    victoria = true;
    mostrarTablero()
    console.log('La X ha ganado, enhorabuena ') 
    
  

  } // victoria o
  else if (a === '∅' && b === '∅' && c === '∅' ||
           a === '∅' && d === '∅' && g === '∅' ||
           a === '∅' && e === '∅' && i === '∅' ||
           b === '∅' && e === '∅' && h === '∅' ||
           c === '∅' && e === '∅' && g === '∅' ||
           c === '∅' && f === '∅' && i === '∅' ||
           d === '∅' && e === '∅' && f === '∅' ||
           g === '∅' && h === '∅' && i === '∅' 
           )   {
            
      victoria = true;
      mostrarTablero()
      console.log('La O ha ganado, enhorabuena ')
      
    } 
      
  else{
    victoria = false
  }
 }
}

  
//   if (a === 'x' || a=== 'o' && b ==='x' || b==='o' && c === 'x'|| c==='o' && d === 'x' || 
//   d==='o' && e === 'x'|| e==='o' && f === 'x'|| f==='o' && g === 'x'|| g==='o' && h === 'x'||
//   h==='o' && i === 'x'|| i==='o'){
//     console.log('HABEIS ECHO EMPATE');
//     break
//   }


}else{
    console.log('no entiendo SUDO SU ==> solo vale (si)/(no)');
    
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
