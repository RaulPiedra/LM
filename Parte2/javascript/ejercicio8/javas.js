//Bucles con while,do while y For
//Id probando bucle a bucle
//Usaremos nuevo: función isNaN y Math.random para generar números aleatorios
//Bucle que imprima 10 números
var i=1;
while (i<=10) {
	document.write("Número: " + i + "<br/>");
	i++;
}
document.write("<hr/>");
//Bucle FOR que sume los 5 primeros números naturales
var suma=0;
for (var j = 1; j<=5;j++) {
	suma+=j;
}
document.write("La suma es: " + suma + "<br/>");
document.write("<hr/>");
//Bucle que pida un número y lo pida hasta que no esté entre 1 y 10
do {
	var entrada = prompt("Introduzca un número entre 1 y 10");
} while (entrada<1 || entrada>10);
//Ahora controlamos que no sea un no número
//Usamos la función isNAN -> is not a number
do {
	var entrada = prompt("Introduzca un número cualquiera");
} while (isNaN(entrada));
//Mediante un bucle for generamos 10 números aleatorios
var aleatorio;
for (var k=1;k<=10;k++) {
	aleatorio=parseInt((Math.random()*10)+1);
	document.write(aleatorio + "<br/>");
}
