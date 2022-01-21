//Ejercicio para trabajar la sentencia switch
//Pedimos un nombre, una cantidad comprada y un tipo de cliente (A-B-C-D)
/*Si es del tipo A: 5% de descuento sobre la compra
  Si es del tipo B: 10%
  Si es del tipo C: 15%
  Si es del tipo D: 20%
  En otro caso: 0%
*/
var nombre = prompt("Intro nombre");
var compra = prompt("Introduzca su compra");
var tipo = prompt("Introduzca el tipo de cliente (A-B-C-D)");
var porcdto;
var dto;
//Si introducen la letra en minúsculas la convertimos en mayúsculas
tipo=tipo.toUpperCase();
switch (tipo) {
		
	case 'A':porcdto=0.05;
			break;
	case 'B': porcdto=0.1;
			break;
	case 'C': porcdto=0.15;
			break;
	case 'D': porcdto=0.20;
			break;
	default: porcdto=0;
}
document.write("Hola " + nombre + ", como usted es del tipo de cliente " + tipo
+ " le corresponde un dto del: " + porcdto*100 + "%" + "<br/>");
dto = compra * porcdto;
document.write("El precio inicial era de: " + compra + "<br/>"); 
compra = compra - dto;
document.write("Y el precio final es de: " + compra); 
