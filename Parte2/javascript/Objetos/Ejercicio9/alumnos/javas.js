var v_boton_lengua=document.getElementById("bl");
var v_boton_mates = document.getElementById("bma");
var v_boton_ingles = document.getElementById("bi");
var v_boton_fisica = document.getElementById("bf");
var v_boton_musica = document.getElementById("bm");
var v_boton_reset = document.getElementById("reset");

var leng = document.getElementsByClassName("lengua");
var mat = document.getElementsByClassName("mates");
var ing = document.getElementsByClassName("ingles");
var fis = document.getElementsByClassName("fisica");
var mus = document.getElementsByClassName("musica");

v_boton_lengua.addEventListener("click",muestraLengua);
v_boton_mates.addEventListener("click", muestraMates);
v_boton_ingles.addEventListener("click", muestraIngles);
v_boton_fisica.addEventListener("click", muestraFisica);
v_boton_musica.addEventListener("click", muestraMusica);
v_boton_reset.addEventListener("click", reset);

var filas = document.getElementsByTagName("td");
var botones = document.getElementsByTagName("input");
function reset() {
      for (var i = 0; i < filas.length; i++) {
            filas[i].style.backgroundColor = "white";
            
      }
      for (var j = 0; j < botones.length; j++) {
            botones[j].style.backgroundColor = "lightgray";
      }
}

function muestraLengua() {
      for (var i = 0; i < leng.length; i++) {
            leng[i].style.backgroundColor = "red";
      }
}
function muestraMates() {
      for (var i = 0; i < mat.length; i++) {
            mat[i].style.backgroundColor = "blue";
      }
}
function muestraIngles() {
      for (var i = 0; i < ing.length; i++) {
            ing[i].style.backgroundColor = "orange";
      }
}
function muestraFisica() {
      for (var i = 0; i < fis.length; i++) {
            fis[i].style.backgroundColor = "gray";
      }
}
function muestraMusica() {
      for (var i = 0; i < mus.length; i++) {
            mus[i].style.backgroundColor = "green";
      }
}