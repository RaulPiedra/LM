 $(document).ready(function(){
     $(".textos").hide();
     $(".mas").click(function(){
         $(this).hide();
         var pulsado = $(this).attr("id");
         var texto;
         switch (pulsado) {
             case "mas1":
                 texto = "texto1";
                 break;
            case "mas2":
                texto = "texto2";
                break;
            case "mas3":
                texto = "texto3";
                break;

         }
         texto = "#" + texto;
         $(texto).show();
     });

     $(".menos").click(function(){
         $(".mas").show();
         $(".textos").hide();

     });
     $("img").click(function(){
         var pulsada = $(this).attr("id");
         switch (pulsada) {
             case "imagen1":
                 $("#imagen").css("background-image", "url('comidas/migas.jpg'").fadeIn(500);
                 break;
            case "imagen2":
         }
     });
             
});