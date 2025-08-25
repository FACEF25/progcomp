let cliente =[
 {
    codigo: 1, 
    nome: "Victor Santucci", 
    idade:19, 
    hobbie: "Assistir filmes", 
},
{
    codigo: 2, 
    nome: "Isadora", 
    idade:18, 
    hobbie: "Correr e praticar crossfit", 
},
{
    codigo: 3, 
    nome: "Maria Antonia", 
    idade:20, 
    hobbie: "Ler e estudar teologia", 
}
];


for (let i = 0; i < cliente.length; i++) {
    console.log(`Nome do cliente:${cliente[i].nome}`);
}

console.log(`Nome: ${cliente[2].nome}`);
//console.log("Idade", cliente.idade);
