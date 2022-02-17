window.addEventListener("mousemove", damePosicion);
var v_pantalla = document.getElementById("pantalla");
var v_puntos1 = document.getElementById("puntos1");
var v_puntos2 = document.getElementById("puntos2");
var v_texto = document.getElementById("posicion");
var ganador;
var contador1=0;
var contador2=0;
function damePosicion(event) {
    var posicionX = event.clientX;
    var posicionY = event.clientY;
    v_texto.value="Pos X: " + posicionX + " Pos Y: " + posicionY;
    if (posicionX >= 200 && posicionX <= 400 && posicionY >= 150 && posicionY <= 350) {
        contador1+= 5;
        v_puntos1.value = contador1;
        if (v_puntos1.value == 1000) {
            ganador = "Rojo";
            allerta(ganador);
            
        }
    }
    if (posicionX >= 500 && posicionX <= 700 && posicionY >= 150 && posicionY <= 350) {
        contador2+= 5;
        v_puntos2.value = contador2;
        if (v_puntos2.value == 1000) {
            ganador = "Azul";
            allerta(ganador);
        }
    }
    
}
var v_ganador = document.getElementById("ganador");
function allerta(ganador) {
    v_pantalla.style.visibility="visible";
    v_ganador.innerHTML="El ganador es: " + ganador;

}
var v_cerrar = document.getElementById("x");
v_cerrar.addEventListener("click", cerrando);
function cerrando() {
    window.close();
}