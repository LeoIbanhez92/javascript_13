const leia = require("readline-sync");

console.log("============================================================");
console.log("                    Leonardo Lanches                        ");
console.log("============================================================");
console.log("1 -            Cachorro Quente      R$ 10.00                ");
console.log("2 -            X-Salada             R$ 15.00                ");
console.log("3 -            X-Bacon              R$ 18.00                ");
console.log("4 -            Bauru                R$ 12.00                ");
console.log("5 -            Refrigerante         R$ 8.00                 ");
console.log("6 -            Seuco de Laranja     R$ 13.00                ");
console.log("============================================================");
console.log("                                                            ");

let operacao = leia.questionInt("Digite uma das opcoes: ");
let quantidade;
let valorTotal;

switch(operacao){
    case 1: 
        quantidade = leia.questionInt("Digite a quantidade: ");
        valorTotal = quantidade * 10;
        console.log(`Produto: Cachorro Quente`);
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;

    case 2: 
        quantidade = leia.questionInt("Digite a quantidade: ");
        valorTotal = quantidade * 15;
        console.log("Produto: X-Salada");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;

    case 3: 
        quantidade = leia.questionInt("Digite a quantidade: ");
        valorTotal = quantidade * 18;
        console.log("Produto: X-Bacon");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;

    case 4: 
        quantidade = leia.questionInt("Digite a quantidade: ");
        valorTotal = quantidade * 12;
        console.log("Produto: Bauru");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;

    case 5: 
        quantidade = leia.questionInt("Digite a quantidade: ");
        valorTotal = quantidade * 8;
        console.log("Produto: Refrigerante");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;

    case 6: 
        quantidade = leia.questionInt("Digite a quantidade: ");
        valorTotal = quantidade * 13;
        console.log("Produto: Suco de Laranja");
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;
    default:
        console.log("ERRO: Operacao Invalida!");
    break;
}