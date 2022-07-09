const optionMode = document.querySelector("#option-mode");
const body = document.querySelector("body");

//vamos a usar el evento onchange para poder obtener el valor del select

optionMode.onchange = function (e) {
  const { value, name } = e.target;

  //aqui haremos una condicion para detecta el valor del select con respecto en s ies modo oscuro o claro.

  body.setAttribute("data-mode", value);
};

//match media

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)"
).matches) {
    body.setAttribute("data-mode" , "dark")
}
else {
    body.setAttribute("data-mode", "light")
}
