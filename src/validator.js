const validator = {
  isvalid: (creditCardNumber) => {
    let $arrayInverso = [];
    for (let $d = $creditCardNumber.length - 1; $d >= 0; $d--) {
      $arrayInverso.push($creditCardNumber[$d]);
    }
  },
  maskify: (creditCardNumber) => { }
};

export default validator;

/*no puede tener variables en los especificadores de su módulo, porque esas variables aún no tienen valores*/
/*NO deben existir instrucciones relacionadas al manejo del DOM (addEventListener, GetElementById, InnerHtml). ya que esto es responsabilidad de index.js*/
/*Las funciones isValid() y maskify() al final deben retornar algo, esto mediante la palabra return*/

/*Cada vez que agreguemos código y vemos que funciona, correr los test (npm test) o por lo menos el pretest (npm run pretest) para que valide sintaxis.
Hacer commit de cada cambio para tener un histórico, ej: git commit -am "invertí el array de números de la tarjeta". y luego git push origin master.*/