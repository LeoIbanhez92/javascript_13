const leia = require("readline-sync");

let numero;
let somar = 0;
do {

    numero = leia.questionInt("[Sequiser sair digite o 0 (zero)] Digite o numero: ");

    if (numero > 0) {
        somar += numero;
    }

} while (numero !== 0)

console.log(`\nA soma dos números positivos é: ${somar}`);