const leia = require("readline-sync");

let numero;
let par = 0;
let impar = 0;


for (let contador = 1; contador <= 10 ; contador++) {
    numero = leia.questionInt(`Digite o numero ${contador}: `);

    if (numero % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}
console.log(`Total de numeros Pares: ${par}`);
console.log(`Total de numeros Ímpares: ${impar}`);
