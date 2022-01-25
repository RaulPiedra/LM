var quinielaGanadora = [];
var quinielaRellena = [];
var aleatorio1, aleatorio2;
var aciertos = 0;

for (var i = 0; i < 15; i++) {
    aleatorio1 = parseInt(Math.random() * 3 + 1);
    if (aleatorio1 == 3) {
        aleatorio1 = "X";
    }
    quinielaGanadora[i] = aleatorio1;

    aleatorio2 = parseInt(Math.random() * 3 + 1);
    if (aleatorio2 == 3) {
        aleatorio2 = "X";
    }
    quinielaRellena[i] = aleatorio2;
}

document.write("Ganadora    Rellena" + "<br/>");
for (i = 0; i < 15; i++) {
    document.write(quinielaGanadora[i] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + quinielaRellena[i] + "<br/>");
    if (quinielaGanadora[i] == quinielaRellena[i]) {
        aciertos++;
    }
}
document.write("Numero de aciertos: " + aciertos + "<br/>");

function premio(aci) {
    var cantidad;
    cantidad = aci * 2;
    return cantidad;
}

document.write("Usted cobrara: " + premio(aciertos) + "€");