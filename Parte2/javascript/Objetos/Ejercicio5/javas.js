/*Primera versión:
las imagenes (array) las ponnemos con una opacidad de 0.5
*/
var v_imagenes = document.getElementsByTagName("img");
var v_botones= document.getElementsByTagName("input");
var i;

for (i=0;i<v_imagenes.length;i++) {
v_imagenes[i].style.opacity="0.9";
}
v_botones[0].addEventListener("click",aguaamarga);
function aguaamarga() {
v_botones[0].style.backgroundColor="red";
v_imagenes[0].style.border="15px solid red";
}
v_botones[1].addEventListener("click",cala);
function cala() {
v_botones[1].style.backgroundColor="green";
v_imagenes[1].style.border="15px solid green";
}
v_botones[2].addEventListener("click",negras);
function negras() {
v_botones[2].style.backgroundColor="black";
v_imagenes[2].style.border="15px solid black";
}
v_botones[3].addEventListener("click",reset);
function reset() {
for (var j=0;j<3;j++) {
v_imagenes[j].style.border="";
v_botones[j].style.backgroundColor="#DFE5DD";
}

}
//Botón cerrar. Lo ponemos a la escucha, cuando se pulse cierra la ventana
var b_cerrar=document.getElementById("boton_cerrar");
b_cerrar.addEventListener("click",cierra_ventana);
//Esta es la caja que contiene todo: visible // oculta
var caja_texto=document.getElementById("texto");
//Este es el que contiene el texto
var caja_contenido=document.getElementById("contenido");
function cierra_ventana(){
caja_texto.style.visibility="hidden";
}
//Si no lo hacemos así += me borra el contenido
//Hacemos estas pruebas
//caja_texto.innerHTML="hola a todos";
//caja_texto.innerHTML+="hola a todos";
//No hace falta += finalmente porque lo hemos separado el div y el texto
//Hacemos uno y proponemos los otros dos
const TEXTO_LASSALINAS="La playa de las Salinas es una zona protegida e igualmente de singular belleza. Con más de 5 kilómetros de arena, es la más grande del parque de cabo de Gata. Podrá dar largos paseos y no se sentirá agobiado.";
const TEXTO_MONSUL="La playa de Mónsul es una de las más preciadas de la provincia. Se encuentra dentro del parque natural de Cabo de Gata-Níjar, a muy pocos kilómetros de San José. Sorprende su gigantesca roca en medio de la arena, y está rodeada por un entorno de montañas y formaciones geológicas de formas caprichosas que la convierten en un lugar muy singular.";
//Probamos con esto
//Cambiamos e incluimos un span porque si no cerrar no funciona al añadir con innerHTML
//caja_contenido.innerHTML+=TEXTO_LASNEGRAS;
//Ahora lo hacemos definitivo y proponemos los demás
v_botones[4].addEventListener("click",fsalinas);
function fsalinas() {
caja_texto.style.visibility="visible";
caja_contenido.innerHTML=TEXTO_LASSALINAS;
}
v_botones[5].addEventListener("click",fmonsul);
function fmonsul() {
caja_texto.style.visibility="visible";
caja_contenido.innerHTML=TEXTO_MONSUL;
}