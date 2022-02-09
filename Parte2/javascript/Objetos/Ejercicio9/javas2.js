var v_parrafo1 = document.getElementById("parrafo1");
var v_parrafo2 = document.getElementById("parrafo2");
v_parrafo1.addEventListener("mouseover", colorea);
v_parrafo2.addEventListener("mouseout", colorea);

function colorea(event) {
    var tipo = event.type;
    switch (tipo) {
        case "mouseover":
            this.style.backgroundColor="red";
            break;
        case "mouseout":
            this.style.backgroundColor="blue";
            break;

    }
}

const TEXTO = "nos vamos casi";
var v_div = document.getElementById("final");
v_div.addEventListener("click", function() {
    escribe(TEXTO);
});

function escribe(frase) {
    v_div.innerHTML+=frase;
}