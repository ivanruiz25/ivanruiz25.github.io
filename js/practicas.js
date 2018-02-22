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