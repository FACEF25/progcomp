function exe6() {
  let vetor = [];

  for (let i = 0; i < 12; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    vetor.push(numero);
  }

  let buscado = parseInt(prompt("Digite o número que deseja buscar:"));

  let posicoes = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === buscado) {
      posicoes.push(i); 
    }
  }

  if (posicoes.length > 0) {
    console.log(`O número ${buscado} foi encontrado ${posicoes.length} vez(es).`);
    console.log("Posições encontradas:", posicoes.join(", "));
  } else {
    console.log(`O número ${buscado} não foi encontrado no vetor.`);
  }
}
