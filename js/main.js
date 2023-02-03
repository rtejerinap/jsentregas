
class Producto {
    constructor(idProd, precio, nombre, stock, tipo) {
        this.idProd = idProd;
        this.precio = precio;
        this.nombre = nombre;
        this.stock = stock;
    }

}

class Cliente {
    constructor(idcliente, nombrecli, Apellido) {
        this.idcliente = idcliente;
        this.nombrecli = nombrecli;
        this.Apellido = Apellido;
    }

}

function ordenarAZ(prod) {
    prod.sort((x, y) => x.nombre - y.nombre);
}

let idProd = "";
let idPrecio;
let prod = "";
let total = 0;

let usuariosss ="";

const cantidadProds = 6;
const productos = [];



const mates = ["Stitch", "Piston", "Grogu", "Deadpool", "Gokú", "Storm Trooper"];

const precios = [1500, 1700, 1800, 2000, 1400, 1900];

idProd = "tituMate";
idPrecio = "precio";
idimg = "img";
prod = "Mate ";

//creo los objetos productos
for (let i = 1; i <= cantidadProds; i++) {
    productos.push(new Producto(i, precios[i - 1], mates[i - 1], 5))

}


let clientee = new Cliente(1, document.getElementById("user"), document.getElementById("apellido"));

// insterto los nombres de los productos

for (const produ of productos) {
    var objetivo = document.getElementById(idProd + produ.idProd);
    objetivo.innerHTML = " " + prod + produ.nombre;
    var objetivo = document.getElementById(idPrecio + produ.idProd);
    objetivo.innerHTML = "Precio: $ " + produ.precio;
    /*   var objetivo = document.getElementById(idimg+produ.idProd);
      var ruta ="./img/imagen"+produ.idProd+".jpg";
      alert( prod+produ.nombre+' id: '+ruta);
      objetivo.insertAdjacentHTML("afterbegin", <img src={ruta} class={"card-img-top"}></img>); */
}


for (let i = 1; i <= 6; i++) {

    var objetivo = document.getElementById(idProd + i);
    objetivo.innerHTML = prod + mates[i - 1];
}




//Funcion para ir agregando los productos elegidos al carrito

function agregar(id) {
    total = total + precios[parseInt(id) - 1];

    if (parseInt(id) < 7) {


        alert("Sr/a" + clientee.nombrecli + " se agregó Mate " + mates[parseInt(id) - 1] + "  al carrito, $ " + precios[parseInt(id) - 1] + ". Total de compra: " + total)
    }
};
