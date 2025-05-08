function pesquisaSatisfacao() {
    let nota //guarda as notas do usuário
    let cont = 1 //conta de 1 a 10
    let contSatisfeitos = 0 // 0 satisfeitos inicialmente
    let contInsatisfeitos = 0 // 0 insatisfeitos inicialmente
    let soma = 0; 
    while (cont <= 10) {
        nota = Number(prompt(`Informe uma nota de 0 a 10: ${cont}`))
        if(nota >= 0 || nota <=10){
            alert
        }else if (nota >= 8) {
            contSatisfeitos++
        }
            else if (nota < 5) {
                contInsatisfeitos++
            }
            soma  = soma + nota 
            cont++ //conta mais 1
        }    
   
    let media = soma / 10
    alert(`
    Média das notas = ${media.toFixed(1)}
    Usuários satisfeitos = ${contSatisfeitos}
    Usuários insatisfeitos = ${contInsatisfeitos}`)
}