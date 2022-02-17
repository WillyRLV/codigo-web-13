//cuantos datos contiene un variable?

//una variable contiene 1 dato a la vez.

// ** Un arregl e sun conjunto de datos
// ** la forma en que declrmaos un arreglo es parecida la de una variable
// ** si nembargo debemos colocar [] despúes del igual, ejemplo:

const alumnos =["Erick","Juan","Javier","José", "Bruno"];
console.log("alumnos", alumnos);


// ** Pueda contener datos de distintos tipos 
const variosTipo=[100,"Juana",true,100.5];
const productos = ["Tablet","Laptop","Smartphone","Tv","Radio"];
console.log(variosTipo);

//* Escojer un dato especifico
console.log(alumnos[2]);
console.log(alumnos[4]);


// ** alterar un dato de un array 
//! Reasignando el indice 0
alumnos[0] = "pepe";
console.log("alumno reasignado", alumnos);

//! para crear datos nuevos
// ** alterar un dato de un array 

alumnos[5] = "Erick";
console.log("alumno reasignado", alumnos);
// * los array tienen una funcion "length", esto nos da un limite de datos contenidos.



//numero par o impar
const num = prompt("ingresa valor");
 ParOImpar = (num) => num%2===0? "Es un número par" : "Es un número impar"
console.log(ParOImpar(num));
