
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
//funcion que auto completa el buscador 
async function buscador(){
  // donde estaran los resultados de la busquedas
  var caja=document.getElementById("resultadoBusqueda");
  // vaciamos dicho div para que no se acumulen los resultados
  //agregamos un color blanco de fondo 
  caja.innerHTML="";
  caja.style.background="#FFFFFF";
  //variable del json, limite de productos que apareceran y datos recogidos en el input
  var urlProductos="https://my-json-server.typicode.com/ivanruiz25/ivanruiz25.github.io/productos?q=";
  var nombreProducto=document.getElementById("buscar").value;
// si el campo de busqueda no esta vacio iniciaremos la busqueda
 if(nombreProducto !== "") {
  // creamos la url completa para buscar en el json
  //la creo en 2 variables porque sino me pone un espacion entre el producto y la paginacion  
  var url=urlProductos.concat(nombreProducto);

  getJSON(url).then(function(data) { 
    // recorremos el resultado 
    for(let i in data)   { 
        // creamos una etiqueta parrafo 
        var parrafo = document.createElement("p");
            //introducimos los datos
            parrafo.innerHTML= data[i].nombre; 
            // le agregamos una clase
            parrafo.setAttribute("class","resultado__parrafo");
            // introducimos el parrafo en el div que contendra los resultados
            caja.appendChild(parrafo);  }

}, function(status) {
  alert('Este compononte solo funciona en local');
});
// quitamos el color de fondo al div
} else{
  caja.style.background="";
} }
//fin del buscador
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


