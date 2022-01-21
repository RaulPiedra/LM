var alumnos = ["Carlos", "Eva", "Luis", "Amparo", "Oscar", "Alma", "Esteban", "Pepe", "Paco", "Ana", "Maria", "Alfonso"];
document.write("Listado de alumnos" + "<hr/>");
for(var i= 0; i < alumnos.length; i++) {
    document.write(i + 1 + ".- " + alumnos[i] + "<br/>");
}
document.write("<hr/>");
document.write("Listado de alumnos" + "<hr/>");
for(var j= 0; j < alumnos.length; j++) {
    var posicion = j + 1
    if (posicion < 10) {
        document.write("0" + posicion + ".- " + alumnos[j] + "<br/>");
    }
    else {
        document.write(posicion + ".- " + alumnos[j] + "<br/>");
    }
    
}
document.write("<hr/>");
for (var k = 0; k < alumnos.length; k++) {
    var posCompleta;
    if (k % 2 == 0) {
        posCompleta = "Clase A - ";
    }
    else {
        posCompleta = "Clase B - ";
    }
    document.write(posCompleta + alumnos[k] + "<br/>");
}

var posicionBuscada = prompt("Introduzca una posicion:");
document.write("El nombre que ocupa esa posicion es: " + nombreposicion(posicionBuscada));
function nombreposicion(posicionBuscada) {
    var nombre = alumnos[posicionBuscada];
    return nombre;
}