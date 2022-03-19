$(document).ready(function(){
    const PRIVI = "El Privilegio: Un adolescente acomodado y sus amigos, alumnos de un instituto de élite, destapan una siniestra conspiración mientras investigan una serie de extraños eventos sobrenaturales.";
    const PERDIDOS="Perdidos en el ártico: Basada en hechos reales. En 1909, la expedición danesa Alabama, liderada por el reputado Capitán Ejnar Mikkelsen (Coster-Waldau) emprende una difícil misión para demostrar que Groenlandia no está dividida en dos trozos de tierra y refutar el reclamo de Estados Unidos sobre el territorio. Dejando atrás a su tripulación, le acompañará en el duro viaje, que llegarán a realizar incluso a pie por el hielo, el inexperto Iver Iversen (Joe Cole).";
    const PIECES="Pieces of Her: 8 episodios. Cuando una visita al centro comercial acaba en violencia, una joven descubre un lado desconocido de su madre.";
    const WEEKEND="Fin de semana en Croacia: Cuando su mejor amiga desaparece durante una escapada de fin de semana de chicas a Croacia, Beth se empeña en descubrir qué pasó. Pero cada pista revela una nueva e inquietante mentira, y sus esfuerzos por descubrir la verdad sacan a la luz amargos secretos. ";

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
    $("#imagenes img").click(function(){
        var pulsado = $(this).attr("id");
        var texto;    
        switch (pulsado) {
            case "imgf1":            
                texto = PRIVI;
                break;
            case "imgf2":
                texto = PERDIDOS;                                
                break;
            case "imgf3":
                texto = PIECES;
                break;
            case "imgf4":
                texto = WEEKEND;                
                break;        
        }  
        $("p").hide().text("").append(texto).slideDown(2000);
    });
    
    $("#izquierdo,#derecho").hide().slideDown(7000);

});



