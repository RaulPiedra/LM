$(document).ready(function () {
    $("#cuerpo").hide().fadeIn(2000);

    $("span").mouseenter(function () {
        $(this).css("backgroundColor", "grey");
    });
    $("span").mouseout(function () {
        $(this).css("backgroundColor", "transparent");
    });

    var proceso = setInterval(cuenta, 1000);
    
    var segundos = 30;
    function cuenta() {
        $("#cuenta").attr("value", segundos);
        if (segundos > 10) {
            $("#cuenta").css("color", "green");
        }
        else if (segundos <= 10 && segundos > 0) {
            $("#cuenta").css("color", "red");
            if (segundos % 2 == 0) {
                $("body").css("backgroundColor", "white");
            }
            else {
                $("body").css("backgroundColor", "red");

            }
            
            //parpadeo = setInterval(cambiaFondo, 500);
        }
        else if (segundos == 0) {
            $("body").css("backgroundColor", "red");
            clearInterval(proceso);
            
        }
        segundos--;
    }    

    var respuestas = [];

    $("#pregunta1 .respuestas").click(function(){
        $("#pregunta1 .respuestas").css("backgroundColor", "blue");
        $(this).css("backgroundColor", "green");
        respuestas[0] = $(this).attr("id");
        
    });

    $("#pregunta2 .respuestas").click(function(){
        $("#pregunta2 .respuestas").css("backgroundColor", "blue");
        $(this).css("backgroundColor", "green");
        respuestas[1] = $(this).attr("id");
                
    });

    $("#pregunta3 .respuestas").click(function(){
        $("#pregunta1 .respuestas").css("backgroundColor", "blue");
        $(this).css("backgroundColor", "green");
        respuestas[2] = $(this).attr("id"); 
               
    });

    $("#pregunta4 .respuestas").click(function(){
        $("#pregunta4 .respuestas").css("backgroundColor", "blue");
        $(this).css("backgroundColor", "green");
        respuestas[3] = $(this).attr("id"); 
               
    });

    var resuelto = ["respuesta1", "respuesta5", "respuesta9", "respuesta10"];    
    aciertos = 0;    

    $("#enviar").click(function(){
        $(window).scrollTop(0);
        for (var i = 0; i < 4; i++) {
            if (resuelto[i] == respuestas[i]) {
                aciertos++;
            }
        }
        alert(aciertos);

        
        if (segundos == -1) {
            $("#aciertos").text("Lo siento, tiempo excedido");
            $("#cuerpo").hide();
        }
        else {
            if (aciertos == 4) {
                $("#aciertos").text("Enhorabuena, el numero de aciertos es:" + aciertos);
            }
            else {
                $("#aciertos").text("Lo siento, el numero de aciertos es:" + aciertos);
            }
        }
        
        
        $("#correcta").slideDown(2000);
    });

    $("#cerrar").click(function(){
        $("#correcta").slideUp(2000);        
        $(".respuestas").css("backgroundColor", "blue");
        location.reload();
        respuestas = [0, 0, 0, 0];
        aciertos = 0;
    });
    

});