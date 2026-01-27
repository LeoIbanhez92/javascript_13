const leia = require("readline-sync");

let salarioBruto = leia.questionFloat("Digite o seu salário bruto: ");
let adicionalNoturno = leia.questionFloat("Digite o seu adicional noturno: ");
let horasExtras = leia.questionFloat("Digite suas horas extras: ");
let desconto = leia.questionFloat("Digite o seu desconto: ");
let salarioLiquido;

if (salarioBruto < 0 || adicionalNoturno < 0 || horasExtras < 0 || desconto < 0){
    console.log(`\nErro: valores inválidos!: 
        Salário Bruto: ${salarioBruto} 
        Adicional Noturno: ${adicionalNoturno} 
        Horas Extras: ${horasExtras} 
        Descontos: ${desconto}`);
} else {
    salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - desconto;
    console.log(`Salário Líquido: ${salarioLiquido}`);
}