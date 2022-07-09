

/**
 * * Existe dentro de JS el document, este atributo de JS me va a permitir
 * * obtener los elementos de HTML
 */

/**
 * * Obteniendo elementos en base a su tag
 * * tag = etiquetar
 * <h1></h1> tagname = h1
 * <input /> tagname = input
 * <form></form> tagname = form
 */

// ? como tengo 4 elementos con el tagname input esto sera un array de inputs
const inputs = document.getElementsByName("inputs")

//! Recordemos que input es un HTMLCollection, pero para poder ser iterado debe ser convertido aun array
//! normal vamos a usar Array.from para convertir este HTMLColletion a un array normal
const newInputs = Array.from(inputs);
console.log("inputs", inputs);
console.log("newinputs", newInputs);






// un map de inputs

newInputs.map((newInput)=> {
    console.log(newInput);
});


const form = document.getElementsByTagName("form");

//acceder al boton 

const button = document.getElementsByTagName("button");




/**SEGUNDA PARTE */

const divContent = document.getElementsByTagName("div");
console.log("DivContent", divContent);

const newDivContent = Array.from(divContent);
console.log(newDivContent);

newDivContent.forEach(element => {
    console.log(element);
});

//!Recordar que tanto el map con el for aplica el return cuando esta se guarda en una variable.
/**
 * * Otra forma de acceder a los elementos del DOM es utilizando el ID
 * TODO: Recuerden que podemos asignarle un id a cualquier elemento de nuestro HTML
 */
//* Esta variable solo sera dedicada para mi email
const inputEmail = document.getElementById("input_email");
// de esta forma estoy accediendo al value de mi input
inputEmail.style.backgroundColor = "#f01";
console.log(inputEmail.value);
console.log("inputEmail", inputEmail);
// usando puedo acceder directamente a las propiedades de mi input

const inputPassword = document.getElementById("input_password");
inputPassword.style.backgroundColor = "#000";
inputPassword.style.color = "#fff";
console.log("password", inputPassword.value);