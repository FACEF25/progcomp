function tabuada() {
    let numero = Number(prompt(`Informe um numero:`))
    for (let x = 0; x <= 10; x++) {
        console.log(`${numero} x ${x} = ${numero * x }`);
        alert(`${numero} x ${x} = ${numero * x }`)
    }
}