const muertosTexto="La playa de los Muertos es una excursión de las que no te debes perder. Se encuentra a unos 20km de Mojácar en el municipio de Carboneras. Aunque tristemente su nombre proviene de los cadáveres que llegaban hasta aquí tras los naufragios, a causa las corrientes, su belleza ha sido reconocida en multitud de listas que la nombran como una de las playas más bellas del litoral español.";	
const aguaTexto="Agua Amarga es una localidad y pedanía española perteneciente al municipio de Níjar, en la provincia de Almería. Está situada en la parte nororiental de la comarca Metropolitana de Almería. Cerca de esta localidad se encuentran los núcleos de Carboneras, El Llano de Don Antonio, El Argamasón y Fernán Pérez";
const genovesesTexto="La playa de los Genoveses es una playa del municipio de Níjar, en la provincia de Almería.​Esta playa de San José, a unos 3 km del centro de esta barriada, es una de las más conocidas y apreciadas de la costa de Almería";	
const monsulTexto="La playa de la ensenada de Mónsul, conocida comúnmente como playa de Mónsul o simplemente Mónsul, es una playa de la provincia de Almería que se encuentra en el municipio de Níjar, a unos 4 km del centro de la localidad de San José.​ Es una de las más conocidas y apreciadas de la costa de Almería";
const escullosTexto="En la zona denominada los Escullos encontramos la duna fosilizada más grande del Parque Natural, otras muestras de este tipo de formación geológica los podemos observar en las playas de Genoveses y en el Playazo de Rodalquilar.";
$(document).ready(function(){
    $(".textos:eq(0)").append(muertosTexto);
    $(".textos:eq(1)").append(aguaTexto);
    $(".textos:eq(2)").append(genovesesTexto);
    $(".textos:eq(3)").append(monsulTexto);
    $(".textos:eq(4)").append(escullosTexto);
    $(".textos").hide();
    $("input").click(function(){
        $(this).next(".textos").slideToggle(2000);
        $(this).animate({backgroundColor: 'red',color:'white'}, 3000)
        .animate({width:"35%"}, 500)
        .animate({borderLeftWidth: "100px"}, 2000)
        .animate({borderRadius: "25px"}, 2500)
        .animate({marginLeft:"-=100px"}, 5000);
    });
});