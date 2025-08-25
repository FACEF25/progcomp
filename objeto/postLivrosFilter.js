// Crie um programa em JavaScript que:
// 1. Leia os dados de 5 livros digitados pelo usuário. 
// 2. Armazene os livros em um vetor de objetos.
// 3. Ao final, o programa deve:
// Exibir todos os livros com mais de 300 páginas.
// Exibir o título do livro com maior número de páginas.
// Calcular e exibir a média de páginas dos livros cadastrados.

let livros = [];

for (let i = 0; i < 5; i++) {
    console.log(` Cadastro do Livro ${i + 1} `);
    
    let titulo = prompt(`Digite o título do livro ${i + 1}:`);
    let autor = prompt(`Digite o autor do livro ${i + 1}:`);
    let ano = Number(prompt(`Digite o ano de publicação do livro ${i + 1}:`));
    let paginas = Number(prompt(`Digite a quantidade de páginas do livro ${i + 1}:`));

    livros.push({
        titulo: titulo,
        autor: autor,
        ano: ano,
        paginas: paginas
    });
}

console.log(" +300 páginas");
for (let i = 0; i < livros.length; i++) {
    if (livros[i].paginas > 300) {
        console.log(`${livros[i].titulo}`);
    }
}

let livroMaisPaginas = livros[0];
for (let i = 1; i < livros.length; i++) {
    if (livros[i].paginas > livroMaisPaginas.paginas) {
        livroMaisPaginas = livros[i];
    }
}
console.log(`Livro com mais páginas: ${livroMaisPaginas.titulo} (${livroMaisPaginas.paginas} páginas)`);

let somaPaginas = 0;
for (let i = 0; i < livros.length; i++) {
    somaPaginas += livros[i].paginas;
}
let mediaPaginas = somaPaginas / livros.length;
console.log(`Média de páginas: ${mediaPaginas.toFixed(2)}`);
