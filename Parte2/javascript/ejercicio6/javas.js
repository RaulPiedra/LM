var precio = prompt("Intro precio");
var porcdto=0;
var dto;
var edad = prompt("Intro edad");
var vip = prompt("Eres VIP");
var cantidad = prompt("Intro cantidad");
//Ejercicio de repaso de si. Muy sencillo por si queda alguna duda con esto
/*Pedimos el nombre:
y la cantidad comprada
Tenemos que calcular el dto que le aplicamos
si la cantidad es mayor de 100 € (inc.) --> 5% si no un 2%
si es menor de 25 años (inc.) --> otro 5%
si es cliente VIP de la tienda -->5%
si ha comprado más de 1000 € este año -->10%*/
if (precio >=100) {
	porcdto+=5;
}
else {
	porcdto+=2;
}
if ( edad<=25) {
	porcdto+=5;
}
if ( vip=="Sí") {
	porcdto+=5;
}
if (cantidad >=1000) {
	porcdto+=10;
}
dto = precio*porcdto/100;
precio-=dto;
document.write("<hr/>");
document.write("El % de dto obtenido es del: " + porcdto +"%"+ "<hr/>");
document.write("El precio final es de " + precio + "<hr/>");