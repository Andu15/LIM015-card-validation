import validator from './validator.js';
console.log(validator);

const primerCuadro = document.getElementById("page1"),
segundoCuadro = document.getElementById("page2"),
mensajeDeSalida = document.getElementById("validation");

let cajaDeNombre = document.getElementById("username"),
nombreReemplazado = document.getElementById("name"),
numeroDeTarjeta = document.getElementById("numbercreditcard");

document.getElementById("button").addEventListener("click", ()=>{
    primerCuadro.style.display = "none";
    segundoCuadro.style.display = "";
    nombreReemplazado.innerText = cajaDeNombre.value;
});

document.getElementById("Enviar").addEventListener("click", () => {
    let creditCardNumber = numeroDeTarjeta.value;
    if (creditCardNumber == "") { alert("completa los datos de la tarjeta por favor"); }

    validator.getIssuer(creditCardNumber);

    if(validator.isvalid(creditCardNumber))
    { mensajeDeSalida.innerHTML = "&#10024" + " Felicidades, tu tarjeta es valida para hacer tu compra " + "&#10024"; } else { mensajeDeSalida.innerHTML = "&#9888;&#65039" + " Uy, al parecer haz ingresado una tarjeta incorrecta, intenta nuevamente"; }
    if (validator.maskify(creditCardNumber)) { numeroDeTarjeta.value = validator.maskify(creditCardNumber) }
})



//punto de entrada a un gráfico separado, inicia un nuevo gráfico, que se procesa por separado.

