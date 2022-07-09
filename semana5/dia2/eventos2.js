// const btnPrueba = document.querySelector("#btn-prueba");

// btnPrueba.onclick = function event {
//     console.log("click desde el boton")
//     console.log("click desde el boton")

// }
const btnAlertaBotones = document.querySelector("#btn-alerta-botones");
btnAlertaBotones.onclick = function () {
  Swal.fire({
    title: "Alerta",
    text: "Texto de alerta",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: "Nel pastel",
  }).then((resultado) =>{
      console.log("resultado", resultado)
      if (resultado.isConfirmed) {
          console.log("marco la confirmacion");
          
      }

      if (resultado.isDenied) {
          console.log("marcó que no");
          
      }
      if(resultado.isDismisse){
          console.log("ignoró el mensaje");
      }

  });
};


//?ALERTA NOTIFICACION

const btnAlertNoti = document.querySelector("#btn-alerta-noti");
btnAlertNoti.onclick = function (){
    Swal.fire({
    position: "top-end",
      title: 'Bievenido',
      text: " te has registado con exito",
      icon: 'success',
      showConfirmButton:false,
        timer: 2000,
    });
}


const btnAlertaImg = document.querySelector("#btn-alerta-img");
btnAlertaImg.onclick = function () {
    Swal.fire({
      title: 'Imagen',
      text: 'Alerta con imagen',
      imageUrl:'https://elcomercio.pe/resizer/3awvVXpo1XkygxBsX8F0izZCvKY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/AMU42WDF5RCPNENSST2INDIN2E.jpg',
    imageWidth:400,
    imageHeight:300,
    })
};

const urlMarvel =
  "https://www.cinemascomics.com/wp-content/uploads/2022/02/villanos-marvel-comics-960x720.jpg";

const btnAlertaCustom = document.querySelector("#btn-alert-custom");
btnAlertaCustom.onclick=function() {
    Swal.fire({
      title: 'title',
      background:`url(${urlMarvel})`,
      text: 'text',
      footer: 'footerText',
        color: "#fff",
        backdrop: `rgba(0,0,0,0.2)
        url(https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif)
        left top
        no-repeat
        `,
    });
    
}


const btnAlertaInputs = document.querySelector("#btn-alert-inputs");

btnAlertaInputs.onclick = function (){
  Swal.fire({
    title: 'Input para email',
    input: 'email',
    inputLabel:'Ingrese su correo',
    inputPlaceholder: "El correo debe ser válido",
  }).then(resultado => {
    console.log(resultado);
      console.log(resultado.value);
  })
};