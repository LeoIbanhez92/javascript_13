const leia = require("readline-sync");

let numeros = [10 , 25 , 5 , 45 , 85, 95];

let cores = Array(5);

for(let indice = 0;indice <5; indice++){
    console.log(`numeros[${indice}] = ${numeros[indice]}`);
}

console.table(numeros);

console.log(`Tamanha do verto numero é: ${numeros.length}`);

for(let indice = 0;indice < cores.length; indice++){
    cores[indice] = leia.question("Digito o nome de uma cor: ");
}
console.table(cores);

console.table(numeros.sort((a , b) => b - a));

console.table(cores.sort());


console.log("Qual posição do elemento 5 no vetor numeros? ", numeros.indexOf(5));