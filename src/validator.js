const validator = {
  
  isValid: (creditCardNumber) => {
    let arrayInverso = [];
    for (let d = creditCardNumber.length - 1; d >= 0; d--) {
      arrayInverso.push(creditCardNumber[d]);
    }
    let pasarNumeros = arrayInverso.map(function (numeros) {
      return Number(numeros);
    })
    //extraer posiciones impares y sumarlos
    let digitosImpares = pasarNumeros.filter(function (numerosImpares, posicion) {
      return posicion % 2 === 0;
    })
    let acumulador = (fijo, suma) => { return fijo + suma };
    let sumaImpares = digitosImpares.reduce(acumulador, 0);
    //extraer posiciones pares
    let digitosPares = pasarNumeros.filter(
      function (num, ind) { return ind % 2 !== 0; })
    let multipli = digitosPares.map(function (num) { return num * 2 });
    //extraer mayores que 9, reducirlos y sumarlos
    let mayores = multipli.filter(function (d1) { return d1 >= 10 });
    let mayoresReducidos = mayores.map((numeritos) => { return numeritos - 9 });
    let sumPares1 = mayoresReducidos.reduce((acumulador));
    //extraer menores que 9 y sumarlos
    let menores = multipli.filter(function (d2) { return d2 < 10; });
    let sumPares2 = menores.reduce(acumulador);
    //sumar todos los digitos
    let total = sumaImpares + sumPares1 + sumPares2;
    let final = total % 10;
    return final === 0 ? true : false;
  },
  maskify: (creditCardNumber) => {
    let matriz = "";
    for (let m = 0; m < creditCardNumber.length - 4; m++) {
      matriz += creditCardNumber[m].replace(/./g,"#");
    }
    matriz = matriz + creditCardNumber.substr(creditCardNumber.length - 4, creditCardNumber.length)
    return matriz;
  },
  getIssuer: (creditCardNumber) => {
    let result = "";
    if (creditCardNumber.match(/^4[0-9]{15}$/g)) { result = "Visa"; }
    else if (creditCardNumber.match(/^3[4-7][0-9]{13}/g)) { result = "American Express"; }
    else if (creditCardNumber.match(/^5[1-5][0-9]{13}/g)) { result = "Mastercard"; }
    else if (creditCardNumber.match(/^6011[0-9]{12}/g)) { result = "Discover"; }
    else if (creditCardNumber.match(/^62[0-9]{14}/g)) { result = "China Union Pay"; }
    else if (creditCardNumber.match(/^[5-6][0-7][0-6][0-9]{13}/g)) { result = "Maestro"; }
    else {result = "sin definir"}
    return result;
  }
}

export default validator;

/*no puede tener variables en los especificadores de su módulo, porque esas variables aún no tienen valores*/
/*NO deben existir instrucciones relacionadas al manejo del DOM (addEventListener, GetElementById, InnerHtml). ya que esto es responsabilidad de index.js*/
/*Las funciones isValid() y maskify() al final deben retornar algo, esto mediante la palabra return*/

/*Cada vez que agreguemos código y vemos que funciona, correr los test (npm test) o por lo menos el pretest (npm run pretest) para que valide sintaxis.
Hacer commit de cada cambio para tener un histórico, ej: git commit -am "invertí el array de números de la tarjeta". y luego git push origin master.*/