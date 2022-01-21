var precios = [100, 12, 99, 66];
var productos = ["Monitor AOC", "Teclado inalambrico", "Tarjeta grafica", "AMD Ryzen 3"];
document.write("Listado de precios" + "<hr/>");
for (var i = 0; i < precios.length; i++) {
    document.write(productos[i] + ": " + precios[i] + "<br/>");
    document.write("<hr/>");
}
var monitores = prompt("Numero de monitores vendidos:");
var teclados = prompt("Numero de teclados vendidos");
var tarjetas = prompt("Numero de tarjetas graficas vendidas:");
var cpus = prompt("Numero de cpus vendidas:");
var cuenta;
var total_mon, total_tec, total_tar, total_cpus;
total_mon = precios[0] * monitores;
total_tec = precios[1] * teclados;
total_tar = precios[2] * tarjetas;
total_cpus = precios[3] * cpus;
cuenta = total_mon + total_tec + total_tar + total_cpus;
document.write("La cuenta total es de: " + cuenta + "<br/>");

function regalo(cuenta) {
    if(cuenta > 400) {
        document.write("Tiene una camiseta de regalo.");
    }
}
regalo(cuenta);