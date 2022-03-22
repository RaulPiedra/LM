$(document).ready(function(){
    $(".textos").hide();
    //alerta("Vamos a hacerlo mas rapido");
    function alerta(texto) {
        alert(texto);
    }
    $("a").click(function(){
        var pulsado = $(this).attr("href");
        //$(pulsado).fadeIn(2000);
        //$(pulsado).fadeToggle(2000);
        $(pulsado).slideToggle(500);
    });

});