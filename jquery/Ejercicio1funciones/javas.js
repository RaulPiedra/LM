$(document).ready(function(){
    $("#boton1").click(function() {
        $("#imagen1").hide(3000).show(4000);
    });
    $("#boton2").click(function() {
        $("#imagen2").fadeOut(3000).fadeIn(3000);
    });
    $("#boton3").click(function() {
        $("#imagen3").slideUp(2000);
    });
    $("#boton33").click(function() {
        $("#imagen3").slideDown(3000);
    });
    $("#boton4").click(function() {
        $("#imagen4").slideUp(3000).slideDown(4000);
    });
    $("#pulsador1").click(function() {
        $("#prueba1").delay(2000).slideUp(2000).delay(2000).slideDown(2000);
    });

    $("#pulsador2").dblclick(function() {
        $("#prueba2").delay(2000).slideUp(2000).delay(2000).slideDown(2000);
    });
    $("#pulsador3").click(function() {
        $("#prueba3").slideToggle(3000);
    });
    
});