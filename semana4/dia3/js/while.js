let contador = 0;
while(contador < 10){
    console.log("contador", contador);
    contador ++
}


// Escribir un programa que pida al au siario una palabra ya lmuestra por pantalla 10 veces.
const imprimir = palabra => {
let contador =0;
while (contador<10){
console.log(palabra);
contador++;
}
};

imprimir("Hola tecsup");


// taba de multiplicar del 1 al 10
const imprimirTabla = numero => {
    let contador =0;
    while (contador<= 10){
        console.log(numero*contador);
        contador++;
    }
}

// imprimirTabla(1);
// imprimirTabla(2);

//ejemplo 3

const imprimirImpares = numero => {
    if(numero<=0){
        return "Solo numeros positivos";
    }
    let contador = 1;
    let resultado = "";
    while(contador<=numero){

        if(contador%2!==0){
            
         resultado += `,${contador}`;
        }
        contador++;
    }
    return resultado;
};

console.log(imprimirImpares(10));


// numeros primos 

const hallarNumPrimo = numero => {
 if (numero % 1 !==0){
     return "El numero es u ndecimal"
 }

 if (numero===1){
    return "El numero no es primo"
}

let contador=0;
let contadorDeDivisores = 0;

while (contador<=numero){
    if(numero%contador===0){
        contadorDeDivisores++;
    }

    contador++;
}
return contadorDeDivisores===2?"si es numero primo":"no es un numero primo";
 
} ;

console.log(hallarNumPrimo(5));

