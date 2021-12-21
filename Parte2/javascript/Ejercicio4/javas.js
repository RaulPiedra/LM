var nombre=prompt("Intro nombre");
var compra=prompt("Intro compra:");
var dto = false;
var cantdto;
//15% si la compra es superior a 100, si no 0% descuento
if (compra > 100) {
    dto = true;
}
if (dto == true) {
    document.write("Hola " + nombre + ", le vamos a hacer un 15% de descuento");
    cantdto = compra * 0.15;
}
else {
    document.write("Hola " + nombre + " no le aplicamos descuento");
    cantdto = 0;
}
document.write("<hr>");
compra = compra - cantdto;
document.write("Su compra es de " + compra);