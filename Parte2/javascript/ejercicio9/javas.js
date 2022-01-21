//Ejercicio que mezcla los bucles con 
var nombre = prompt("Intro nombre");

/*Cuenta atrás: si es del tipo persona 1 bucle descendente de 1 en 1 hasta el 1 desde el 10
				si es del tipo 2: desde el 100
				si es del tipo 3: desde el 1000
				No se aceptan valores distintos al 1,2 o 3*/
document.write("Hola " + nombre + ", este es tu bucle <br/>");	
//Con un bucle while + una variable booleana controlamos que se introduzca 1,2 o 3			
var control=false;
var tipo;
while (control==false) {				
    tipo = prompt("Introduzca el tipo de persona (válido: 1-2-3)");
	if (tipo==1 || tipo==2 || tipo==3) {
		control=true;
	}
}
var tope;
//Como se introduce por teclado, 
//nos entrará como cadena de texto, por eso lo encerramos entre ''
switch (tipo) {
	case '1':tope=10;
			break;
	case '2':tope=100;
			break;
	case '3':tope=1000;
			break;	
}
var i;
for (i=tope;i>=1;i--) {
	document.write("Vuelta: " + i + "<br/>");
}
/*Hacer primero estos dos más sencillos. Dos bucles: uno hacia abajo y otro hacia arriba*/
/*var tope;
var i;
tope=100;
for (i=tope;i>=1;i--) {
	document.write("Vuelta: " + i + "<br/>");
}
document.write("*****************" + "<br/>");
tope=100;
for (i=1;i<=tope;i++) {
	document.write("Vuelta: " + i + "<br/>");
}*/