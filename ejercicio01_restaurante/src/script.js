var total = 0;
var totalComidas = 0;
var totalBebidas = 0;

const preciosComidas = {
    "pizza" : 2800,
    "empanada" : 500,
    "hamburguesa" : 1300 
}
const nombresComidas = Object.keys(preciosComidas);
const preciosBebidas = {
    "refresco" : 900,
    "limonada" : 650,
    "chicha" : 800
}
const nombresBebidas = Object.keys(preciosBebidas);

function sumarComida() {
    const comidaPedida = document.getElementById("comida").value;
    let disponible = false;

    nombresComidas.forEach((comida) => {
        if (comida == comidaPedida) disponible = true;
    } );

    if (disponible == true) {
        console.log("Está disponible el(la) " + comidaPedida);
        totalComidas += preciosComidas[comidaPedida];
        document.getElementById("pedido").innerText += comidaPedida + " " + preciosComidas[comidaPedida] + "$" + "\n";
    }
    else console.log("No está disponible el(la) " + comidaPedida);

    total += totalComidas;
    totalComidas = 0;
    document.getElementById("total").innerText = total

}

function sumarBebida() {
    const bebidaPedida = document.getElementById("bebida").value;
    let disponible = false;

    nombresBebidas.forEach((bebida) => {
        if (bebida == bebidaPedida) disponible = true;
    } );

    if (disponible == true) {
        console.log("Está disponible el(la) " + bebidaPedida);
        totalBebidas += preciosBebidas[bebidaPedida];
        document.getElementById("pedido").innerText += bebidaPedida + " " + preciosBebidas[bebidaPedida] + "$" + "\n";
    }
    else console.log("No está disponible el(la) " + bebidaPedida);

    total += totalBebidas;
    totalBebidas = 0;
    document.getElementById("total").innerText = total

} 