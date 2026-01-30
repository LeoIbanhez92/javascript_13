const leia = require("readline-sync");

let alunosNotas = Array.from({ length: 10 }, () =>
    Array.from({ length: 4 },
        () => leia.questionFloat("Digite um numero: ")));

let medias = [];

for (let linha = 0; linha < alunosNotas.length; linha++) {
    let somaDeNotas = 0;
    for (let coluna = 0; coluna < alunosNotas[linha].length; coluna++) {

        let nota = alunosNotas[linha][coluna];

        if (nota >= 0 && nota <= 10) {
            somaDeNotas += nota;

        } else {
            console.log("ERRO:Notas inválida! Será ignorada na média");
        }
    }

    let calcularmedias = somaDeNotas / 4;

    medias.push(calcularmedias);

}

for (let indiceAluno = 0; indiceAluno < medias.length; indiceAluno++) {
    process.stdout.write(medias[indiceAluno].toFixed(1) + "  ");
}