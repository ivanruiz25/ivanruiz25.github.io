# Interfaces

Para esta práctica he utilizado varios métodos para las animación y micro interacción de la pagina

## Menú de navegación 

No he utilizado el menú flotante que se indicaba en práctica, porque no me parecía apropiado para el diseño de mi página, pero he utilizado la micro interacción. Al pasar el ratón por las distintas categorías del menú aparece una línea mostrando en la que esta situado.
Código css: 

 content: "";
    position: absolute;
    height: 3px;
    top: 27px;
    left:0;
    width: 0;
    background-color: #FFFFFF;
    animation: width 0.5s;
    transition: all 0.5s;
    border-radius: 2px;

En el selector hover pongo width:100% para que aparezca la línea creada en el código anterior.

## Micro interacciones

Al pasar el ratón por diferentes botones como los de inicio de sesión y registro, iconos de las imágenes y títulos de las diferentes fotos del carrusel. 
Las acciones en los botones están echas con el selector hover, cambiando el tamaño, la fuente de la letra etc.

## Carrusel

He cogido una función de w3school que al pulsar una de los botones del carrusel oculta todas las imágenes del carrusel dejando la siguiente imagen de la derecha o de la izquierda, dependiendo del botón pulsado.
En lugar de utilizar imágenes he utilizado div con imágenes de fondo y texto, el cual usa una animación css.
Esta animación css está creada mediante un keyframe que empieza con escala (0,0) y termina en una escala (1,1) en un intervalo de tiempo haciendo aparecer el texto. 

## Imágenes 

Al pasar el ratón sobre la imagen aparece un div con la información del producto y los iconos requeridos en la práctica. esta animación está realizada mediante css y el selector hover.

## Scroll

Este ha sido el punto en el que más problemas han surgido, intentando controlar el scroll mediante el alto de la página y la posición en la que se encuentra la imagen, no he podido realizarlo así.
Lo he realizado mediante pixeles, por tanto, en algunas pantallas la animación se producirá en un momento o en otro dependiendo de la resolución de la pantalla.
Cuando llega a los 40px aparece el texto *Los + vendidos* en periodo de tiempo aumentando la opacidad en 1.
Las imágenes aparecen a los 350px y desaparecerán cuando haya menos pixeles de los citados mediante el keyframe escalar, que va desde una escala (0,0) a una escala (1,1) en un periodo de tiempo y al contrario para desaparecer.

