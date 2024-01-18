const input = require("prompt-sync")({sigint: true});

const preguntainicio = input("¿ Que quieres ser O o X ? ==> ")
console.log("Has elegido ==> " + preguntainicio)

let casillas = [1,2,3,
                4,5,6,
                7,8,9]

console.log("La casillas posibles son: " + casillas);

