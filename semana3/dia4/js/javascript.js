const n1 = 10;
const n2 = 20;

let res = 0;

res = n1 + n2;
console.log("el resultado es" + res);
console.log("El resultado de : " + n1 + "+" + n2 + "=" + res);

//errores
console.error("suma error", res);
console.error("equivocado", res);
console.error("mala suma", res);
console.error("peligro", res);

//para pedir valores

const v = prompt("Ingresa tu peso: ");

// console.log("Aunque no lo creas pesas:" +v + ":0" );

//condicionales

const va1 = +prompt("Ingresa valor 1: ");
const va2 = +prompt("Ingresa valor 2: ");
const op = prompt("Ingrese una operacion puede ser + - * /");

let rescalc = 0;

if (op == "+") {
  rescalc = va1 + va2;
  console.log("Resultado: " + rescalc);

} else if (op == "-") {
  rescalc = va1 - va2;
  console.log("Resultado: " + rescalc);

} else if (op == "*") {
  rescalc = va1 * va2;
  console.log("Resultado: " + rescalc);

} else if (op == "/") {
  rescalc = va1 / va2;
  console.log("Resultado: " + rescalc);
}

