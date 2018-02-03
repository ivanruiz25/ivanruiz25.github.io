# Desarrollo web en entorno cliente

## Validación del formulario

Para la validación del formulario utilizo tres conceptos:

- HTML5.
- JavaScript con eventos **AddEventListener()**
- funciones JavaScript que valida todos los campos a la ver.

### HTML5 

Para la validación con HTML5 en las etiquetas *input*, utilizo el atributo **required** para los elementos del formulario que son obligatorios y dos expresiones regulares mediante el atributo **pattern** para validar el email y la contraseña.

### AddEventListener()

Este evento lo utilizo para validación interactiva, apareciendo un mensaje en el *input*, mostrando las condiciones que tiene que tener el campo para que sea válido. 

Un ejemplo de código: 

*form["clave"].addEventListener("keyup", function() {*

 **// expresión regular que valida la contraseña**
	var expresion=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/g;
  
  **// si las indicaciones de la expresión no coinciden con la contraseña, mostrara un mensaje de error**
  if (!expresion.test(form["clave"].value)) {
   form["clave"].setCustomValidity("Debe contener más de 8 caracteres, una mayuscula, un número y un simbolo");
  **//sino, no aparece ningun mensaje y el input sera valido**
  }else{
  	form["clave"].setCustomValidity("");
  }
*});*

### Funcion Javascript 

Finalmente, cuando el usuario pulsa enviar, si lo algun dato es incorrecto saltara un mensaje de error de los descritos en el punto anterior. Por prevencion una vez pulsado el boton de enviar comprobare todos los datos de nuevo antes de registrar al usuario mediante una funcion javascript que retorna **true** si todos los datos son correctos o **false** si algun dato de los obligatorios no es correcto.

## Creacion de cookies 

Una vez comprobados todos los datos y si estos son válidos, se crea una cookie con nombre el nombre del usuario y su contraseña.

Ejemplo de codigo: 

**// creacion de la cookie//**
document.cookie = nombre+"="+valor+";path=/";

Una vez creada la cookie la página volvera al Login para que el usuario pueda iniciar sesion. Si inicia sesion correctamente se creara una cookie de sesion:  **logueado= nombreUsuario;**.

En la zona izquierda de la página aparecera un cuadro con los iconos *perfil*, *favoritos*, *carrito* y un boton de *logout* en el cual el usuario podra cerra la sesion.
Si el usuario cierra dicha sesion, la cookie de logueado quedara vacia: **logueado=;**.




