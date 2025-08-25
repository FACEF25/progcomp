//Leia os dados de uma matriz 4x7, representando o valor das vendas (em R$)
// realizadas por 4 vendedores ao longo de 7 dias da semana (1 linha por vendedor, 1 coluna por dia).
//Os valores devem ser inseridos usando prompt().
//Calcular e exibir o total vendido por cada vendedor (por linha).
//Calcular e exibir o total vendido por dia da semana (por coluna).
//Exibir o maior valor individual de venda e sua posição na matriz (linha e coluna).
//Exibir a média geral das vendas da semana.
let matriz = [];
let nomeVendedor = [];
let somaTotal = 0;
let maiorValor = 0;
let linhaMaior = 0;
let colunaMaior = 0;


for (let i = 0; i < 4; i++) {
  nomeVendedor[i] = prompt(`Digite o nome do vendedor: `);
    
}

for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 7; j++) {
    matriz[i][j] = parseInt(Math.random() * 100)
  }
}
 console.log(matriz)
  
for (let i = 0; i < 4; i++) {
  let totalLinha = 0;
  for (let j = 0; j < 7; j++) {
    totalLinha += matriz[i][j];
  }
  console.log(`Total do vendedor ${nomeVendedor[i]}: R$ ${totalLinha.toFixed(2)}`);
}


for (let j = 0; j < 7; j++) {
  let totalDia = 0;
  for (let i = 0; i < 4; i++) {
    let valor = matriz[i][j];
    totalDia += valor;
    somaTotal += valor;
    if (valor > maiorValor) {
      maiorValor = valor;
      linhaMaior = i;
      colunaMaior = j;
    }
  }
  console.log(`Total do dia ${j + 1}: R$ ${totalDia.toFixed(2)}`);
}

console.log(`Maior valor: R$ ${maiorValor.toFixed(2)} (linha ${linhaMaior + 1}, coluna ${colunaMaior + 1})`);
let mediaSemanal = somaTotal / (4 * 7);
console.log(`Média geral da semana: R$ ${mediaSemanal.toFixed(2)}`);
