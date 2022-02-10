var v_botones = document.getElementsByTagName("input");
for (var i = 0; i < v_botones.length; i++) {
    v_botones[i].addEventListener("click", fondodiv);
}
var v_div = document.getElementsByClassName("recuadros");
function fondodiv(event) {
    var botonPulsado = event.target.id;
    //v_div[botonPulsado].style.backgroundColor="red";
    //event.target.style.backgroundColor="red";
    this.style.backgroundColor="red";
}