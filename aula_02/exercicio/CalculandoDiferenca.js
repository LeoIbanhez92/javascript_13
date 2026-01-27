const leia = require("readline-sync");

let n1 = leia.questionFloat("Número 1: ");
let n2 = leia.questionFloat("Número 2: ");
let n3 = leia.questionFloat("Número 3: ");
let n4 = leia.questionFloat("Número 4: ");

if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0) {
    console.log("Erro: valores inválidos!");
} else {
    let diferenca = (n1 * n2) - (n3 * n4);
    console.log(`Diferença: ${diferenca}`);
}