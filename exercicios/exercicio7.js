const readline = require('readline-sync');

// Vetor com 10 números inteiros, não ordenados e não repetidos
let numeros = [23, 5, 78, 12, 34, 56, 91, 3, 67, 44];

let busca;

do {
    // Solicita ao usuário que digite um número para pesquisar
    busca = parseInt(readline.question("Digite um numero para buscar: "), 10);

    if (busca === 0) {
        console.log("Encerrando o programa...");
        break; // Encerra o laço se o usuário digitar 0
    }

    // Inicializa a posição como -1 (não encontrado)
    let posicao = -1;

    // Percorre o vetor para encontrar o número
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === busca) {
            posicao = i;
            break;
        }
    }

    // Exibe resultado
    if (posicao !== -1) {
        console.log(`O numero ${busca} foi encontrado na posição ${posicao} do vetor.`);
    } else {
        console.log("Nao foi encontrado!");
    }

} while (busca !== 0);
