// const persona = {
//     nombre: "Juanito",
//     edad:30,
//     talla:1.5,
//     estadoCivil: "casado",
//     calcularEdad: function(){
//         console.logo("calculando edad");
//     },
// };

// //*1ra forma de llamar a una funcion que esta dentro de un objeto
// console.log("1er forma");
// persona.calcularEdad();

// //*2da forma es parecida, sin embargo no se usan los paréntesis
// console.log("2da forma");

// //*Esta solo funciona si la funcion tiene  un return

// persona.calcularEdad;

//TODO: Ejemplo

//? Vamos a ver com oacceer a las propiedades del objeto desde una función interna

const computadora = {
  color: "azul",
  marca: "hp",
  nuevo: true,
  mostrarDetalle: function () {
    //color no pertenece al ambito de la funcion
    console.log("color", this.color);
  },
  mostrarDetalleCompleto: function () {
    //!En los arrow function this no existe
    console.log(
      "Detalle",
      `Color: ${this.color} Marca: ${this.marca} Es nuevo? ${
        this.nuevo ? "Si" : "no"
      } `
    );
  },
};

const computadora2 = {
  color: "amarillo",
  marca: "Lenovo",
  nuevo: false,
  imprimirDetalle: function () {
    console.log(this.color);
  },
};

computadora.mostrarDetalle();
computadora.mostrarDetalleCompleto();
computadora2.imprimirDetalle();

//ejemplo 3

const alumno = {
  nombre: "Juanito",
  notas: [10, 5, 8, 9],
  cursos: ["html", "css", "js", "React"],
};

console.log("Notas ", alumno.notas);

//? arra de un objetos

const alumnos = [
  {
    nombres: "Luciano",
    edad: 10,
    promedio: 15,
  },
  {
    nombre: "El pepe",
    edad: 21,
    promedio: 14,
    direccion: "Av siempre 123",
  },
];

console.log(`${alumnos[0].nombres} tiene ${alumnos[0].promedio}`);

//? pueden ser numeros los KEYS?
const listaDeUtiles = {
  1: "Hojas bond",
  2: "Plumones",
  3: "Lapcieros",
};
//de esta manera puedes imprimir un key numerico de un objeto.
console.log(listaDeUtiles["1"]);

//? objetos dentro de objetos

const components = {
  nombre: "lENOVOD IPAD",
  caracteristicas: {
    ram: 16,
    gpu: "3090 super",
    memoria: 512,
    extra: {
      pantalla: "4k",
    },
    1: {
      teclado: "Español",
    },
  },
};
console.log("Tarjeta", components.caracteristicas.gpu);
console.log("Pantalla", components.caracteristicas.extra.pantalla);
console.log("Teclado", components.caracteristicas["1"].teclado);

// otro ejemplo

const MacBooks = [
  {
    name: "MacBookPro",
    id: "MK193LL/A",
    inch: 16.2,
    display: "3456x2234 Liquid Retina XDR",
    ram: 16,
    cpu: "M1 Pro",
    cpu_core: 10,
    gpu: "Apple Neural Engine",
    gpu_core: 16,
    SO: "macOS",
    ports: "Thunderbolt 4, HDMI, MagSafe 3",
    color: "Space Gray"
  },

  {
    name: "MacBookPro",
    id: "MK1E3LL/A",
    inch: 16.2,
    display: "3456x2234 Liquid Retina XDR",
    ram: 16,
    cpu: "M1 Pro",
    cpu_core: 10,
    gpu: "Apple Neural Engine",
    gpu_core: 16,
    SO: "macOS",
    ports: "Thunderbolt 4, HDMI, MagSafe 3",
    color:"Silver"
  },

  {
    name: "MacBookPro",
    id: "Z150000H5",
    inch: 16.2,
    display: "3456x2234 Liquid Retina XDR",
    ram: 32,
    cpu: "M1 Pro",
    cpu_core: 10,
    gpu: "Apple Neural Engine",
    gpu_core: 32,
    SO: "macOS",
    ports: "Thunderbolt 4, HDMI, MagSafe 3",
    color: "Silver"
  },
];


