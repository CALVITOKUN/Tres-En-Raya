let victoria = false
let derrota = false 







while(victoria !== true){
    let casillas = ['[1]','[2]','[3]',
                    '[4]','[5]','[6]',
                    '[7]','[8]','[9]',];
    console.log(casillas);
    const preguntaX = ('En que casilla quieres la X ==> ')
    console.log = ('DEBUG: Has seleccionado ' + preguntaX);

    if (preguntaX === '[1]'){
         array.casillas === preguntaX;
         console.log = (casillas)
    }  
}


let recorrercasillas =  ['[]','[]','[]',
                         '[]','[]','[]',
                         '[]','[]','[]',];
recorrercasillas.forEach(function(recorrercasillas)
{
    if (recorrercasillas === 'O' || recorrercasillas === 'X') {
        console.log('casilla ocupada')
    }else if (recorrercasillas == '[]'){
        console.log('casilla libre')
    }
    console.log(recorrercasillas)
}
);
