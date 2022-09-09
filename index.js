"use strict";


/* FUNCIONES */
//<p>Hay dos botones:</p>
//<p>- Se deben validar los valores ingresados y dar un mensaje apropiado.</p>


//BOTÓN. El primero dice “Ingresar un número”, que al hacerle click una función debe ingresar un número entero.</p>
//-------------------- INGRESAR -----------------------
function ingresar() {
  do {
    var valor = +prompt("Ingrese un número");
    var flag = false;
    if (isNaN(valor)) {
      alert("Ingrese un valor numérico")
      flag = true;
    }
  } while (flag);
  localStorage.setItem("Valor", valor);
}

//BOTOÓN. El segundo dice “Mostrar paridad del número”, que al hacerle click una función debe mostrar mediante console.info si el número es par, impar o cero.</p>
//-------------------- MOSTRAR -----------------------
function mostrar() {
  if (localStorage.getItem("Valor")) {
    if (!parseInt(localStorage.getItem("Valor"))) {
      alert("El valor ingresado es 0")
    } else if (!(localStorage.getItem("Valor") % 2)) {
      alert("El valor ingresado es par")
    } else {
      alert("El valor ingresado es impar")
    }
  }
}

