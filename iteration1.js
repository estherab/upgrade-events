// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
let handleClick = function (event) {
    console.log(event);
}

document.getElementById("btnToClick").addEventListener("click", handleClick);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let handleFocus = function (event) {
    console.log("Valor introducido en el input:", input.value);
}

let input = document.querySelector(".focus")
input.addEventListener("blur", handleFocus);

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let handleInput = function (event) {
    console.log("Valor introducido en el input:", input2.value);
}

let input2 = document.querySelector(".value")
input2.addEventListener("input", handleInput);