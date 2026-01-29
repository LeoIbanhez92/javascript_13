const leia = require("readline-sync");

/*let matriz = new Array(2);


//Adicona as linhas da Matriz
for(let indice = 0; indice < matriz.length; indice++){
    matriz[indice] = Array(3);

}

//Entrada de dados na matriz via teclado
for(let linha = 0; linha < matriz.length; linha ++){
    for(let coluna = 0; coluna < matriz[linha].length; coluna ++){
        matriz[linha][coluna] = leia.questionInt(`matriz[${linha}][${coluna}] = `);
    }
}*/
//cria um novo array com N posições. Para cada posição, ele executa a funcao fornecida para determinar o valor que será guardado ali
let matriz = Array.from({ length: 2 }, () =>   
        Array.from({ length: 3 }, 
            () => leia.questionInt("Digite um numero: ")) );

console.table(matriz);