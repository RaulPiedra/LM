var v_nombre = document.getElementById("nombre");
var v_repe = document.getElementById("repetido");
var v_boton = document.getElementById("enviar");
v_nombre.addEventListener("change", escribe);
//v_nombre.addEventListener("keypress", escribe);
function escribe() {
    v_repe.value=v_nombre.value.toUpperCase();
}
v_boton.addEventListener("click", autentica);
function autentica() {
    if (v_repe.value == "USUARIO") {
        window.location.href="index.html";
    }
    else {
        window.alert("Usuario incorrecto");
    }
}