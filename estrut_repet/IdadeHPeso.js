function IdadeHPeso(){
    let idade, peso, h
    let qntPessoasIdade = 0 
    let qntPessoasPeso = 0 
    let somaAltura = 0 
    let idadesEspecificas 
    for (let conta =  1; conta <= 5 ; conta++){
        idade = Number(prompt('Informe idade da pessoa ${conta}'));
        peso = Number(prompt('Informe idade da pessoa ${conta}'));
        h = Number(prompt('Informe idade da pessoa ${conta}'));
        if (idade > 50) {
        qntPessoasIdade++
        }
        if(peso> 40){
        qntPessoasPeso++
        }
        if(idade >=10 && idade <=20){
        somaAltura = somaAltura + h
        idadesEspecificas++
        }
    }
    alert (`a- ${qntPessoasIdade} b- ${qntPessoasPeso}  c- ${idadesEspecificas/5*100}`)
}