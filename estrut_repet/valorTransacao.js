function calcularTransacoes() {
    let aVista = 0;
    let aPrazo = 0;
    const transacoes = [];
    
    for (let i = 1; i <= 15; i++) {
        const codigo = prompt(`Digite o código da transação,sendo V(a vista) e P (a prazo) ${i}:`).toUpperCase();
        const valor = parseFloat(prompt(`Digite o valor da transação ${i}:`));
        
        if (codigo === 'V') {
            aVista += valor;
        } else if (codigo === 'P') {
            aPrazo += valor;
            transacoes.push({ codigo, valor });
        } else {
            alert(" Use V ou P.");
            i--; 
        }
    }
    const totalCompras = aVista + aPrazo;
    const primeiraPrestacao = aPrazo / 3;
    
    console.log(`Valor total das compras à vista: R$ ${aVista}`);
    console.log(`Valor total das compras a prazo: R$ ${aPrazo}`);
    console.log(`Valor total das compras efetuadas: R$ ${totalCompras}`);
    console.log(`Valor da primeira prestação das compras a prazo (3x): R$ ${primeiraPrestacao}`);
}

