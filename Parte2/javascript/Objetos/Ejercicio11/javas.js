var v_texto = document.getElementById("posicion");
var v_caja = document.getElementById("caja");
document.getElementById("caja").
addEventListener("mousemove", damePosicion);
//window.addEventListener("mousemove", damePosicion);
function damePosicion(event) {
    var posicionX = event.clientX;
    var posicionY = event.clientY;
    v_texto.value = posicionX + ", " + posicionY;
    
    switch (posicionX) {
        case 131:
            v_caja.style.backgroundColor="purple";
            break;
        case 1144:
            v_caja.style.backgroundColor="aquamarine";
    }
    switch (posicionY) {
        case 8:
            v_caja.style.backgroundColor="orange";
            break;
        case 492:
            v_caja.style.backgroundColor="gray";
    }
    
}