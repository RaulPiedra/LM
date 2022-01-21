//Ejercicio para trabajar el condicional si con varias condiciones
//Pedimos por teclado la nota el si ha hecho el trabajo
var nota = prompt("Intro nota");
var trabajo = prompt("Intro trabajo");
//El profesor 1 lo considera APTO si >=5 o si ha hecho el trabajo
document.write("Nota profesor 1: ");
if (nota>=5 || trabajo=="Sí") {
	document.write("APTO");
}
else {
	document.write("NO APTO");
}
document.write("<br/>");
//El profesor 2 exige que saque 5 o más nota y que haya hecho el trabajo
document.write("Nota profesor 2: ");
if (nota>=5 && trabajo=="Sí") {
	document.write("APTO");
}
else {
	document.write("NO APTO");
}
document.write("<br/>*********Mejorado************<br/>");
//Hacemos una pequeña mejora sobre el anterior
//Como se distingue entre mayúsculas y minúsculas
//Y entre con tilde y sin tilde
//Vamos a hacer un si previo que convierte Si, SI y si en ->Sí
//Y comparamos con ese Sí
if (trabajo=="Si" || trabajo=="SI" || trabajo=="si") {
	trabajo="Sí";
}
document.write("Nota profesor 1: ");
if (nota>=5 || trabajo=="Sí") {
	document.write("APTO");
}
else {
	document.write("NO APTO");
}
document.write("<br/>");
document.write("Nota profesor 2: ");
if (nota>=5 && trabajo=="Sí") {
	document.write("APTO");
}
else {
	document.write("NO APTO");
}
//Otra opción que podría haber usado en convertir lo que se introduzca por 
//teclado en mayúsculas o en minúsculas
//Las probamos más abajo para que las probéis sobre la variable trabajo
trabajo = trabajo.toUpperCase();
document.write("<br/>"+ trabajo);
trabajo = trabajo.toLowerCase();
document.write("<br/>"+ trabajo);

