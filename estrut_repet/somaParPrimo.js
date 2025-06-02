function somaParesEPrimos() {
    let somaPares = 0;
    let somaPrimos = 0;

    for (let i = 1; i <= 10; i++) {
        let numero;
        
        do {
            numero = Number(prompt(`Digite o número:`));
        } while (numero);

        if (numero % 2 === 0) {
            somaPares += numero;
        }

        if (numero > 1) {
            let primo = true;
            // Verifica divisores até a METADE do número
            for (let j = 2; j <= numero / 2; j++) {
                if (numero % j === 0) {
                    primo = false;
                    break;
                }
            }
            if (primo) {
                somaPrimos += numero;
            }
        }
    }

    alert(`Soma dos pares: ${somaPares}\nSoma dos primos: ${somaPrimos}`);
}

