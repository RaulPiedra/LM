var barra_chica = document.getElementById("barrachica");
var numero = document.getElementById("numero");

var ancho=15;
var anchura="";

function move() {
    if (ancho < 265) {
        ancho = ancho + 1;
        anchura = ancho + "px";
        barra_chica.style.width = anchura;
        numero.style.marginLeft = anchura;

    }
    else {
        clearInterval(proceso);
    }
    
    

}
function carga() {
    proceso = setInterval(move, 100);
}

//move();