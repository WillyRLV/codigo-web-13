/*Logica */
//PRIMER PASO
//función para obtener datos

const pokemonContainer = document.querySelector("#row-pokemons");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonImg = document.querySelector("#pokemon-img")
const pokeHp = document.getElementById("progress-b")
const pokeHp_2 = document.querySelector("#progress-b")
const pokeDef = document.getElementById("progress-b2")
const pokeDef_2 = document.querySelector("#progress-b2")


const pokemonEspecie = document.querySelector("#pokemon-es");
const pokemonAvility = document.querySelector("#pokemon-av");
const pokemonAvility2 = document.querySelector("#pokemon-av2");
//modal
const URL = "https://pokeapi.co/api/v2/pokemon?limit=100";
const URLimg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
const urlColor = "https://pokeapi.co/api/v2/pokemon-species";

const getPokemons = async () => {
  const res = await fetch(URL);

  const data = await res.json();
  console.log(data);
  renderPokemon(data.results);
};
//=================================================

//PASO 2
//CREAR UNA FUNCION LA CUAL SE ENCARGA DE PODER DIBUJAR EN NUESTRO HTML
const renderPokemon = (results) => {
  results.map(async (res, index) => {
    //aqui se usa await porque getcolorpokemon es una función async por ende tiene un tiempo de espera para consultar al json.
    const bgColor = await getColorPokemon(index + 1);


    const font = (colorf) => {
      const color = "rgba(0,0,0,0.7)";
      colorf.map((data) => {
       if (data === "white" || "pink" || "gray" || "green") {
        
         return color;
         }
    });
  };


   

    const html = `<div class="col-md-3 mt-3">
        <div class='card rounded-3' style='background-color:${bgColor}'>
        <img class='img card-img-top' width="100" height="100" src='${URLimg}${
      index + 1
    }.svg'
    />
        <div class='card-body text-center'>
        <p class='num' style='color:${font}'>N°${index + 1}</p>
        <h4 class='text-subtitle'>${res.name}</h4>
        </div>

        <button class="btn btn-primary" onclick='getDetailsPokemon("${
          res.url
        }")' data-bs-toggle='modal' data-bs-target='#modalPokemon'>más</button>
        </div>
    </div>`;
    pokemonContainer.innerHTML += html;
  });
};

//obtenerDetalles

const getDetailsPokemon = async (URL) => {
  const response = await fetch(URL); //peticion a la ur y esperando
  const data = await response.json(); //esperando la peticion del json en la URL

  const widthHp= data.stats[0].base_stat;
  const widthDf = data.stats[2].base_stat;

  console.log("detalle", data);

  pokemonImg.src =data.sprites.other.dream_world.front_default;
  pokemonName.innerHTML = data.name; //IMPRIMIR DATO REQUERDIO EN HTML
  pokemonEspecie.innerHTML =`${data.types[0].type.name}/ ${data.types[1].type.name}`;
  pokeHp.style.width= widthHp + "%";
  pokeHp_2.innerHTML= widthHp + " hp";

  pokeDef.style.width= widthDf + "%";
  pokeDef_2.innerHTML= widthDf + " df";


  pokemonAvility.innerHTML = data.abilities[0].ability.name;
  pokemonAvility2.innerHTML = data.abilities[1].ability.name;
  
};




//color de fuente según color de fondo

//escojer colores especiales.
const getColorPokemon = async (id) => {
  const response = await fetch(`${urlColor}/${id}`);

  const data = await response.json();

  const color = {
    red: "rgba(255,48,50,0.6)",
    green: "rgba(83,180,50,0.6)",
    blue: "rgba(113,104,226,0.6)",
    brown: "rgba(165,42,42,0.6)",
    yellow: "rgba(255, 240,0,0.6)",
    pink: "rgba(255, 192,203,0.6)",
    purple: "rgba(159, 90,253,0.6)",
    gray: "rgba(220, 220,220,0.6)",
  };
  return color[data.color.name];
};
//LLAMAR FUNCIÓN
getPokemons();

//DICCIONARIO DE CORRECCION DE COLORES
//?si data.color.name = red
//busca dentro del obj color el key
//como el key es red esto retorna el color establecido en el objet
