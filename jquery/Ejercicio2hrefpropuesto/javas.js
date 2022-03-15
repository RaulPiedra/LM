$(document).ready(function(){
    $("#imagenes img").mouseover(function(){
        var sobre = $(this).attr("id");
        //alert(sobre);
        switch (sobre) {
            case "imgf1":
                $("#imgf1").css("borderTop", "5px solid blue");
                $("#f1").show().text("").append("test");
                break;
            case "imgf2":
                $("#f2").show().text("").append("test");                                
                break;
            case "imgf3":
                $("#f3").text("").append("test");
                break;
            case "imgf4":
                $("#f4").show().text("").append("test");                
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
                $("#f2").hide();                                
                break;
            case "imgf3":
                $("#f3").hide();
                break;
            case "imgf4":
                $("#f4").hide();                
                break;
            
        }        
    });

});

Text("").append("texto");