function ordemValor(){
    let a, b, c, d,  aux
    let grupo = 1

    while(grupo <=5 ){
        a = Number(prompt(`Informe o valor de a `))
        b = Number(prompt(`Informe o valor de b `))
        c = Number(prompt(`Informe o valor de c `))
        d = Number(prompt(`Informe o valor de d `))
        let cont = 1
        while(cont <= 3) {
            if (a > b){
                aux = a; a = b; b= aux;    
            }if (b > c){
                aux = b; b = c; c= aux;    
            }if (c > d){
                aux = c; c = d; d= aux;    
            }cont++
        }alert(`Ordem crescente ${a}, ${b}, ${c},${d} Ordem decrescente ${d}, ${c}, ${b},${a}`)
        grupo++
    }
}
