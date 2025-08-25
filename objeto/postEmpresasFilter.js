//Leia os dados de 7 projetos desenvolvidos por diferentes empresas de tecnologia.nomeProjeto (string),empresa (string),duracaoMeses (número inteiro)
//orcamento (valor em reais, número)
//Exibir todos os projetos com duração superior a 12 meses e orçamento acima de R$ 1.000.000,00.
//Exibir o nome do projeto com o maior orçamento.
//Calcular e exibir a média de duração dos projetos.
//Informar quantos projetos foram realizados pela empresa "InovaTech", independente da forma como foi digitado o nome.
//Calcular o total gasto (soma de orçamento) apenas com os projetos que têm menos de 6 meses de duração.

let projetosEmpresas = [];

for (let i = 0; i < 7; i++) {
    console.log(`Cadastro do projeto ${i + 1}`);
    
    let nomeProjeto = prompt(`Digite o nome do projeto ${i + 1}:`);
    let empresa = prompt(`Digite a empresa ${i + 1}:`).toUpperCase();
    let duracaoMeses = Number(prompt(`Digite a duração em meses:`));
    let orcamento = Number(prompt(`Digite o orçamento em reais:`));

    projetosEmpresas.push({
        nomeProjeto,
        empresa,
        duracaoMeses,
        orcamento
    });
}

console.log("Projetos com duração > 12 meses e orçamento > R$ 1.000.000:");
for (let projeto of projetosEmpresas) {
    if (projeto.duracaoMeses > 12 && projeto.orcamento > 1000000) {
        console.log(projeto.nomeProjeto);
    }
}

let maiorOrcamento = projetosEmpresas[0];
for (let i = 1; i < projetosEmpresas.length; i++) {
    if (projetosEmpresas[i].orcamento > maiorOrcamento.orcamento) {
        maiorOrcamento = projetosEmpresas[i];
    }
}
console.log(`Projeto com maior orçamento: ${maiorOrcamento.nomeProjeto}`);

let somaMeses = 0;
for (let projeto of projetosEmpresas) {
    somaMeses += projeto.duracaoMeses;
}
let mediaDuracao = somaMeses / projetosEmpresas.length;
console.log(`Média de duração: ${mediaDuracao.toFixed(2)} meses`);

let contInovaTech = 0;
for (let projeto of projetosEmpresas) {
    if (projeto.empresa === "INOVATECH") {
        contInovaTech++;
    }
}
console.log(`Projetos da INOVATECH: ${contInovaTech}`);

let totalGasto = 0;
for (let projeto of projetosEmpresas) {
    if (projeto.duracaoMeses < 6) {
        totalGasto += projeto.orcamento;
    }
}
console.log(`Total gasto com projetos < 6 meses: R$ ${totalGasto.toFixed(2)}`);
