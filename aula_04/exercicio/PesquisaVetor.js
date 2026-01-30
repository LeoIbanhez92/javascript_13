const leia = require("readline-sync");

let numero = [2, 5, 10, 3, 15, 40, 55, 34, 59, 88];

let numeroDoUsuario = leia.questionInt("Digite o numero: ")
let posicao;
let encontrado = false;

for (let contador = 0; contador < numero.length; contador++) {

    if (numero[contador] === numeroDoUsuario) {
        posicao = contador
        encontrado = true;
    }
}

if (encontrado === true) {
    console.log(`O número ${numeroDoUsuario} está localizado na posição ${posicao}`);
} else {
    console.log(`O número ${numeroDoUsuario} não foi encontrado!`);
}

