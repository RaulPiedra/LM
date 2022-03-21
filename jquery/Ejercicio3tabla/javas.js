   $(document).ready(function(){
       var color;
       var clase;
       /*$("#boton1").click(function(){
           //$(".lengua").css("backgroundColor", "red");
           //$(".lengua, .mates").css("backgroundColor", "red");
           //$(".lengua:first").css("backgroundColor", "red");
           //$(".lengua:last").css("backgroundColor", "red");
           $(".lengua:eq(0)").css("backgroundColor", "red");
       });
       $("#boton2").click(function(){
        
        $(".mates").css("backgroundColor", "aquamarine");
    });
    $("#restaurar").click(function(){
        
        $("td").css("backgroundColor", "transparent");
    });*/

    //Segunda version

    $("input").click(function(event){
        //var pulsado = event.target.value;
        var pulsado = $(this).attr("value");
        switch (pulsado) {
            case "LENGUA":
                color = "red";
                clase = "." + pulsado.toLowerCase();
                //$(".lengua").css("backgroundColor", "red");
                break;
            case "MATES":
                color = "aquamarine";
                clase = "." + pulsado.toLowerCase();
                //$(".mates").css("backgroundColor", "aquamarine");
                break;
            case "RESTAURAR":
                color = "transparent";
                clase = "td";
                break;
            case "INGLES":
                color = "orange";
                clase = "." + pulsado.toLowerCase();
                break;
        }
        $(clase).css("backgroundColor", color);
        
    });

   });