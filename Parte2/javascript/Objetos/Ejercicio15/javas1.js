var v_anuncio=document.getElementById("anuncio");
var v_cerrar = document.getElementsByTagName("p");
var veces=0; //2 veces el anuncio

function publicidad() {
    proceso = setInterval(salanuncio, 5000);
}
function salanuncio() {
    v_anuncio.style.visibility="visible";
    veces++;
    if (veces==2) {
        clearInterval(proceso);
    }
}

v_cerrar[1].addEventListener("click", cerrar);

function cerrar() {
    v_anuncio.style.visibility="hidden";
}