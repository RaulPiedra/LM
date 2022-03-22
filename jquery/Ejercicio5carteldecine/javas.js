const archivosTexto = "Meryl Streep, Tom Hanks, Bruce Greenwood, Bob Odenkirk, Tracy Letts, Sarah Paulson, Matthew Rhys, Alison Brie, Carrie Coon, Jesse Plemons, Bradley Whitford, David Cross, Michael Stuhlbarg, ";
const loveTexto = "";
$(document).ready(function(){
    $("#flotante").hide();
    $(".sinopsis").hide();
    $("#flecha1").click(function(){
        $(".sinopsis").hide();
        $("#sinopsis1").slideDown(1000);
    });

    $("#flecha2").click(function(){
        $(".sinopsis").hide();
        $("#sinopsis2").slideDown(1000);
    });
    $("img").mouseover(function(){
        $(this).css("opacity", 0.6);
    });
    $("img").mouseout(function(){
        $(this).css("opacity", 1);
    });
    $("#imagen1").click(function(){
        var atributo = $(this).attr("src");
        if (atributo == "pelis/archivos.jpg") {
            $(this).attr("src", "pelis/info.png");
        }
        else {
            $("#flotante").fadeIn(1000);
            $("#marco").text("").append(archivosTexto);
            $(this).attr("src", "pelis/archivos.jpg");

        }
    });
    $("#x").click(function(){
        $("#flotante").fadeOut(1000);
    });

});