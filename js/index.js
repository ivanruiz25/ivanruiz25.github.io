
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

//animaciones
window.onscroll= scroll;

// funcion que actua al hacer scroll
//interfaces
function scroll(){


// controla la animacion del titulo
   if($(document).scrollTop() > 40){

    $(".titulo").animate({opacity:1},3000);

    }
// controla la animacion de los productos
// borra la clase en el que elemento esta oculto y le pone la clase
// en la que se encuentra la animacion
    if($(document).scrollTop() >= 350){

      $(".articulo").removeClass("oculto");
      $(".articulo").addClass("escala");
// sino volvera a ocultar la animacion
    } else{

      $(".articulo").removeClass("escala");
      $(".articulo").addClass("descalar");
    }

 }
// fin de las animaciones    
//funcion que controla el mensaje informacion de cookies
//interfaces
$(".ok").on("click",function(){

  //oculta el div donde se encuentra la informacion de las cookies
  $(".cookies").css("display","none");

});

// comienzo de carrusel
//interfaces
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = $(".mySlides");

  if (n > x.length) {
    
    slideIndex = 1
  }    
  else if (n < 1) {
    slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {

     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
// fin del carrusel
