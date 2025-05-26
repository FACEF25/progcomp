function tabuada1ao10() {
    for (let numero = 1; numero <= 10; numero++) {
        console.log(`Tabuada do ${numero}:`);
        
        for (let conta = 1; conta <= 10; conta++) {
            let resultado = numero * conta;
            console.log(`${numero} x ${conta} = ${resultado}`);

        }
    }
}
