const leia = require("readline-sync");

console.log("Informe 3 numeros: ");

let numeroA = leia.questionInt("Digite o numero A: ");
let numeroB = leia.questionInt("Digite o numero B: ");
let numeroC = leia.questionInt("Digite o numero C: ");

let soma = numeroA + numeroB;

if (soma > numeroC) {
    console.log("A soma de A + B é maior que C");

} else if (soma < numeroC) {
    console.log("A soma de A + B é menor que C");
} else {
    console.log("A soma de A + B é igual a C");
}

