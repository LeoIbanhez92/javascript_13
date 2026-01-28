const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero inteiro: ");
let tipo = "";
let paridade = "";

if(numero > 0){
    tipo = "positivo"
} else if (numero < 0 ){
    tipo = "negativo";
}

if(numero %2 === 0){
    paridade = "par";
}else{
    paridade = "impar";
}

if (numero === 0) {
    console.log("O numero 0 e par!");
} else {
    console.log(`O numero ${numero} é ${tipo} e ${paridade}!`);
}