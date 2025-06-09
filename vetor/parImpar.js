function parImpar(){
let vet= [];

for (let i = 0; i < 5; i++) {
    vet.push (Number(prompt(`Digite o ${i + 1}º número:`)));
}
let pares = []
let impares= []

for (let i = 0; i < vet.length; i++) {
    if (vet [i] % 2 == 0) {
         pares.push(vet[i])
    } else {
         impares.push(vet[i])
    }
}
alert(`Quantidade de pares ${pares.length} - ${pares}`)
alert(`Quantidade de impares ${impares.length} - ${impares}`)

}
