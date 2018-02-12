//recorremos todos los elementos que tiene la misma clase
var comentarios=document.querySelectorAll(".comentarios__boton");

comentarios.forEach((element)=>{
//por cada elemento creamos un evento 
	element.addEventListener("click",function(event){

		  event.preventDefault();

    	var logueado=leerCookie("logueado");

    //sino estamos logueados nos mandara al formulario
    if(logueado=== ""){

      	location.href="form.html";

    } else {

     	var padre=this.parentNode;
     	// si el input esta vacio saltara una ventana de alerta
     	if(padre.childNodes[1].value == "") {
     		alert("Campo vacio");
     	} else{
     		 	var caja= crearComentario(padre);
     					padre.appendChild(caja); }
    
    }
	});
});
//funcion que crea el comentario 
function crearComentario(padre) {

	//formulario donde se encuentra el comentario
	var comentario=padre.childNodes[1].value;
	// leemos la cookie para coger el nombre de usuario 
	var usuario=leerCookie("nombre");
	// creamos el div que contendra el comentario
	var caja= document.createElement("div");
	caja.setAttribute("class","comen");
	//nombre del usuario
	var titulo= document.createElement("h4");
	titulo.setAttribute("class","comen__titulo");
	titulo.innerHTML=usuario;
	// comentario 
	var comen= document.createElement("p");
	comen.setAttribute("class","comen__parrafo");
	comen.innerHTML=comentario;
	//introducimos el nombre del usuario y el comentario en el div
	caja.appendChild(titulo);
	caja.appendChild(comen);
	
	return caja;
};
