var notas = [7,8,6,3,10];
var alumnos = [];
alumnos[0] = "Miguel";
alumnos[1] = "Ana";
alumnos[2] = "Paco";
alumnos[3] = "Eva";
alumnos[4] = "Jose";
document.write("Nombbre: " + alumnos[2] + " nota: " + notas[2] +"<br>");
for (var i = 0; i < alumnos.length; i++) {
    document.write("Nombre: " + alumnos[i] + " nota: " + notas[i] + "<br>");
}
//Subimos la nota a un alumno que pedimos por teclado
//Buscamos el alumno y si lo encontramos le subimos un punto
var nombre = prompt("Introduzca un nombre: ");
var encontrado = false;
for (var j = 0; j < alumnos.length; j++) {
    if (nombre == alumnos[j]) {
        encontrado = true;
        break;
    }
}
if (encontrado) {
    if (notas[j] < 10) {
        notas[j] = notas[j] + 1;

    }
    
}
else {
    document.write("Ese alumno no se encuentra");
}
for (var k = 0; k < alumnos.length; k++) {
    document.write("Nombre: " + alumnos[k] + " nota: " + notas[k] + "<br>");
}