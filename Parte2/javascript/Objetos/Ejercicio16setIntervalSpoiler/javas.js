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