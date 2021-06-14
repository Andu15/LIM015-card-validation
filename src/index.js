import validator from './validator.js';
console.log(validator);

const $primerCuadro = document.getElementById("page1"),
    $segundoCuadro = document.getElementById("page2"),
    $mensajeDeSalida = document.getElementById("validation"),
    $logoTarjeta = document.getElementById("claseDeTarjeta");

let $cajaDeNombre = document.getElementById("username"),
$nombreReemplazado = document.getElementById("name"),
$numeroDeTarjeta = document.getElementById("numbercreditcard");

document.getElementById("button").addEventListener("click", ()=>{
    $primerCuadro.style.display = "none";
    $segundoCuadro.style.display = "";
    $nombreReemplazado.innerText = $cajaDeNombre.value;
});

document.getElementById("Enviar").addEventListener("click", () => {
    let $creditCardNumber = $numeroDeTarjeta.value;
    if ($creditCardNumber == "") { alert("completa los datos de la tarjeta por favor"); };
    if ($creditCardNumber == "/^4\d{15}/g") { alert("Tu tarjeta es Visa"); }
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);
})



//punto de entrada a un gráfico separado, inicia un nuevo gráfico, que se procesa por separado.

