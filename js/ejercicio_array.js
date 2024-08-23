var productos = [];

function isFloat(value) {
    const parsedValue = parseFloat(value);
    return !isNaN(parsedValue) && parsedValue.toString() === value.toString();
}

function isInt(value) {
    const parsedValue = parseInt(value);
    return !isNaN(parsedValue) && parsedValue.toString() === value.toString();
}

function agregarProducto() {
    let nombreProducto, precioProducto;

    do {
        nombreProducto = prompt("Ingrese el nombre del producto");
    } while (nombreProducto === "" || nombreProducto === null);

    do {
        precioProducto = prompt("Ingrese el precio del producto");
    } while (!isFloat(precioProducto));

    productos.push({
        id: productos.length + 1,
        nombre: nombreProducto,
        precio: parseFloat(precioProducto)
    });

    alert("El producto se agregó correctamente");
}

function mostrarProductos() {
    let ordenarPor = "0";

    do {
        ordenarPor = prompt("Ingrese un número:\n1 - Ordenar por nombre\n2 - Ordenar por precio");
    } while (ordenarPor !== "1" && ordenarPor !== "2");

    let dir = "0";

    do {
        dir = prompt("Ingrese la dirección:\n1 - Ascendente\n2 - Descendente");
    } while (dir !== "1" && dir !== "2");

    productos.sort((a, b) => {
        if(ordenarPor === "1") {
            if(a.nombre > b.nombre) return dir === "1" ? 1 : -1;
            if(a.nombre < b.nombre) return dir === "1" ? -1 : 1;
            return 0;
        }

        if(ordenarPor === "2") {
            if(a.precio > b.precio) return dir === "1" ? 1 : -1;
            if(a.precio < b.precio) return dir === "1" ? -1 : 1;
            return 0;
        }
    });

    console.table(productos);
}

function eliminar() {
    let id = "";

    do {
        id = prompt("Ingrese el id del producto a eliminar");
    } while (!isInt(id) && parseInt(id) <= 0);

    if(!productos.some(p => p.id === parseInt(id)))
    {
        alert("No se encontró el producto");
        return;
    }

    let producto = productos.find(p => p.id === parseInt(id));

    let index = productos.indexOf(producto);

    productos.splice(index, 1);

    alert("El producto se eliminó correctamente");
}

function app() {
    let opcion = "0";

    do {
        opcion = prompt("Ingrese un número:\n1 - Agregar producto\n2 - Mostrar\n3 - Eliminar\n4 - Salir");

        switch(opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                mostrarProductos();
                break;
            case "3":
                eliminar();
                break;
        }
    } while (opcion !== "4");

    alert("Hasta luego");
}


app();