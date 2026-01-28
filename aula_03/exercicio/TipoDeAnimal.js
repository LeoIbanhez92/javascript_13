const leia = require("readline-sync");

let tipoAnimal = leia.question("Digite o tipo de animal (vertebrado / invertebrado): ").toLowerCase();

let classeAnimal;
let tipoDeAlimentacao;

if (tipoAnimal === "vertebrado") {
    classeAnimal = leia.question("Digite a classe do animal (ave / mamifero): ").toLowerCase();

    if (classeAnimal === "ave") {
        tipoDeAlimentacao = leia.question("Digite o tipo de alimentacao (carnivoro / onivoro): ").toLowerCase();

        if (tipoDeAlimentacao === "carnivoro") {
            console.log("Aguia.");
        } else if (tipoDeAlimentacao === "onivoro") {
            console.log("Pomba.");
        }

    } else if (classeAnimal === "mamifero") {
        tipoDeAlimentacao = leia.question("Digite o tipo de alimentacao (onivoro / herbivoro): ").toLowerCase();

        if (tipoDeAlimentacao === "onivoro") {
            console.log("Homem.");
        } else if (tipoDeAlimentacao === "herbivoro") {
            console.log("Vaca.");
        }
    }

} else if (tipoAnimal === "invertebrado") {
    classeAnimal = leia.question("Digite a classe do animal (inseto / anelideo): ").toLowerCase();

    if (classeAnimal === "inseto") {
        tipoDeAlimentacao = leia.question("Digite o tipo de alimentacao (hematofago / herbivoro): ").toLowerCase();

        if (tipoDeAlimentacao === "hematofago") {
            console.log("Pulga.");
        } else if (tipoDeAlimentacao === "herbivoro") {
            console.log("Lagarta.");
        }

    } else if (classeAnimal === "anelideo") {
        tipoDeAlimentacao = leia.question("Digite o tipo de alimentacao (hematofago / onivoro): ").toLowerCase();

        if (tipoDeAlimentacao === "hematofago") {
            console.log("Sanguessuga.");
        } else if (tipoDeAlimentacao === "onivoro") {
            console.log("Minhoca.");
        }
    }

} else {
    console.log("ERRO: Opcao invalida!");
}