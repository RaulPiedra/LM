var v_banner = document.getElementById("banner");


function carga() {
    proceso = setInterval(annoy, 200);
}

function annoy() {
    if (v_banner.style.backgroundColor == "red") {
        v_banner.style.backgroundColor = "blue";
    }
    else {
        v_banner.style.backgroundColor = "red";
    }
}


var v_spoiler1 = document.getElementById("spoiler1");
var v_spoiler2 = document.getElementById("spoiler2");
var v_boton1 = document.getElementById("boton1");
var v_boton2 = document.getElementById("boton2");
var v_boton3 = document.getElementById("boton3");
var v_boton4 = document.getElementById("boton4");

v_boton1.addEventListener("click", muestraSpoiler1);
v_boton2.addEventListener("click", muestraNota1);
v_boton3.addEventListener("click", muestraSpoiler2);
v_boton4.addEventListener("click", muestraNota2);

var pulsado1 = false;
var pulsado2 = false;
var pulsado3 = false;
var pulsado4 = false;

alert("hola");
function muestraSpoiler1() {
    if (pulsado1 == true) {
        v_boton1.value = "spoiler";
        v_spoiler1.style.visibility = "hidden";
        pulsado1 = false;
    }
    else {
        v_boton1.value = "ocultar";
        v_spoiler1.style.visibility = "visible";
        pulsado1 = true;
    }
}

function muestraNota1() {
    if (pulsado2 == false) {
        v_boton2.value = "8";
        v_boton2.style.color = "red";
        pulsado2 = true;

    }
    else {
        v_boton2.style.color = "black";
        v_boton2.value = "Nota";
        pulsado2 = false;
    }

}
function muestraSpoiler2() {
    if (pulsado3 == true) {
        v_boton3.value = "spoiler";
        v_spoiler2.style.visibility = "hidden";
        pulsado3 = false;
    }
    else {
        v_boton3.value = "ocultar";
        v_spoiler2.style.visibility = "visible";
        pulsado3 = true;
    }

}
function muestraNota2() {
    if (pulsado4 == false) {
        v_boton4.value = "10";
        v_boton4.style.color = "red";
        pulsado4 = true;

    }
    else {
        v_boton4.style.color = "black";
        v_boton4.value = "Nota";
        pulsado4 = false;
    }

}