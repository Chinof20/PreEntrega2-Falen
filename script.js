let productos = [
    {id: 1, nombre: "Arroz",      precio: 10, categoria: "arroz"   },
    {id: 2, nombre: "Combinado",  precio: 15, categoria: "mixto"   },
    {id: 3, nombre: "Tallarin",   precio: 17, categoria: "mixto"   },
    {id: 4, nombre: "KaluWantan", precio: 20, categoria: "especial"},
    {id: 5, nombre: "Aeropuerto", precio: 18, categoria: "arroz"   },
    {id: 6, nombre: "Especial",   precio: 25, categoria: "especial"},
] 
let carrito=[]
let opcion = Number(prompt("                "+"Bienvenidos a Arigato Restaurant de Comida China\n"+"1. Ver Productos\n"+
"2. Ver Productos Selecionados\n"+"0. Para Salir"))
let productos1 = productos.map( element => {
    return new Producto(element.id, element.nombre, element.precio,element.categoria)})
do {
    if(opcion == 1){
        let listaProductosMostrar2 ="Seleccione el numero producto deseado\n"+ listaProductosMostrar(productos1)
        +"\n7. Para filtar productos"+"\n8. Para ir atras"+"\n0. Para salir" 
        let opcion1=Number(prompt(listaProductosMostrar2)) 
        let productoSeleccionado = productos1.find ( producto => producto.id === opcion1 )
            if(productoSeleccionado){
                carrito.push(productoSeleccionado)
            }else if(opcion1 != 8 && opcion1 !=7 && opcion1 != 0){
                alert("Numero ingresado incorrecto")
                opcion1=Number(prompt(listaProductosMostrar2))
            }
            if(opcion1==0){
                opcion = opcion1
            }else if(opcion1 == 7){
                let categoria = prompt("Ingrese una categoria a filtrar\n"+
                "(Arroz - Mixto - Especial)").toLowerCase()
                let categoriaFiltrada = productos1.filter( producto => producto.categoria === categoria )
                    if(categoriaFiltrada.length === 0){
                        alert("No existen nombres de productos con esa categoria")
                        opcion1=Number(prompt(listaProductosMostrar2))
                    }else{
                        listaProductosMostrar2="Seleccione el numero producto deseado\n"+ listaProductosMostrar(categoriaFiltrada)
                        let opcion2=Number(prompt(listaProductosMostrar2))
                        let productoSeleccionado1 = categoriaFiltrada.find ( producto => producto.id === opcion2 )
                            while(!productoSeleccionado1){
                                alert("Numero ingresado incorrecto")
                                opcion2=Number(prompt(listaProductosMostrar2+"\n0. Para ir atras"))
                                productoSeleccionado1 = categoriaFiltrada.find ( producto => producto.id === opcion2 )
                            }
                            while(productoSeleccionado1){
                                carrito.push(productoSeleccionado1)
                                alert("Producto agregado con exito")
                                opcion2=Number(prompt(listaProductosMostrar2+"\n0. Para ir atras"))
                                productoSeleccionado1 = categoriaFiltrada.find ( producto => producto.id === opcion2 )
                            }
                    }
            }else if(opcion1 == 8){
                    opcion = Number(prompt("                 "+"Bienvenidos a Arigato Restaurant de Comida China\n"+"1. Ver Productos\n"+"2. Ver Productos Selecionados\n"+"0. Para Salir"))
            }
    }else if(opcion ==2){
        let precioTotal =0
            for(const pro of carrito){
            precioTotal = precioTotal + pro.precio
            }
        let verProductosCarrito = "Los productos seleccionados fueron\n"+ listaProductosMostrar(carrito)+
        "\nEl total a pagar es: "+precioTotal
        alert(verProductosCarrito)
        opcion = 0
    }else if(opcion == 0){
        opcion = 0
    }else{
        alert("No es una opcion correcta")
        opcion = Number(prompt("                "+"Bienvenidos a Arigato Restaurant de Comida China\n"+"1. Ver Productos\n"+"2. Ver Productos Selecionados\n"+"0. Para Salir"))
    }    
} while (opcion != 0);
function listaProductosMostrar(productos){
    return productos.map ( producto => {
       return producto.id+". "+producto.nombre+"      Precio -> "+producto.precio}).join("\n")
}