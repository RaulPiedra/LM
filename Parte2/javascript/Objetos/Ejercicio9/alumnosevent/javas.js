var imagenes = document.getElementsByTagName("img");
for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", opaca);
}

function opaca(event) {
    this.style.opacity="0.5";
}