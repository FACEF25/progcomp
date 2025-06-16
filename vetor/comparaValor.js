function exe5() {
  let numeros = [];
  
  for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    numeros.push(numero);
  }

  let primeiro = numeros[0];
  let maiores = 0;
  let menores = 0;
  let iguais = 0;

  for (let i = 1; i < 10; i++) {
    if (numeros[i] > primeiro) {
      maiores++;
    } else if (numeros[i] < primeiro) {
      menores++;
    } else {
      iguais++;
    }
  }

  iguais++; 

  console.log(`Valores maiores que o primeiro: ${maiores}`);
  console.log(`Valores menores que o primeiro: ${menores}`);
  console.log(`Valores iguais ao primeiro: ${iguais}`);
}
