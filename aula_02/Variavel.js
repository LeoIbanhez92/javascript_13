let nome;
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.90;
const bonus = 0.05;

console.log("O tipo da variável nome é: ", typeof (nome));

if (salarioBruto > 1000) {
    let mensagem = "Salario > 1000";
    console.log(mensagem);
}

//Codigo para calcular o valor baseado no seu pais.

console.log("Salário liquído: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioBruto + (bonus * salarioBruto))
);