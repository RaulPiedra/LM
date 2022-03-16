   $(document).ready(function(){
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
                $(".lengua").css("backgroundColor", "red");
                break;
            case "MATES":
                $(".mates").css("backgroundColor", "aquamarine");
                break;
        }
        
    });



   });