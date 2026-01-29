const leia = require("readline-sync");

console.log("============================================================");
console.log("                       LeonardoBanks                        ");
console.log("============================================================");
console.log("                     Menu de Operações                      ");
console.log("============================================================");
console.log("1 -              Saldo                                      ");
console.log("2 -              Saque                                      ");
console.log("3 -              Depósito                                   ");
console.log("============================================================");
console.log("                                                            ");

let saldo = 1000.00;
let operacao = leia.questionInt("Digite o numero da operacao desejada: ");
let saque, deposito;

switch (operacao) {
    case 1:
        console.log("\nOperação - Saldo\n");
        console.log("Saldo: ",
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(saldo)
        );

        break;

    case 2:
        saque = leia.questionFloat("Digite o valor do Saque:");
        console.log("\nOperação - Saque");
        if (saque > saldo) {
            console.log(`Saldo insuficiente!`);
            console.log("Saldo: ",
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(saldo)
            );
        } else {
            console.log("\nSaque Realizado!\n");
            console.log("Novo Saldo: ",
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(saldo -= saque)
            );
        }

        break;

    case 3:
        deposito = leia.questionFloat("\nDigite o valor do Deposito: ");

        if (deposito <= 0) {
            console.log("\nERRO: Operação inválida!\n");
        } else {
            console.log("\nNovo Saldo: ",
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(saldo += deposito)
            );
        }

        break;

    default:
        console.log("ERRO: Operação Inválida!");
        break;
}
