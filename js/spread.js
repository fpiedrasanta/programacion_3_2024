const numeros1 = [3, 6, 1, 9, 500, 0];
const numeros2 = [1, 90, 600];

const numeros = [...numeros1, ...numeros2];

const numero = Math.max(...numeros);

console.log(numero);

const objeto = {
    ...numeros2
};

console.log(objeto);

const objeto1 = {
    nombre: "Pedro",
    edad: 50,
    tipoDocumento: {
        descripcion: "DNI"
    }
};

//objeto1.colorDefault = "black";

const objeto2 = {
    ...objeto1,
    colorDefault: "black"
};

console.log(objeto1);
console.log(objeto2);

const genre = ['Rock', 'Punk', 'Heavy Metal', 'Pop'];
const genreCopia = [...genre];


genreCopia.sort((a, b) => {
    if(a > b) return 1;
    if(b > a) return -1;
    return 0;
});

console.log(genre);
console.log(genreCopia);

/* REST params */
function sumar(...params) {
    let suma = 0;
    for(const numero of params) {
        suma += numero;
    }

    return suma;
}

function sumar2(n1, n2, n3, n4) {
    return n1 + n2 + n3 + n4;
}

const resultado = sumar(1, 9, 3, 8, 20);
console.log(resultado);

function config(...params) {
    for(const config of params) {
        if(config.key == "mode") {
            //setColorMode(config.value);
            console.log(config.value);
        } else if(config.key == "number-mask") {
            //setNumberMask(config.value);
            console.log(config.value);
        }
    }
}

const configs = [{
    key: "mode", 
    value: "dark"
}, {
    key: "number-mask", 
    value: "#.##0,00"
}]

config(...configs);

config({
    key: "mode", 
    value: "light"
})