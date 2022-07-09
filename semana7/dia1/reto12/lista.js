
const tableCointaner = document.querySelector("#table-container");


//bonton actualizar

const btnUpdate = document.querySelector("#btn-update")


// inputs del modal
movieName = document.querySelector(".movie-name");
movieDirector = document.querySelector(".movie-director");
movieGender = document.querySelector(".movie-gender");
moviePhoto = document.querySelector(".movie-photo");
movieVideo = document.querySelector(".movie-video");

let idMovie="";

const getDataFromMovie = async (movieid) => {
  idMovie=movieid;

}



const renderMovies = async () =>{
    const movies = await getMovies();
    movies.map(movie => {
        const html = ` <tr id='row_${movie.id}'> 
        <td>${movie.id}</td>
        <td>${movie.name}</td>
        <td>${movie.director}</td>
        <td>${movie.gender}</td>
        <td><a target="_blank" href=${movie.video_link}>Ver video</a></td>
        <td>
        <div>
          <button onClick="getDataFromMovie(${movie.id})" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalMovieEd">
            <i class="fas fa-edit"></i>
          </button>

          <button onclick="deleteMovie(${movie.id})" class="btn btn-danger">
            <i class="fas fa-trash"></i>
          </button>
        </div>
    </td>
      </tr>`;
      tableCointaner.innerHTML += html;
    });
 }



 //actualizar
 btnUpdate.onclick = async function () {
  // primero debemos contruir nuestro objeto
  const movie = {
    name: movieName.value,
    director: movieDirector.value,
    wallpaper: moviePhoto.value,
    gender: movieGender.value,
    video_link: movieVideo.value,
  };
  await updateMovie(idMovie, movie);

  Swal.fire({
    icon: "success",
    title: "Todo bien",
    text: "Se actualizo la pelicula",
  }).then((result) => {

    if (result.isConfirmed) {
      location.reload();
      
    }
  });

  
  // vamos a actalizat la pagina despues de hacer el update
//   setTimeout(function(){
//     location.reload(); 
//  },2000);
};

 //para eliminar una pelicula
 const deleteMovie = async (id) => {
  const result = await Swal.fire({
    title: "Venta #123465",
    text: "¿Eliminar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  });

  if (result.value) {
    await deleteItem(id);
    const row = document.querySelector(`#row_${id}`);
    console.log(result.value);
 row.remove();
    // window.location.reload();
  }
};


 renderMovies();
