//* Existen metodos (funciones) que nos permite leer arrays y objetos de manera sencilla

//* "".map" esto es un bucle



const productos = [
    {names:"Laptop",
    price: 1500,
    },

    {names:"Celular",
    price: 2300,
    },

    {names:"Monitor",
    price: 1000,
    },
];

productos.map((productos, index) => {
    console.log("Indice", index);
    console.log("Producto", productos);

});