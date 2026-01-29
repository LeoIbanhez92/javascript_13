const leia = require("readline-sync");

const nomeDoDoador = leia.question("Digite o nome do doador: ");
const idade = leia.questionInt("Digite sua idade: ");
let resposta = leia.question("Essa e a sua primeira doacao? (S / N): ").toLocaleLowerCase();

if(resposta !== "s" && resposta !== "n"){
    console.log("ERRO: Resposta inválida!");
} else {
    let primeiraDoacao = resposta ==="s";

    if (idade < 18 || idade > 69) {
        console.log(`${nomeDoDoador} Não está Apto(a) para doar sangue!`);
    }else if (idade >= 60 && idade <= 69 && primeiraDoacao){
        console.log(`${nomeDoDoador} Não está Apto(a) para doar sangue!`);
    }else {
        console.log(`${nomeDoDoador} está Apto(a) para doar sangue!`);
    }
}
