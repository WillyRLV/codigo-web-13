// * Una funcion es un conjunto de soluciones para realizar tareas

function nombreFuncion(){
const perro = juan;
console.log(perro);
}


//? Una funcion es creada para poder reusar codigo
//? Usado para trabajos repetitivos
//?solo se necesitar escribir una vez y llamar posteriormente si se lo necesita.

// Todo: Una funcion puede recibir parametros(variables que se le asigna a la función)
function suma(n1,n2){
    const suma = +n1 + +n2;
    return  `la suma es ${suma}`;
}
console.log(suma(3,2));


//...................................................
// function sumar(n1,n2){
//     const convertnum1 = +n1;
//     const convertnum2 = +n2;
//     const suma = convertnum1 + convertnum2;

//     console.log(suma);


// if (isNaN(suma)) {
//     console.log("Error: nO SE PUEDE SOUMAR");
//     return;
// }

// console.log("suma:", suma)

// }

function sumar(numb1, numb2){
const suma = +numb1 + +numb2;
if(isNaN(suma)) {
    return "Error: Nose puede sumar";
}
return suma;

}


//tercera forma de reducir codigo

function sumar(numb1, numb2){
    const suma = +numb1 + +numb2;
    return isNaN(suma) ? "Error no se puede sumar":suma;
    }

//! el orden escrito será el orden que reciba según los parámetros
sumar(30,40);
sumar(20,10);
sumar(50,36);
sumar("20",36);


//para la segunda funcion igual pero mas corta

console.log(sumar(30,40));
console.log(typeof(sumar(30,40)));
console.log(sumar(20,10));
console.log(sumar(50,36));
console.log(sumar("20",36));
console.log(sumar("hola",36));


//  const num1 = +prompt("Ingrese valor 1:");
// const num2 = +prompt("Ingrese valor 2:");
// sumar(num1,num2); 


// TODO: Function de expresion 
// !Es tener una funcion dentro de una variable
//!Es conocido function anonima 

const resta = function (num1, numm2){

    const calcResta=+num1 - +numm2
    return isNaN(calcResta) ? "Error: no se puede restar":calcResta;
};

console.log("Resta:", resta(10,20));


//ejemplo 2 


//? funcion flecha
//? tipo 1
const division = (numero1, numero2) => {
    // if (numero2==0){
    //     return "Error: no se puede dividir por 0";
    // }
    const calcDivision = +numero1 / +numero2;
    return (numero2==0) ? "Error: no se puede dividir entre 0":isNaN(calcDivision)?"Error: no se puede dividir": calcDivision;
};

console.log(division(10, "0"));
console.log(division(10, "4"));


//* cuando nuestro arrow function solo recibe un oparametro 
// * no es necesario poner parentesis.

const saludar = (nombre,apellido) => {
    return `Hola mi nombre es ${nombre}  y mi apellido es apellido ${apellido}`;
}
console.log(saludar("Juan", "Perez"));


//? tipo 3
const funcionsinParamentros = _ =>{
return "Hola mundo"
}


//? tipo 4
//? arrow function inline
const hello =() => "Hola mundo in one line";


// numeros globales

let numeroGlobal = 10;

const calcularMayor = ()=> {
    const edad=18;
    const nombre = "pepe";

    console.log("numeroGlobal")
}


//? Recomendaciones , los nombres las funciones deben ser verbos
//?porque siempre realizan una accion.

//?ejemplo

function sunar() {}

function calcularResta(){

}

function actualizarNombre(){

}

//?Tratar de no pasar mas de 3 parametros a una funcion
//*Recuerden que los paramertros de una funcion puede ser cualquier tipo

const alumnosTecsup = ["Juan", "Pedro", "Maria", "Ana", "Juana"]

function listarAlumnos(alumnos)
{
    console.log("Alumnos tecsup", alumnos);
}

listarAlumnos(alumnosTecsup);


//si se llega ver codigo repetido , lo correcto seria llevarlo a una funcion

function validarSiesNumero(num, tipo) {

    return isNaN(num) ? `Mensaje error no se puede ${tipo}`:num;
};




//? calcular edad

const calcEdad =(añoNac,mesNac) => {
    const añoAc = 2022;
    const mesAc = 2;
    
return ( mesNac<=mesAc) ?`tienes ${añoAc-añoNac}`:`tienes ${añoAc-añoNac-1}`; 
} 

console.log(calcEdad(1998,4));
