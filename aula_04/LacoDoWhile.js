const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero inteiro: ");

let contador = 11;

do{
    console.log(`${numero} x ${contador} = ${contador * numero}`);
    
    contador++;
} while(contador <= 10)