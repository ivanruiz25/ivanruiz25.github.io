
// funcion que al cargar la pagina comprueba si el usuario esta logueado o no 
//cliente
$(document).ready(function(){

  var logueado=leerCookie("logueado");
  console.log(logueado);
// si el usuario esta logueado mostrara un contenedor
// con los iconos de perfil,favoritos y carrito
// y oculta el inicia de sesion y registro
  if(logueado == "") {

    $("#Inusuario").css("display","none");
    $("#Inregistro").css("display","block");

// sino mostrara los enlaces e inicio de sesion y registro
  } else{

     $("#Inregistro").css("display","none");
     $("#Inusuario").css("display","block");
     $(".cookies").css("display","none");
    
  }

});
//funcion que al pulsar el boton de logout elimina la cookie de sesion del usuario
//cliente
$(".logout").on("click",function(){
  // deja la cookie de logueado sin usuario
  setCookie("logueado","");
  // borra el contenedor del usuario y muestra el de registro o inicio de sesion
  $("#Inusuario").css("display","none");
  $("#Inregistro").css("display","block");


});
//funcion que actua al darle a la imagen del corazon
$(".like").on("click",function(){

  var logueado=leerCookie("logueado");

  if(logueado=== ""){

    location.href="form.html";

  } 
});
//funcion que controla el mensaje informacion de cookies
//interfaces
$(".ok").on("click",function(){

  //oculta el div donde se encuentra la informacion de las cookies
  $(".cookies").css("display","none");

});


