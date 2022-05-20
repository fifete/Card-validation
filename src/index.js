import validator from './validator.js';

const numberInput = document.getElementById("numberInput");
const invalidMessage = document.getElementById("invalidMessage");
const cvvRestrictions = document.getElementById("cvv");
const resetBtn = document.getElementById("resetBtn");
const verifyBtn = document.getElementById("verifyBtn");

//A)Enmascarado, validación y mensajes respecto al número de tarjeta
numberInput.addEventListener("keyup", (ev) => {
  var card = document.getElementById("hiddenNumberInput");

  //1. Obtener un string con todos los #s que ingresa el user
  //1.1. Cortar el último dígito del string solo si el usuario aprieta la borrar(backspace):
  if (ev.key === "Backspace") {
    card.value = card.value.slice(0, -1);
  } else {
    //1.2 Eliminar del string todo caracter que no sea un número entre 0 y 9, incluida la tecla borrar
    card.value += ev.key.replace(/[^0-9]/g, "");
  }

  //2. Poner máscara al string, obtenido en 1.2, con maskify method
  let maskedCardNumber = validator.maskify(card.value);

  //3. Dar espaciado cada cuatro dígitos al número obtenido en 3. con método replace, Ej: ##248989 (maskedCardNumber)
  //Expected: ev.target.value = ##24 8989
  ev.target.value = maskedCardNumber.replace(/([# 0-9]{4})/g, "$1 ");

  console.log(card.value); //PRUEBAS NO VAN EN VSCODE

  //4. Validar la tarjeta e indicar su tipo solo cuando el input no está vacío
  if (card.value === "") {
    invalidMessage.innerHTML = "Ingrese una tarjeta válida";
  } else {
    //4.1. Validar la tarjeta con isvalid method
    let resultOfValidator = validator.isValid(card.value);
    console.log(resultOfValidator); //PRUEBAS NO VAN EN VSCODE

    //4.2. Indicar al user si su tarjeta es válida o no
    if (resultOfValidator) {
      invalidMessage.innerHTML = "tarjeta válida";
    } else {
      invalidMessage.innerHTML = "Ingrese una tarjeta válida";
    }
  }

  //5. Indica el tipo de tarjeta: Visa, mastercard y american express
  if (card.value[0] === "4") {
    document.getElementById("cardType").innerHTML = "soy visa";
  } else if (card.value[0] === "5") {
    document.getElementById("cardType").innerHTML = "soy mastercard";
  } else if (
    (card.value[0] === "3" && card.value[1] === "4") ||
    (card.value[0] === "3" && card.value[1] === "7")
  ) {
    document.getElementById("cardType").innerHTML = "soy american-express";
  } else {
    document.getElementById("cardType").innerHTML =
      "su tarjeta no pertenece a ninguna de la tres";
  }
});

//B) Restricciones para el CVV: sólo números del 0 al 9
cvvRestrictions.addEventListener("keyup", () => {
    cvvRestrictions.value = cvvRestrictions.value.replace(/[^0-9]/g, "");
})

//C) Funcionalidad del botón limpiar
resetBtn.addEventListener("click", () => {
  document.getElementById("form").reset();
});

//D) Botón iniciar sesion alerta en caso algún campo del formulario este vacío
verifyBtn.addEventListener("click", () => {
  const allInputs = document.querySelectorAll("input");

  //Arreglo que tiene aquellos inputs donde el usuario no ha ingresado información
  let ArrayOfEmptyInput = Array.from(allInputs).filter((input) => input.value === "");

  //Dar alerta al user si el arreglo anterior no esta vacío 
  ArrayOfEmptyInput.length >= 1 && alert("Complete todo el formulario");
});