function precoIngresso(){
    let preco = 5.0 
    let qntd = 120
    const despesa = 200
    let lucro, maiorLucro = 0 
    let aux = ""

    while(preco >= 1){
        lucro =(preco * qntd) - despesa
        if(lucro> maiorLucro){
            maiorLucro = lucro
        }
        aux = aux + '\n '+ (` ${preco} - ${qntd} - ${despesa} - ${lucro} `)
        qntd = qntd + 26
        preco = preco - 0.5
        }
        alert = (aux)
        alert = (maiorLucro)
    }

