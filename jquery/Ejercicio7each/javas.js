$(document).ready(function(){
    $("#tecno").prop("checked", true);
    $("#captura").click(function(){
        // Solo funciona con class enlaces en el html (sin enlaces1 y enlaces2)
        /*$(".enlaces").each(function(){
            var enlaceCap = $(this).attr("href");
            $("#texto").append(enlaceCap + "<br/>");
        });*/

        //Con dos clases: enlaces1 y enlaces2
        var claseEnlaces;
        //var activo = $("#venta").is(":checked");
        var activo = $("#venta").prop("checked");
        if (activo) {
            claseEnlaces = ".enlaces1";
        }
        else {
            claseEnlaces = ".enlaces2";
        }
        $(claseEnlaces).each(function(){
            var enlaceCap = $(this).attr("href");
            $("#texto").append(enlaceCap + "<br/>");
        });


    });
    $("#borra").click(function(){
        $("#texto").text("");
    });
    $("a:eq(0)").click(function(){
        $("#texto").append($(this).attr("href") + "<br/>");
        return false;
    });
});