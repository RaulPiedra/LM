var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]
var numero = prompt("Introduzca su numero de DNI:");
var letra = letras[numero%23];
var dni = numero + letra;
document.write("Su numero de DNI con la letra es: " + dni);

