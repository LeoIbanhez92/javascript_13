const leia = require("readline-sync");

let salario = leia.questionFloat("Digite o seu salário: ");
let abono = leia.questionFloat("Digite o seu abono");

let novoSalario;

if(salario < 0 || abono <0 ){
    console.log(`Erro: valores inválidos! Salário: ${salario}, Abono: ${abono}`);
} else {
    novoSalario = salario + abono;
    console.log(`Seu novo salário: ${novoSalario}`);
}