function saludar(nombre) {
    alert(`Hola ${nombre}`);
}

const saludar2 = function (nombre) {
    alert(`Hola ${nombre}`);
}

const saludar3 = (nombre) => {
    alert(`Hola ${nombre}`);
}

const saludar4 = (nombre) => alert(`Hola ${nombre}`);

const saludar5 = nombre => alert(`Hola ${nombre}`);

const array = [1, 2, 3, 4, 5];
function buscar(filtro) {
    for(let i = 0; i < array.length; i++)
    {
        if(filtro(array[i])) return array[i];
    }
}

saludar("Juan");
saludar2("Pedro");
saludar3("Juana");
saludar4("Natalia");
saludar5("Chavo");