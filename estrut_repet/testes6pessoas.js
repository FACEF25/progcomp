function HICP(){
    let idade,peso, h, eye, hair
    let idade50peso60 = 0 
    let idadeHMenor150 = 0 
    let somaIdade = 0 
    let percentEyeAzul = 0 
    let qntdRuiva = 0 
    for(let conta = 1; conta <=6; conta++){
        do{
        peso= Number(prompt('Informe o peso > 0'))
        }while(peso <= 0 )
        do{
            idade= Number(prompt('Informe a idade em centimetros > 0'))
        }while(peso <= 0 )
        do{
            h= Number(prompt('Informe a altura > 0'))
        }while(h <= 0 )
        do{
            eye = prompt('Informe a cor dos olhos(A - Azul, P - Preto , V- Verde, C - Castanho ').toUpperCase();
        }while(eye !==  'A' && eye !== 'P' && eye !== 'V' && eye !== 'C ' )
        do{
            hair= prompt('Informe a cor do seu cabelo (L - Louro, P - Preto , R- Ruivo, C - Castanho ').toUpperCase();
        }while(hair !==  'L' && hair !== 'P' && hair !== 'R' && hair !==  'C ' )
        if (idade > 50 && peso < 60) {
        idade50peso60++
        }if (h < 150) {
        somaIdade = somaIdade + idade
        idadeHMenor150++
        }if (eye ==='A') {
        percentEyeAzul++
        }
        if(hair === 'R' && eye !=='A')
        qntdRuiva++

    }
    alert (`a- ${idade50peso60} b- ${idadeHMenor150/mediaIdade}  c- ${(percentEyeAzul/6) * 100} d-${qntdRuiva}`)

}