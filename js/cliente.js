// funciones para mostrar el login o el registro 
//depiendo el boton que haya tocado el usuario
//funcion inicial
$(document).ready(function(){

	$(".formRegistro").css("display","none");
	$("#login").css("background","#5076EC");
	$(".tarjeta").css("display","none");
// paises recogidos mediante json
var urlPaises = "https://raw.githubusercontent.com/umpirsky/country-list/master/data/es/country.json";
// generador de desplegable de paises
getJSON(urlPaises).then(function(data) { 
  //select que integrara todos los paises
    var select=document.getElementById("pais");

    for(let i in data)   { 

      var option = document.createElement("option");
          option.text = data[i];
          option.setAttribute("value",data[i]); 
          //introducimos en option en el select
          select.add(option);
    }

}, function(status) {
  alert('Algo fue mal');
});

});
//funcion para recoger datos de un json 
var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
        alert('Algo fue mal.');
      }
    };
    xhr.send();
  });
};
//fin de la funcion 
// si pulsa el boton registro
$("#registro").on("click",function(){

	$(".formLogin").css("display","none");
	$(".formRegistro").css("display","block");
	$("#registro").css("background","#5076EC");
	$("#login").css("background","#002EBD");
});
// si pulsa el boton del login
$("#login").on("click",function(){

	$(".formRegistro").css("display","none");
	$(".formLogin").css("display","block");
	$("#login").css("background","#5076EC");
	$("#registro").css("background","#002EBD");

});
// variable que contiene los datos de la cookie
var form=document.forms["formRegistro"];

//creacion del input en el que se introducira la tarjeta de credito
form["direccion"].addEventListener("keyup", function() {

  if (form["direccion"].value != "" && document.getElementById("tarjeta") == null) {
      
      //creamos el input
      var tarjeta=document.createElement("input");
      // le agregamos todos los atributos
      tarjeta.setAttribute("type","text");
      tarjeta.setAttribute("id","tarjeta");
      tarjeta.setAttribute("name","tarjeta");
      tarjeta.setAttribute("placeholder","Tarjeta de Credito");
      //introducimos el elemento creado debajo del select
      $("#pais").after(tarjeta);

  } else if (form["direccion"].value === ""){

    //eliminamos el objeto tarjeta del formulario
    document.forms["formRegistro"].removeChild(document.getElementById("tarjeta"));     
  }

});
// validacion con interactividad
//validacion del email
form["email"].addEventListener("keyup", function() {
  //expresion regular que valida el email
	var expresion=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/g;
  // si el email no es correcto mostrara una ventana con el mensaje
  if (!expresion.test(form["email"].value) ) {
    form["email"].setCustomValidity("Escriba un email valido");
  } else{
  	form["email"].setCustomValidity("");
  }
});
// validacion de la contraseña
form["clave"].addEventListener("keyup", function() {
  // expresion regular que valida la contraseña
	var expresion=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/g;
  // si las indicacion de la expresion no coinciden con la contraseña, mostrara un mensaje de error
  if (!expresion.test(form["clave"].value)) {
   form["clave"].setCustomValidity("Debe contener mas de 8 caracteres, una mayuscula, un numero y un simbolo");
  }else{
  	form["clave"].setCustomValidity("");
  }

});
// comprueba que las dos contraseñas son iguales
form["Rclave"].addEventListener("keyup", function() {


  if (form["clave"].value !== form["Rclave"].value ) {
   form["Rclave"].setCustomValidity("Las claves no coindiden");
  } else{
  	form["Rclave"].setCustomValidity("");
  }

});
// comprueba que el nombre no este vacio 
form["nombre"].addEventListener("keyup", function() {

  if (form["nombre"].value === "" | form["nombre"].value === null ) {
   form["nombre"].setCustomValidity("Escriba un nombre y su apellido");
  } else {
  	 form["nombre"].setCustomValidity("");
  }
});
//fin de la validacion interactiva

//comprobar validacion antes de la creacion de la cookie 
// validacion de todos los input obligatorios a la vez
function validarRegistro() {

  expEmail=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/g;
  expClave=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/g;

 return expEmail.test(form["email"].value) && expClave.test(form["clave"].value) && form["nombre"].value !== "" &&
         form["clave"].value === form["Rclave"].value;

};
//funcion para comprobar que los datos son correctos y si son correcto se creara la cookie
$(".formRegistro").submit(function(event) {

  // si todos los datos son correcto se creara la cookie
   if(validarRegistro()){
    // crea la cookie con el nombre del usuario
    setCookie("nombre",form["nombre"].value);
    // crea la cookie con la contrasenia 
    setCookie("clave",form["clave"].value);
    alert("El usuario ha sido registrado con exito");

  } else {

      alert("Datos incorrectos");
  }

});
// comprobacion de las credenciales 
$(".formLogin").submit(function(event){

  // mete en la variable el nombre que se encuentra en la cookie
  var nombre=leerCookie("nombre");
  // mete la contraseña que se encuentra en la cookie
  var clave=leerCookie("clave");
  // varible que contiene la informacion de los input
  var form=document.forms["formLogin"];

  // si las credenciales son correctas se creara la cookie de sesion logueado= nombre de usuario
  if(nombre === form["nombre"].value && clave === form["clave"].value) {

    setCookie("logueado",form["nombre"].value);
  // sino mostrara un mensaje de error y el evento se parara
  }else {

    $("#mensaje").html("Los datos no son correctos");
    event.preventDefault();
  }


});

//creacion de cookies
function setCookie(nombre,valor) {

    document.cookie = nombre+"="+valor+";path=/";
};
//leer cookie
function leerCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
