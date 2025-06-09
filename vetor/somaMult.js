function somaMult(){
let vetor = [];

for (let i = 0; i < 10; i++) {
     vetor.push(Number(prompt(`Digite o ${i + 1}º número:`)));

}
//altera o vetor original 
for (let i = 0; i < vetor.length; i++) {
    if (i % 2 === 0) { //posição é par 
        vetor[i] = vetor[i] +  10;
    } else {
        vetor[i] = vetor[i] * 3;
    }
}
alert(`Novo vetor alterado  ${vetor}`)

}
