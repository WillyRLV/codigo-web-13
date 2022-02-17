//* Tipos de datos
// string number, boolean , undefined


const msg ="hola";
var pepito = "Saludo";
let nombre ="Dario";


const nombreNumber = +"nombre";
console.log("tipo de variable",typeof(nombreNumber));


let numeroNumber = 1000.1443433;
const edadMayor = 21;
let edad = 10;
const numero = 45;

let estado = true;
let sexo = true;

// ? para convetir a string
let dinero= 10;
console.log(typeof dinero.toString());

// const CalcularPotencia = (var1, var2) =>  `${Math.pow(var1,2)} y ${Math.pow(var2,2)}`



// console.log(CalcularPotencia(5,3));


//ordenar de mayor a menor 





// const saludarUsuario = (a,b,c) => {
//     return `Hola ${a} ${b} de ${c} años.`
//     }

//     const name = prompt("Ingrese nombre: ");
//     const lastname= prompt("Ingrese Apellido: ");
//     const year = prompt("Ingrese Edad: ");

//     alert(saludarUsuario(name,lastname,year));
    

// const calcularArea = (v1,v2) => `el area del rectangulo base ${v1} y altura ${v2} es ${v1*v2}`;

// console.log(calcularArea(3,4));

const esMayor = edad => edad>=18 ? "es mayor de edad": "es menor de edad";
console.log(esMayor(10));

const array = ["1","2","3","4","5","6"]
const calcularRango = (array) => array.lenght > 5 ? "arreglo grande":"arreglo pequeño";
console.log(calcularRango(array));



//objetos





const animales = {
    lion: "🦁",
    panda:"🐼",
}

console.log(Object.values(animales));







let validarUsuario =(valUsu)=> {
    const {location, nickname, nivel}=valUsu;
    return location=="Peru"?  `Su ${nickname} y su nivel ${nivel}`: "Oye tu nickname no eres peruano";
};







