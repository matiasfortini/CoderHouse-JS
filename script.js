/*PRODUCTOS
- Remera
- Buzo
- Pantalon
- Campera
*/

//VARIABLES
let idProduct = 0
let product
let stock = 0
let price

let start = confirm ("Desea ingresar nuevos productos?")

//INGRESO DE DATOS Y VALIDACIÓN
function ingresoDatos () {
    do {

        product = prompt ("Ingrese el producto...").toLowerCase()
    
        if (product != "remera" && product != "buzo" && product != "pantalon" && product != "campera") {
            alert ("No trabajamos con ese producto")
        }
    
    }while (product != "remera" && product != "buzo" && product != "pantalon" && product != "campera")

    do {

        size = prompt ("Ingrese talle del producto...").toUpperCase()
    
        if (size != "S" && size != "M" && size != "L" && size != "XL" && size != "XXL") {
            alert ("No trabajamos con ese talle")
        }
    
    }while (size != "S" && size != "M" && size != "L" && size != "XL" && size != "XXL") //Esto no se si está bien, pero es la única manera que encontre de validar un número entero

    do {

        stock = prompt ("Ingrese cantidad del producto...")

        if (stock == null || /\D/.test(stock) || stock == ""){
            alert ("Ingrese un número entero por favor")
        }
    
    }while (stock == null || /\D/.test(stock) || stock == "")
}

//BUCLE
let next = true

while (next) {

    idProduct++

    ingresoDatos ()

    //AGREGA PRECIO DE PRODUCTO DE FORMA AUTOMÁTICA
    switch (product) {
        case "remera":
            price = 2500
            break

        case "buzo":
            price = 6000
            break
        
        case "pantalon":
            price = 4500
            break

        case "campera":
            price = 5000
            break

        default:
            price = " "
    }

    console.log ("ID: " + idProduct + ", " + "Producto: " + product + ", " + "Talle: " + size + ", " + "Stock: " + stock + ", " + "Precio: $" + price)
    
    next = confirm ("Desea agregar otro producto?")
}