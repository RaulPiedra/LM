var v_boton_lengua=document.getElementById("bl");
var v_boton_mates = document.getElementById("bma");
var v_boton_ingles = document.getElementById("bi");
var v_boton_fisica = document.getElementById("bf");
var v_boton_musica = document.getElementById("bm");

var color = "red";
 v_boton_lengua.addEventListener("click",muestra(color));
 v_boton_mates.addEventListener("click", muestra);
 v_boton_ingles.addEventListener("click", muestra);
 v_boton_fisica.addEventListener("click", muestra);
 v_boton_musica.addEventListener("click", muestra);

 
  var leng = document.getElementsByClassName("lengua");
  var mat = document.getElementsByClassName("mates");
  var ing = document.getElementsByClassName("ingles");
  var fis = document.getElementsByClassName("fisica");
  var mus = document.getElementsByClassName("musica");
  
  function muestra(event) {
            
        for (var i = 0; i < leng.length; i++) {
            leng[i].style.backgroundColor=color;
      }  
    }

  function resalta(array, color){
        for (var i = 0; i < array.length; i++) {
              array[i].style.backgroundColor=color;
        }     
  }