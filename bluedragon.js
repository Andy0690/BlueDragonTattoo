
function datos(evento) {
	evento.preventDefault();

var nombre = document.querySelector("#nombre1").value;
var fecha = document.querySelector("#fecha1").value;
var bienvenida = document.querySelector("#bienvenida1");
var mensaje; 
var mensajeEdad;

if (fecha >= 2005 ) {
    mensajeEdad = " eres menor de edad ";
  }  else {
    location.href="Formulario.html"
  }

  mensaje =
    "<p>¡Bienvenid@, " +
    nombre +
    mensajeEdad +
	" y necesitas la supervisión de un adulto"
    "</p>";

  bienvenida.innerHTML = mensaje;

}
var miForm = document.querySelector("#formulario1");

miForm.addEventListener("submit", datos);


function redireccionFormulario() {
	location.href="Formulario.html";
}







