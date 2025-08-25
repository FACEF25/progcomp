//matriz 3x3/ a soma dos elementos, aa quantidade de numeros pares e os valores da diagonal secundaria 

let matriz = [];
let soma = 0;
let pares = 0;
let diagonalSecundaria = [];

for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseInt(Math.random() * 10);
        soma += matriz[i][j];
        
        if (matriz[i][j] % 2 === 0) {
            pares++;
        }
    }
}

for (let i = 0; i < matriz.length ; i++) {
    diagonalSecundaria.push(matriz[i][matriz.length -1 -  i]);
}

console.table(matriz);
console.log("Soma de todos os elementos:", soma);
console.log("Quantidade de números pares:", pares);
console.log("Valores da diagonal secundária:", diagonalSecundaria.join(", "));
