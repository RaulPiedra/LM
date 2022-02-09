const texto1 = "Este es el texto 1";
const texto2 = "Este es el texto 2";
var v_boton1 = document.getElementById("boton1");
var v_boton2 = document.getElementById("boton2");
var v_boton3 = document.getElementById("boton3");
var v_recuadro1 = document.getElementById("recuadro1");
var v_recuadro2 = document.getElementById("recuadro2");
v_boton1.addEventListener("click",escribe1);
v_boton2.addEventListener("click",escribe2);
v_boton3.addEventListener("click",borra);
function escribe1() {
v_recuadro1.innerHTML=texto1;
}
function escribe2() {
v_recuadro2.innerHTML+=texto2+"<br/>";
}
function borra() {
v_recuadro1.innerHTML="";
v_recuadro2.innerHTML="";
}