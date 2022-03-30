$(document).ready(function(){
    $("#cuerpo").hide().fadeIn(2000);

    $("span").mouseenter(function(){
        $(this).css("backgroundColor", "grey");
    });
    $("span").mouseout(function(){
        $(this).css("backgroundColor", "transparent");
    });
});