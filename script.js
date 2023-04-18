let id = 0
let category
let nameDesign
let size
let colour
let price
let stock
let next = true 
let selectedProduct

const products = []

const dataEntry = () => {
    while (next) {
        id++
        do {
            category = prompt("Ingrese la categoría del producto").toLowerCase()
            if (category != "remera" && category != "buzo" && category != "pantalon" && category != "campera") {
                alert ("No trabajamos con ese producto")
            }
        }while (category != "remera" && category != "buzo" && category != "pantalon" && category != "campera")
        do {
            nameDesign = prompt("Ingrese el nombre del producto").toLowerCase()
            if (nameDesign === "" || nameDesign === " " || nameDesign === null) {
                alert ("Ingrese un nombre válido para el producto")
            }
        }while (nameDesign === "" || nameDesign === " " || nameDesign === null)    
        do {
            size = prompt ("Ingrese talle del producto").toUpperCase()    
            if (size != "S" && size != "M" && size != "L" && size != "XL" && size != "XXL") {
                alert ("No trabajamos con ese talle")
            }    
        }while (size != "S" && size != "M" && size != "L" && size != "XL" && size != "XXL")        
        do {
            colour = prompt ("Ingrese color del producto").toLowerCase()    
            if (colour != "negro" && colour != "blanco" && colour != "gris") {
                alert ("No trabajamos con ese color")
            } 
        }while (colour != "negro" && colour != "blanco" && colour != "gris")    
        do {
            stock = prompt ("Ingrese stock del producto")
            if (stock == null || /\D/.test(stock) || stock == ""){
                alert ("Ingrese un número entero por favor")
            }    
        }while (stock == null || /\D/.test(stock) || stock == "")
        switch (category) {
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
        products.push(
            {
                id:id,
                categoria:category,
                nombre: nameDesign,
                talle:size,
                color:colour,
                precio:price,
                stock:stock 
            }
        )
        next = confirm("Quiere ingresar un nuevo producto?")
    }
}

const searchIdProduct = () => {
    while (next) {
        const productId = prompt("Ingrese el ID del producto que quiere seleccionar")
        if (productId > 0 && productId <= products.length) {
            selectedProduct = products.find(el => el.id == parseInt(productId))
            break
        } else {
            alert("El ID ingresado no es válido")
            next = confirm("¿Desea volver a ingresar el ID?")
        }
    }
}

const modifyProduct = () => {
    while (next){
        searchIdProduct()
        while (next){
            const fieldToModify = prompt ("Qué campo desea modificar?\n1. Nombre\n2. Precio\n3. Stock")        
            switch (fieldToModify) {
                case "1":
                    let newName
                    do {
                        newName = prompt("Ingrese el nombre del producto").toLowerCase()
                        if (newName === "" || newName === " " || newName === null) {
                            alert ("Ingrese un nombre válido para el producto")
                        }
                    }while (newName === "" || newName === " " || newName === null)
                    selectedProduct.nombre = newName.toLowerCase()
                    break
        
                case "2":
                    let newPrice
                    do {
                        newPrice = parseFloat (prompt ("Ingrese nuevo precio"))
                        if (isNaN(newPrice) || newPrice == null || newPrice == ""){
                            alert ("Ingrese un número por favor")
                        }    
                    }while (isNaN(newPrice) || newPrice == null && newPrice == "")
                    selectedProduct.precio = newPrice
                    break
        
                case "3":
                    let newStock
                    do {
                        newStock = prompt ("Ingrese nuevo stock")
                        if (newStock == null || /\D/.test(newStock) || newStock == ""){
                            alert ("Ingrese un número entero por favor")
                        }    
                    }while (newStock == null || /\D/.test(newStock) || newStock == "")
                    selectedProduct.stock = newStock
                    break
            }
            next = confirm ("Quiere modificar otro campo del mismo producto?")
        }
    next = confirm ("Desea modificar otro producto?")
    }
}

const deleteProduct = () => {
    while (next){
        searchIdProduct()
        if (selectedProduct){
            next = confirm ("Está seguro que quiere eliminar el producto?")
            const productToDelete = products.indexOf(selectedProduct)
            products.splice(productToDelete,1)
        }       
        next = confirm ("Desea eliminar otro producto?") 
    }
}

const startApp = () => {
    console.log (products)
    while(next){
        let start = prompt ("Qué proceso desea realizar?\n1. Ingresar nuevo producto\n2. Modificar producto\n3. Borrar producto")        
        switch (start){
            case "1":
                dataEntry()
                break
                    
            case "2":
                modifyProduct()
                break

            case "3":
                deleteProduct()
                break
            }
        next = confirm("Quiere volver al menú principal?") 
    }
}

startApp()