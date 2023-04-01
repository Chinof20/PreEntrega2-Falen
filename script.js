let productos = [
    {id: 1, nombre: "Arroz",      precio: 10, categoria: "arroz"   },
    {id: 2, nombre: "Combinado",  precio: 15, categoria: "mixto"   },
    {id: 3, nombre: "Tallarin",   precio: 17, categoria: "mixto"   },
    {id: 4, nombre: "KaluWantan", precio: 20, categoria: "especial"},
    {id: 5, nombre: "Aeropuerto", precio: 18, categoria: "arroz"   },
    {id: 6, nombre: "Especial",   precio: 25, categoria: "especial"},
] 

let carrito=[]

let opcion = Number(prompt("             "+
"Bienvenidos a Arigato Restaurant de Comida China\n"+
"1. Ver Productos\n"+
"2. Ver Productos Selecionados\n"+
"0. Para Salir"))


do {

    switch (opcion) {
        case 1:
        let listaProductosMostrar ="Seleccione el numero producto deseado\n"+
        productos.map ( producto => producto.id+". "+producto.nombre+"      Precio -> "+producto.precio).join("\n")
        +"\n7. Para filtar productos"+"\n8. Para ir atras"+"\n0. Para salir"
        let opcion1=Number(prompt(listaProductosMostrar)) 
        let productoSeleccionado = productos.find ( producto => producto.id === opcion1 )
        if(productoSeleccionado){
            carrito.push(productoSeleccionado)
        }else if(opcion1 != 8 && opcion1 !=7 && opcion1 != 0){
            alert("Numero ingresado incorrecto")
            opcion1=Number(prompt(listaProductosMostrar))
        }
        if(opcion1==0){
            opcion = opcion1
        }else if(opcion1 == 7){
            let categoria = prompt("Ingrese una categoria a filtrar\n"+
            "(Arroz - Mixto - Especial)").toLowerCase()
            let categoriaFiltrada = productos.filter( producto => producto.categoria === categoria )
            if(categoriaFiltrada.length === 0){
                alert("No existen nombres de productos con esa categoria")
                opcion1=Number(prompt(listaProductosMostrar))
            }else{
                listaProductosMostrar="Seleccione el numero producto deseado\n"+categoriaFiltrada.map
                ( producto => producto.id+". "+producto.nombre+"        Precio -> "+producto.precio).join("\n")
                let opcion2=Number(prompt(listaProductosMostrar))
                let productoSeleccionado1 = categoriaFiltrada.find ( producto => producto.id === opcion2 )
                while(!productoSeleccionado1){
                    alert("Numero ingresado incorrecto")
                    opcion2=Number(prompt(listaProductosMostrar+"\n0. Para ir atras"))
                    productoSeleccionado1 = categoriaFiltrada.find ( producto => producto.id === opcion2 )
                }
                while(productoSeleccionado1){
                    carrito.push(productoSeleccionado1)
                    alert("Producto agregado con exito")
                    opcion2=Number(prompt(listaProductosMostrar+"\n0. Para ir atras"))
                    productoSeleccionado1 = categoriaFiltrada.find ( producto => producto.id === opcion2 )
                }

            }
        }else if(opcion1 == 8){
            opcion = Number(prompt("             "+
            "Bienvenidos a Arigato Restaurant de Comida China\n"+
            "1. Ver Productos\n"+
            "2. Ver Productos Selecionados\n"+
            "0. Para Salir"))
        }
        break
    
        case 2:
        let precioTotal =0
        for(const pro of carrito){
            precioTotal = precioTotal + pro.precio
        }
        let verProductosCarrito = "Los productos seleccionados fueron\n"+ carrito.map( producto =>
        producto.nombre+"-> "+producto.precio).join("\n")+"\nEl total a pagar es: "+precioTotal
        alert(verProductosCarrito)
        opcion = 0
        break

        case 0:     
        opcion = 0
        break

        default:
        alert("No es una opcion correcta")
        opcion = Number(prompt("             "+
        "Bienvenidos a Arigato Restaurant de Comida China\n"+
        "1. Ver Productos\n"+
        "2. Ver Productos Selecionados\n"+
        "0. Para Salir"))
        break
    }

} while (opcion != 0);