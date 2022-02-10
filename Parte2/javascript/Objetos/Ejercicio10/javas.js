var v_botones = document.getElementsByTagName("input");
var v_cajas = document.getElementsByClassName("ventanas");
var agua = false;
v_botones[0].addEventListener("click", aguaamarga);
function aguaamarga() {
    if (agua == false) {
        v_cajas[0].style.backgroundColor="red";
        v_botones[0].value="OFF";
        agua = true;
    }
    else {
        v_cajas[0].style.backgroundColor="transparent";
        v_botones[0].value="AGUA AMARGA";
        agua = false;
    }
}

var medio = false;
v_botones[1].addEventListener("click", enmedio);
function enmedio() {
    if (medio == false) {
        v_cajas[1].style.backgroundColor="red";
        v_botones[1].value="OFF";
        medio = true;
    }
    else {
        v_cajas[1].style.backgroundColor="transparent";
        v_botones[1].value="CALA ENMEDIO";
        medio = false;
    }
}