$(document).ready(function(){
    $("input").css("backgroundColor", "#dfe5dd");
    $("input").css("border", "3px solid red");
    $("input").css("color", "blue").css("borderRadius", "20px");
    $("#faldoncillo").css("textAlign", "center").css("font-size", "2em").css("color", "white");
    $("#faldoncillo").append("Las mejores playas de Almeria");
    $("input").mouseover(function(){
        $(this).css("backgroundColor", "green").css("color", "white");
    })
    $("input").mouseout(function(){
        $(this).css("backgroundColor", "#dfe5dd").css("color", "blue");
    })
    $("#boton1").click(function(){
        $("#faldoncillo").css("backgroundColor", "green").text("").append(" Playa de Los Muertos");
    });
    $("#boton2").click(function(){
        $("#faldoncillo").css("backgroundColor", "green").text("").append(" Playa de Aguaamarga");
    });
    $("#boton3").click(function(){
        $("#faldoncillo").css("backgroundColor", "green").text("").append(" Playa de Genoveses");
    });
    $("#boton4").click(function(){
        $("#faldoncillo").css("backgroundColor", "green").text("").append(" Playa de Monsul");
    });
    $("#boton5").click(function(){
        $("#faldoncillo").css("backgroundColor", "green").text("").append(" Playa de Escullos");
    });
    //version con event
    /*$("input").click(function(event){
        var pulsado = event.target.id;
        //alert(pulsado);
        switch (pulsado) {
            case "boton1":
                $("img").attr("src", "img/muertos.jpg");
                break;
            case "boton2":
                $("img").attr("src", "img/aguaamarga.jpg");
                break;
            case "boton3":
                $("img").attr("src", "img/genoveses.jpg");
                break;
            case "boton4":
                $("img").attr("src", "img/lasnegras.jpg");
                break;
            case "boton5":
                $("img").attr("src", "img/escullos.jpg");
        }
    });*/
});

//segunda version con attr
$("input").click(function(){
    var pulsado = $(this).attr("id");
    //alert(pulsado);
    switch (pulsado) {
        case "boton1":
            $("img").attr("src", "img/muertos.jpg");
            break;
        case "boton2":
            $("img").attr("src", "img/aguaamarga.jpg");
            break;
        case "boton3":
            $("img").attr("src", "img/genoveses.jpg");
            break;
        case "boton4":
            $("img").attr("src", "img/lasnegras.jpg");
            break;
        case "boton5":
            $("img").attr("src", "img/escullos.jpg");
    }
});