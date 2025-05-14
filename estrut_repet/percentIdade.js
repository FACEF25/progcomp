function percentIdade(){
    let conta= 1
    let idade 
    let f1 = 0 
    let f2 = 0 
    let f3 = 0 
    let f4 = 0 
    let f5 = 0 

    while( conta<= 8 ){
        idade = Number(prompt(`Informe a idade da pessoa:${conta}`))
        if (idade > 0  && idade <= 15){
            f1++
        }else if (idade >= 16 && idade <= 30){
            f2++
        }else if (idade >= 31 && idade <= 45){
            f3++
        }else if (idade >= 46 && idade <= 60){
            f4++
        }else if ( idade > 60){
            f5++
        }else{
            alert(`Nota inválida`)
            continue // volta para o início do loop, fazendo com o que nao execute o que vem a seguir 
        }conta++
    }
    alert(`Faixa etaria 1: ${f1} Faixa etaria 2: ${f2}Faixa etaria 3: ${f3}Faixa etaria 4: ${f4}Faixa etaria 5: ${f5}`)
    alert(`Percentual faixa etaria 1:${(f1/8)* 100} Percentual faixa etaria 5:${(f5/8)* 100}`)
}