var jugadores = {"jugadores":
[
     
    {
    "nombre": "Carlos Alcaraz",
    "pais": "España",
    "ranking": 9,
    "mano": "diestro",
    "edad": 18
},
{
    "nombre": "Novak Djokovic",
    "pais": "Serbia",
    "ranking": 1,
    "mano": "diestro",
    "edad": 34
},
{
    "nombre": "Rafael Nadal",
    "pais": "España",
    "ranking": 9,
    "mano": "zurdo",
    "edad": 35
}
    ]
};
var contenido = document.getElementById("contenido");
var boton = document.getElementById("boton");
boton.addEventListener("click", mostrar);
function mostrar() {
    contenido.innerHTML="";
    jugadores.jugadores.forEach(elemento => {
        contenido.innerHTML += "<div class='p-3 mb-2 bg-primary text-white'><ul>" + 
        "<li>Nombre:" + elemento.nombre + "</li>" +
        "<li>Pais:" + elemento.pais + "</li>" +
        "<li>Ranking:" + elemento.ranking + "</li>" +
        "<li>Mano:" + elemento.mano + "</li>" +
        "<li>Edad:" + elemento.edad + "</li>" 
    });
    
}