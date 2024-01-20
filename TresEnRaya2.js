const scanner = require("prompt-sync")({ sigint: true })
let posicion

let victoria = false

if ((Number(posicion)) > 9) {
    console.log('benbetuni')
} else {
    console.log('quins collons dius')
}


let casillas1 = ['[ 1 ]','[ 2 ]','[ 3 ]']
let casillas2 = ['[ 4 ]','[ 5 ]','[ 6 ]']
let casillas3 = ['[ 7 ]','[ 8 ]','[ 9 ]']



 console.log(casillas1)
 console.log(casillas2)
 console.log(casillas3)


 console.log('-------------------------',
             '-------------------------')





    
 while (posicion = true) {
    


 posicion = scanner('en que posicion ponemos la X:')


 if (posicion == 1) {
     casillas1.splice(0, 1, '[ X ]')
     console.log(casillas1)
     console.log(casillas2)
     console.log(casillas3)
 } 


 if (posicion == 2) {
     casillas1.splice(1, 1, '[ X ]')
     console.log(casillas1)
     console.log(casillas2)
     console.log(casillas3)
 }


 if (posicion == 3) {
     casillas1.splice(2, 1, '[ X ]')
     console.log(casillas1)
     console.log(casillas2)
     console.log(casillas3)
 }


//----------------------

 if (posicion == 4) {
     casillas2.splice(0, 1, '[ X ]')
     console.log(casillas1)
     console.log(casillas2)
     console.log(casillas3)
 } 


 if (posicion == 5) {
     casillas2.splice(1, 1, '[ X ]')
     console.log(casillas1)
     console.log(casillas2)
     console.log(casillas3)
 }


 if (posicion == 6) {
     casillas2.splice(2, 1, '[ X ]')
     console.log(casillas1)
     console.log(casillas2)
     console.log(casillas3)
 }


 //----------------------

 if (posicion == 7) {
     casillas3.splice(0, 1, '[ X ]')
     console.log(casillas1)
     console.log(casillas2)
     console.log(casillas3)
 } 


 if (posicion == 8) {
     casillas3.splice(1, 1, '[ X ]')
     console.log(casillas1)
     console.log(casillas2)
     console.log(casillas3)
 }


 if (posicion == 9) {
     casillas3.splice(2, 1, '[ X ]')
     console.log(casillas1)
     console.log(casillas2)
     console.log(casillas3)
 }



     posicion = scanner('en que posicion ponemos la O:')
     if (posicion == 1) {
         casillas1.splice(0, 1, '[ O ]')
         console.log(casillas1)
         console.log(casillas2)
         console.log(casillas3)
     } 
    
    
     if (posicion == 2) {
         casillas1.splice(1, 1, '[ O ]')
         console.log(casillas1)
         console.log(casillas2)
         console.log(casillas3)
     }
    
    
     if (posicion == 3) {
         casillas1.splice(2, 1, '[ O ]')
         console.log(casillas1)
         console.log(casillas2)
         console.log(casillas3)
     }
    
    
     //----------------------
  
     if (posicion == 4) {
         casillas2.splice(0, 1, '[ O ]')
         console.log(casillas1)
         console.log(casillas2)
         console.log(casillas3)
     } 
    
    
     if (posicion == 5) {
         casillas2.splice(1, 1, '[ O ]')
         console.log(casillas1)
         console.log(casillas2)
         console.log(casillas3)
     }
    
    
     if (posicion == 6) {
         casillas2.splice(2, 1, '[ O ]')
         console.log(casillas1)
         console.log(casillas2)
         console.log(casillas3)
     }
    
    
     //----------------------
    
     if (posicion == 7) {
         casillas3.splice(0, 1, '[ O ]')
         console.log(casillas1)
         console.log(casillas2)
         console.log(casillas3)
     } 
    
    
     if (posicion == 8) {
         casillas3.splice(1, 1, '[ O ]')
         console.log(casillas1)
         console.log(casillas2)
         console.log(casillas3)
     }
    
    
     if (posicion == 9) {
         casillas3.splice(2, 1, '[ O ]')
         console.log(casillas1)
         console.log(casillas2)
         console.log(casillas3)
     }
    



 } ;