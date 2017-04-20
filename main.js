window.addEventListener("load", position);

function position(){

/*Reglas de reset para el viewport */
	document.body.style.padding = "0";
	document.body.style.margin ="0";
	document.body.style.textAlign="center";		


/*Creacion del titulo */
var titulo = document.createElement("h1");
var contenido = document.createTextNode("Ejercicio1 - Esquemas");
titulo.appendChild(contenido);
document.body.appendChild(titulo);

/*Creacion del primer Esquema */
var contenedor = document.createElement("div");
	contenedor.style.position = "relative";
	contenedor.style.width = "180px";
	contenedor.style.height = "180px";
	contenedor.style.backgroundColor = "tomato";
	contenedor.style.margin = "20px";
	contenedor.style.left="42%";
	document.body.appendChild(contenedor);

var divMorado = document.createElement("div");
	divMorado.style.width = "90px";
	divMorado.style.height = "90px";
	divMorado.style.position = "absolute";
	divMorado.style.top ="25%";
	divMorado.style.left ="25%";
	divMorado.style.backgroundColor = "#4804A4";
	contenedor.appendChild(divMorado);

var divYellow = document.createElement("div");
	divYellow.style.width = "45px";
	divYellow.style.height = "45px";
	divYellow.style.position = "absolute";	
	divYellow.style.backgroundColor = "yellow";
  	divMorado.appendChild(divYellow);

/*Creación del segundo esquema */

var contenedor2 = document.createElement("div");
	contenedor2.style.position = "relative";
	contenedor2.style.width = "180px";
	contenedor2.style.height = "180px";
	contenedor2.style.backgroundColor = "#0456A4";
	contenedor2.style.margin = "20px";
	contenedor2.style.left= "42%";
	document.body.appendChild(contenedor2);

var divVerde = document.createElement("div");
	divVerde.style.width = "90px";
	divVerde.style.height = "90px";
	divVerde.style.position = "absolute";
	divVerde.style.top ="25%";
	divVerde.style.left ="25%";
	divVerde.style.backgroundColor = "#03A10A";
    contenedor2.appendChild(divVerde);

var divBlack = document.createElement("div");
	divBlack.style.width = "45px";
	divBlack.style.height = "45px";
	divBlack.style.backgroundColor = "black";
   	contenedor2.appendChild(divBlack);

//Creación de enlace para el ejecicio de coders
var enlaceCoders = document.createElement("a");
enlaceCoders.href="coders.html";
var contenido = document.createTextNode("Click a las coders");
enlaceCoders.appendChild(contenido);
console.log(enlaceCoders);
document.body.appendChild(enlaceCoders);

}	