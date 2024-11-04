//Ejercicio 1: Gestión de Inventario de Tienda
//Descripción: Crea un objeto que represente una tienda con varios productos. Cada producto debe tener propiedades como nombre, precio y cantidad. Luego, crea funciones para agregar productos, actualizar la cantidad de productos y mostrar la información de todos los productos.

const productos = ["huevos", "gaseosa", "azucar", "arroz"];

//creacion de los detalles de los productos (sus propiedades)
const detallesProductos = {
    huevos: { marca: "kikes", cantidad: 12, disponible: true, precio: 700 },
    gaseosa: { marca: "postobon", cantidad: 20, disponible: true, precio: 2400 },
    azucar: { marca: "manuelita", cantidad: 50, disponible: true, precio: 1700 },
    arroz: { marca: "diana", cantidad: 100, disponible: true, precio: 2600 },
};

console.log(productos);
console.log (detallesProductos);

//Agregar de productos y propiedades
productos.push("cafe", "leche", "arina");
detallesProductos.cafe = { marca: "colcafe", cantidad: 80, disponible: true, precio: 4000 };
detallesProductos.leche = { marca: "alqueria", cantidad: 50, disponible: true, precio: 7000 };
detallesProductos.arina = { marca: "arinapan", cantidad: 0, disponible: false, precio: 4000 };

console.log(productos);
console.log (detallesProductos);
