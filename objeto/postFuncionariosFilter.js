//Leia os dados de 6 funcionários digitados pelo usuário.nome (string),cargo (string),salario (número),tempoServico (número de anos na empresa)
//Exibir todos os funcionários com salário acima de R$ 5.000 e mais de 5 anos de serviço.
//Exibir o nome do funcionário com o maior salário.
//Calcular e exibir a média salarial da empresa.
//Contar e exibir quantos funcionários são gerentes (cargo igual a "gerente", ignorando maiúsculas/minúsculas).

let funcionarios = [];

for (let i = 0; i < 6; i++) {
    console.log(` Cadastro de funcionário ${i + 1} `);
    
    let nome = prompt(`Digite o nome do funcionário ${i + 1}:`);
    let cargo = prompt(`Digite o cargo:`).toUpperCase(); 
    let salario = Number(prompt(`Digite o salário:`));
    let tempoServico = Number(prompt(`Digite a quantidade de anos na empresa do funcionário:`));

    funcionarios.push({
        nome: nome,
        cargo: cargo,
        salario: salario,
        tempoServico: tempoServico
    });
}

console.log("Recebem mais de 5.000 e estão a mais de 5 anos:");
for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].salario > 5000 && funcionarios[i].tempoServico > 5) {
        console.log(funcionarios[i].nome);
    }
}

console.log(`Funcionário com maior salário:`);
let maiorSalario = funcionarios[0];
for (let i = 1; i < funcionarios.length; i++) {
    if (funcionarios[i].salario > maiorSalario.salario) {
        maiorSalario = funcionarios[i]; 
    }
}
console.log(maiorSalario.nome);

console.log(`Média salarial:`);
let somaSalario = 0;
for (let i = 0; i < funcionarios.length; i++) {
    somaSalario += funcionarios[i].salario;
}
let mediaSalarial = somaSalario / funcionarios.length;
console.log(mediaSalarial.toFixed(2));

let contGerentes = 0;
for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].cargo === "GERENTE") { 
        contGerentes++;
    }
}
console.log(`Na empresa temos ${contGerentes} gerentes`);
