const leia = require("readline-sync");

console.log("============================================================");
console.log("                     Reajuste Salarial                      ");
console.log("============================================================");
console.log("1 -            Gerente             10%                      ");
console.log("2 -            Vendedor            7%                       ");
console.log("3 -            Supervisor          9%                       ");
console.log("4 -            Motorista           6%                       ");
console.log("5 -            Estoquista          5%                       ");
console.log("6 -            Técnico de TI       8%                       ");
console.log("============================================================");
console.log("                                                            ");

let operacao = leia.questionInt("Digite a operacao segundo o seu cargo: ");
let salario;
let salarioComReajuste;


switch(operacao) {
    case 1:
        salario = leia.questionFloat("Digite o seu salario: ");
        console.log("Cargo: Gerente");
        salarioComReajuste = salario * (1 + 0.10);
        console.log(`Salario R$ ${salarioComReajuste.toFixed(2)}`);
        break;
    case 2:
        salario = leia.questionFloat("Digite o seu salario: ");
        console.log("Cargo: Vendedor");
        salarioComReajuste = salario * (1 + 0.07);
        console.log(`Salario R$ ${salarioComReajuste.toFixed(2)}`);

        break;
        
    case 3:
        salario = leia.questionFloat("Digite o seu salario: ");
        console.log("Cargo: Supervisor");
        salarioComReajuste = salario * (1 + 0.09);
        console.log(`Salario R$ ${salarioComReajuste.toFixed(2)}`);
        
        break;
    case 4:
        salario = leia.questionFloat("Digite o seu salario: ");
        console.log("Cargo: Motorista");
        salarioComReajuste = salario * (1 + 0.06);
        console.log(`Salario R$ ${salarioComReajuste.toFixed(2)}`);
        
        break;
    case 5:
        salario = leia.questionFloat("Digite o seu salario: ");
        console.log("Cargo: Estoquista");
        salarioComReajuste = salario * (1 + 0.05);
        console.log(`Salario R$ ${salarioComReajuste.toFixed(2)}`);
        
        break;
    case 6:
        salario = leia.questionFloat("Digite o seu salario: ");
        console.log("Cargo: Tecnico de TI");
        salarioComReajuste = salario * (1 + 0.08);
        console.log(`Salario R$ ${salarioComReajuste.toFixed(2)}`);
        
        break;
        default:
            console.log("ERRO: Operacao Invalida!");
        break;
}