var imagenes = document.getElementsByTagName("img");
for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", ilumina);
}

function opaca(event) {
    this.style.opacity="0.5";
}

var pulsado = [];
for (var j = 0; j < imagenes.length; j++) {
    pulsado[i] = false;
}
function ilumina(event) {
    var codigo = event.target.id;
    if (pulsado[codigo]) {
        this.style.opacity ="1";
        pulsado[codigo] = false;
    }
    else {
        this.style.opacity = "0.5";
        pulsado[codigo] = true;
    }
}