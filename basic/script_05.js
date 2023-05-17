//comndicionales - if/else
//algoritmo que dependiendo si el o la usuaria son mayor de 18 años habilita un catalogode peliculas violentas
//si el pais es china asi sea mayor de 18 no habilite el catalogo

let age=prompt("ingresa tu edad");
let country=prompt("ingresa tu pais");
if (age >=18 && country== "china|") {
alert("se ha desbloqueado el catalogo de pelis violentas");

} else {
   alert("no tienes permiso para ver este catalogo") 
}

/**
 * operadores de commparacion
 * > : indicar que es mayor a algo
 * < : indicar que es menor a algo
 * == : comparar si el valor es igual al otro
 * >= : si es mayor o igual
 * <= : si es menor o igual
 * != :diferente
 * 
 * operadores logicos
 * &&:
 * ||: O
 */