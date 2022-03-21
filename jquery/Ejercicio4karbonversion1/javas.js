$(document).ready(function(){
    $(".textos").hide();
    //Version 1
    /*$("#hamburguesas").click(function(){
        $("#textohamburguesas").fadeIn(500);
    });
    $("#comidas").click(function(){
        $("#textocomidas").slideDown(500);
    });
    $("#platos").click(function(){
        $("#textoplatos").delay(500).slideDown(1000);
    });*/

    //Version 2
    var clase1=false;
    $("#hamburguesas").click(function(){
        $("#textohamburguesas").slideToggle(500);
        /*if (clase1 ==false) {
            $(this).addClass("encendido");
            clase1 = true;
        }
        else {
            $(this).removeClass("encendido");
            clase1 = false;

        }*/
        $(this).toggleClass("encendido");
    });

});