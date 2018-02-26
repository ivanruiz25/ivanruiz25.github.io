# Repositorio GithubPages
### ivanruiz25.github.io

# Practica AJAX

Para esta práctica he utilizado un servidor json que recoge datos de un json propio para autocompletar el buscador de productos.
Dicho servidor esta una url que entra en el repositorio de GitHub y recoge los datos del json.

URL: **https://my-json-server.typicode.com/ivanruiz25/ivanruiz25.github.io/productos**.

El json propio utilizado para esta practica se encuentra en en el repositorio con el nombre **db.json**.

En esta práctica he usado AJAX para la obtención de todos los países de un fichero json y para el autocompletado del buscador recogiendo la información de json propio donde se encuentran los nombres de los productos de la tienda.

Ejemplos:

Camiseta Real Madrid, entrenamiento Sevilla, zapatillas Nike etc.

La obtención de los países se encuentra en el fichero *cliente.js* y abarca desde la **línea 12** hasta la **línea 29**.

El autocompletado del buscador se encuentra en fichero *index.js* y abarca desde la línea desde la **línea 27** hasta la **línea 59**. Todo se encuentra en una función llamada **buscador()**. Dicha función se activa al escribir en input del buscador mediante un evento: *onkeyup="buscador()"*.
