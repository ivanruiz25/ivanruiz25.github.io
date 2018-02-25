# Repositorio GithubPages
### ivanruiz25.github.io

# Practica AJAX

Para esta práctica he utilizado un servidor json que recoge datos de un json propio para autocompletar el buscador de productos.
Dicho servidor solo funcionara en local, para utilizar dicho servidor hay que seguir varios pasos:
Instalación del servidor:
1.	Instalar node.js
2.	Instalar el servidor con el comando *$ npm install –g json-server*.
Para utilizar dicho servidor, desde la carpeta donde se encuentra el archivo json accionamos el siguiente comando:
*$ json-server - -watch nombredelarchivo.json*
En esta práctica he usado AJAX para la obtención de todos los países de un fichero json y para el autocompletado del buscador recogiendo la información de json propio donde se encuentran los nombres de los productos de la tienda.
Ejemplos:
Camiseta Real Madrid, entrenamiento Sevilla, zapatillas Nike etc.
La obtención de los países se encuentra en el fichero *cliente.js* y abarca desde la **línea 12** hasta la **línea 29**.
El autocompletado del buscador se encuentra en fichero *index.js* y abarca desde la línea desde la **línea 27** hasta la **línea 59**. Todo se encuentra en una función llamada **buscador()**. Dicha función se activa al escribir en input del buscador mediante un evento: *onkeyup="buscador()"*.

