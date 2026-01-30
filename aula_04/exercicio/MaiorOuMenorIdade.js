const leia = require("readline-sync");

let menor21 = 0;
let maior50 = 0;

let idade = leia.questionInt("Digite sua idade: (Para sair digite uma idade negativa):");

while(idade > 0){

    if(idade  < 21 ){
        menor21++;
    }else if(idade > 50 ) {
        maior50++;
    }

    idade = leia.questionInt("Digite sua idade (Para sair digite uma idade negativa): ");
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menor21}`);
console.log(`\nTotal de pessoas maiores de 50 anos: ${maior50}`);