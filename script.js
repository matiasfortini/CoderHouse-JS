//VARIABLES
let idProducto = 0
let producto
let talle
let stock = 0
let precio

let inicio = confirm ("Desea ingresar nuevos productos?")

//INGRESO DE DATOS Y VALIDACIÓN
function ingresoDatos () {
    do {

        producto = prompt ("Ingrese producto...").toLowerCase()
    
        if (producto != "remera" && producto != "buzo" && producto != "pantalon" && producto != "campera") {
            alert ("No trabajamos con ese producto")
        }
    
    }while (producto != "remera" && producto != "buzo" && producto != "pantalon" && producto != "campera")

    do {

        talle = prompt ("Ingrese talle del producto...").toUpperCase()
    
        if (talle != "S" && talle != "M" && talle != "L" && talle != "XL" && talle != "XXL") {
            alert ("No trabajamos con ese talle")
        }
    
    }while (talle != "S" && talle != "M" && talle != "L" && talle != "XL" && talle != "XXL")

    do {

        stock = prompt ("Ingrese cantidad del producto...")

        if (stock == null || /\D/.test(stock) || stock == ""){
            alert ("Ingrese un número entero por favor")
        }
    
    }while (stock == null || /\D/.test(stock) || stock == "")
}

let continuar = true


//BUCLE
while (continuar) {

    idProducto++

    ingresoDatos ()

    //AGREGA PRECIO DE PRODUCTO DE FORMA AUTOMÁTICA
    switch (producto) {
        case "remera":
            precio = 2500
            break

        case "buzo":
            precio = 6000
            break
        
        case "pantalon":
            precio = 4500
            break

        case "campera":
            precio = 5000
            break

        default:
            precio = " "
    }

    console.log ("ID: " + idProducto + ", " + "Producto: " + producto + ", " + "Talle: " + talle + ", " + "Stock: " + stock + ", " + "Precio: $" + precio)
    
    continuar = confirm ("Desea agregar otro producto?")
}