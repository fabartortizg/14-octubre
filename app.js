let nombre= "Nata";
let ciudad= "Sevilla";
let edad= "39";

let saludo= "Hola, mi nombre es " + nombre + " vivo en " + ciudad + " y tengo " + edad + " años";
console.log(saludo);

nombre=prompt("Introduce tu nombre: ");
ciudad=prompt("Introduce tu ciudad: ");
edad=prompt("Introduce tu edad: ");
saludo= "Hola, mi nombre es " + nombre + " vivo en " + ciudad + " y tengo " + edad + " años";
console.log(saludo);

document.getElementById("Hola").textContent= saludo;