/*Este archivo se encaraá de gestionar mi servicios GET POST PUSH */
// const URL = "https://62295283be12fc45389bb667.mockapi.io/api/v1/Movie";
// const URL = "http://localhost:3000/movies";



const URL = "https://62295283be12fc45389bb667.mockapi.io/api/v1/Movie";

const getMovies = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

//pasamos la funcion trycatch de index aqui para listar las peliculas

const storeMovie = async (movie) => {

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
  
    // const data =
    await response.json();
    document.querySelector("form").reset();
    // console.log("data", data);
  
    Swal.fire("Se crep la película", "", "success");
  } catch (error) {
    Swal.fire("heading", "text", "error");
  }

};

// Para poder actualizar las peliculas
// recibe el id para buscar que pelicula actualizar
// recibe que es el objeto con la informacion que actualizara
const updateMovie = async (id, movie) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};



//para eliminar registro

const deleteItem = async (id) => {
  try {

    const response = await fetch (`${URL}/${id}`,
    {
method: "DELETE",
headers: {
  Accept:"application/json",
}

});

await response.json();
Swal.fire(
  {
    icon: "success",
    title: "",
    text: "Se elimino la pelicula",
  }
)
    
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
    
  }
};

