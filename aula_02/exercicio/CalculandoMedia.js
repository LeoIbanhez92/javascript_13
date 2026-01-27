const leia = require("readline-sync");

let n1 = leia.questionFloat("Nota 1: ");
let n2 = leia.questionFloat("Nota 2: ");
let n3 = leia.questionFloat("Nota 3: ");
let n4 = leia.questionFloat("Nota 4: ");

if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0){
    console.log("Erro: valores inválidos!");
}else {
    let mediaFinal = (n1 + n2 + n3 + n4) / 4;
console.log(mediaFinal);
}

