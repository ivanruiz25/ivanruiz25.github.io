# Repositorio GithubPages
### ivanruiz25.github.io

# Practica DOM

Esta práctica se compone de 3 componentes, los 2 primeros componentes esta creados en el archivo *cliente.js*, porque en el archivo *dom.js* daba algún fallo y no cargaba la creación de los comentarios. 

1. Creación de Select de Países

Esta creación se encuentra en el archivo *cliente.js* desde la línea 12 hasta la línea 43.
He utilizado un array de paises sacado de internet. Creo una etiqueta **select** con DOM y a continuación recorro el array mencionado antes de recorrerlo mediante un *foreach*. En el foreach creo una etiqueta **option** con DOM, le añado el país e introducto la etiqueta option en el select creado con anterioridad.

2. Creación de campo para la Tarjeta de Crédito

Esta creación se encuentra en el archivo *cliente.js* desde la línea 70 hasta la línea 86.
Mediante un evento compruebo si campo dirección esta vacío, sino esta vacío creo el input donde se introducirá la tarjeta mediante DOM, si la tarjeta ya existe no creará una nueva y si se encuentra vacío se borrará mediante DOM dicho input.

3. Creación de comentarios

Todo lo que tiene que ver con esta creación se encuentra en el fichero *dom.js*.
Si se pulsa el botón enviar sin estar logueado, la página nos enviara al formulario de registro.
Si el input se encuentra vacío al pulsar el botón, saltara una alerta indicando que dicho campo se encuentra vacío y no se creara ningún comentario, si el campo este relleno se creara un nuevo comentario mediante DOM con el nombre del usuario logueado y su comentario.
He tenido problemas a la hora ocultar el div donde se encuentran los comentarios, por eso he optado porque se queden a la vista, al encontrarse el icono en un div diferente y haber podido conseguir llegar al div deseado mediante ParentNode y childNodes.
