
const leia = require("readline-sync");

let mensagem = leia.question("Digite uma mensagem: ");
//mensagem = "Batatinha!"

console.log(mensagem);

let n1 = leia.questionInt("Digite o primeiro número ");
let n2 = leia.questionInt("Digite o primeiro número ");

let soma = n1 + n2;

console.log(soma);
