$(document).ready(function(){
    $("#imagenes img").mouseover(function(){
        var sobre = $(this).attr("id");
        //alert(sobre);
        switch (sobre) {
            case "imgf1":
                $("#imgf1").css("borderTop", "5px solid blue");
                $("#f1").show().text("").append("El Privilegio");
                break;
            case "imgf2":
                $("#f2").show().text("").append("Against the Ice");                                
                break;
            case "imgf3":
                $("#f3").show().text("").append("Pieces of Her");
                break;
            case "imgf4":
                $("#f4").show().text("").append("The Weekend Away");                
                break;
            
        }        
    });
    $("#imagenes img").mouseout(function(){
        var sobre = $(this).attr("id");
        //alert(sobre);
        switch (sobre) {
            case "imgf1":
                $("#imgf1").css("borderTop", "none");
                $("#f1").hide();
                break;
            case "imgf2":
                $("#imgf2").css("borderTop", "none");
                $("#f2").hide();                                
                break;
            case "imgf3":
                $("#imgf3").css("borderTop", "none");
                $("#f3").hide();
                break;
            case "imgf4":
                $("#imgf4").css("borderTop", "none");
                $("#f4").hide();                
                break;
            
        }        
    });

});
$("#imagenes img").click(function(){
    var sobre = $(this).attr("id");
    //alert(sobre);
    switch (sobre) {
        case "imgf1":
            
            $("#f1").show().text("").append("El Privilegio");
            break;
        case "imgf2":
            $("#f2").show().text("").append("Against the Ice");                                
            break;
        case "imgf3":
            $("#f3").show().text("").append("Pieces of Her");
            break;
        case "imgf4":
            $("#f4").show().text("").append("The Weekend Away");                
            break;
        
    }        
});

