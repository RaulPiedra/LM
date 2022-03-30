$(document).ready(function () {
    $("#cuerpo").hide().fadeIn(2000);

    $("span").mouseenter(function () {
        $(this).css("backgroundColor", "grey");
    });
    $("span").mouseout(function () {
        $(this).css("backgroundColor", "transparent");
    });

    var respuestas = [];

    $(".respuestas").click(function () {
        $(this).css("backgroundColor", "green");
        var pulsado = $(this).attr("id");

        switch (pulsado) {
            case "respuesta1":
                $("#respuesta2").css("backgroundColor", "blue");
                $("#respuesta3").css("backgroundColor", "blue");
                respuestas[0] = 1;
                break;
            case "respuesta2":
                $("#respuesta1").css("backgroundColor", "blue");
                $("#respuesta3").css("backgroundColor", "blue");
                respuestas[0] = 2;
                break;
            case "respuesta3":
                $("#respuesta1").css("backgroundColor", "blue");
                $("#respuesta2").css("backgroundColor", "blue");
                respuestas[0] = 3;
                break;
            case "respuesta4":
                $("#respuesta5").css("backgroundColor", "blue");
                $("#respuesta6").css("backgroundColor", "blue");
                respuestas[1] = 1;
                break;
            case "respuesta5":
                $("#respuesta4").css("backgroundColor", "blue");
                $("#respuesta6").css("backgroundColor", "blue");
                respuestas[1] = 2;
                break;
            case "respuesta6":
                $("#respuesta4").css("backgroundColor", "blue");
                $("#respuesta5").css("backgroundColor", "blue");
                respuestas[1] = 3;
                break;
            case "respuesta7":
                $("#respuesta8").css("backgroundColor", "blue");
                $("#respuesta9").css("backgroundColor", "blue");
                respuestas[2] = 1;
                break;
            case "respuesta8":
                $("#respuesta7").css("backgroundColor", "blue");
                $("#respuesta9").css("backgroundColor", "blue");
                respuestas[2] = 2;
                break;
            case "respuesta9":
                $("#respuesta7").css("backgroundColor", "blue");
                $("#respuesta8").css("backgroundColor", "blue");
                respuestas[2] = 3;
                break;
            case "respuesta10":
                $("#respuesta11").css("backgroundColor", "blue");
                $("#respuesta12").css("backgroundColor", "blue");
                respuestas[3] = 1;
                break;
            case "respuesta11":
                $("#respuesta10").css("backgroundColor", "blue");
                $("#respuesta12").css("backgroundColor", "blue");
                respuestas[3] = 2;
                break;
            case "respuesta12":
                $("#respuesta10").css("backgroundColor", "blue");
                $("#respuesta11").css("backgroundColor", "blue");
                respuestas[3] = 3;
                break;
        }
    });

    var resuelto = [1, 2, 3, 1];
    var aciertos = 0;    

    $("#enviar").click(function(){
        $(window).scrollTop(0);
        for (var i = 0; i < 4; i++) {
            if (resuelto[i] == respuestas[i]) {
                aciertos++;
            }
        }

        
        if (aciertos == 4) {
            $("#aciertos").text("Enhorabuena, el numero de aciertos es:" + aciertos);
        }
        else {
            $("#aciertos").text("Lo siento, el numero de aciertos es:" + aciertos);
        }
        $("#correcta").slideDown(2000);
    });

    $("#cerrar").click(function(){
        $("#correcta").slideUp(2000);        
        $(".respuestas").css("backgroundColor", "blue");
        respuestas = [0, 0, 0, 0];
        aciertos = 0;
    });
    

});