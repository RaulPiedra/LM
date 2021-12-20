document.write("Incremento de variables");
document.write("<hr>");
var a = 10, b = 20;
document.write("El valor de a es: " + a);
document.write(" y el valor de b es: " + b);
document.write("<hr>");
a++;
b--;
document.write("El valor de a es: " + a);
document.write(" y el valor de b es: " + b);
document.write("<hr>");
a+=10;
b*=10;
document.write("El valor de a es: " + a);
document.write(" y el valor de b es: " + b);
document.write("<hr>");
a = 5;
b = 10;
a-=b;
document.write("El valor de a es: " + a);
document.write(" y el valor de b es: " + b);
document.write("<hr>");
if (a > 0) {
    document.write(a + " es mayor que cero");
}
else {
    document.write(a + " es menor que cero");
}
