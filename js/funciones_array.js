class Collection {
    constructor(array) {
        this.array = array;
    }

    forEach = (callbackfn) => {
        for(let i = 0; i < this.array.length; i++) {
            callbackfn(this.array[i]);
        }
    }

    find = (predicate) => {
        for(let i = 0; i < this.array.length; i++) {
            if(predicate(this.array[i])) {
                return this.array[i];
            }
        }
    }

    filter = (predicate) => {
        const result = [];

        for(let i = 0; i < this.array.length; i++) {
            if(predicate(this.array[i])) {
                result.push(this.array[i]);
            }
        }

        return result;
    }

    some = (predicate) => {
        for(let i = 0; i < this.array.length; i++) {
            if(predicate(this.array[i])) {
                return true;
            }
        }

        return false;
    }

    map = (callbackfn) => {
        const retorno = [];

        let resultado = 0;
        for(let i = 0; i < this.array.length; i++) {
            resultado = callbackfn(this.array[i]);
            retorno.push(resultado);
        }

        return retorno;
    }

    reduce = (callbackfn) => {
        let resultado = 0;
        for(let i = 0; i < this.array.length; i++) {
            resultado = callbackfn(resultado, this.array[i]);
        }
        return resultado;
    }
}

const collection = new Collection([1, 2, 3, 4, 5]);

const array = [1, 2, 3, 4, 5];

const resultado = array.sort((a, b) => {
    if(a > b) return -1;
    if(b > a) return 1;
    return 0
});

console.table(resultado);


const array2 = [{
    title: "Boca", 
    body: "3",
    meGusta: 3
}, {
    title: "Brazo", 
    body: "1",
    meGusta: 1
}, {
    title: "Pierna", 
    body: "10",
    meGusta: 10
}, {
    title: "Pie", 
    body: "0",
    meGusta: 0
}, {
    title: "Codo", 
    body: "8",
    meGusta: 8
}];

const resultado2 = array2.sort((a, b) => {
    if(a.title > b.title) return 1;
    if(b.title > a.title) return -1;
    return 0;
});

console.table(resultado2);

/*
let resultado = array.reduce((acumulado, item) => {
    return acumulado + item;
});

console.log(resultado);

resultado = collection.reduce((resultadoAnterior, item) => {
    return resultadoAnterior + item;
});

console.log(resultado);

resultado = array.reduce((acumulado, item) => {
    console.log(acumulado);
    return acumulado + item;
});
console.log(resultado);

function factorial(numero) {
    const array = [];

    for(let i = 1; i <= 5; i++) {
        array.push(i);
    }

    return array.reduce((i, j) => {
        return i * j;
    });
}

alert(factorial(5));
*/
/*
const array2 = [{
    title: "Post", 
    body: "Comentario"
}, {
    title: "Post", 
    body: "Comentario"
}, {
    title: "Post", 
    body: "Comentario"
}, {
    title: "Post", 
    body: "Comentario"
}, {
    title: "Post", 
    body: "Comentario"
}];

const results = array.map(item => item * 2);
console.table(results);

const results2 = collection.map(item => item * 2);
console.table(results2);

const test = document.getElementById("test");

let templates = array2.map(item => {
    return `<div style='color:red;border: 1px solid black; padding:4px; border-radius:4px;'>${item.title}<br>${item.body}</div>`;
});

for(let i = 0; i < templates.length; i++) {
    test.innerHTML += templates[i];
}
*/

/*
let existe = array.some(item => item === 3);
console.log(existe);

existe = array.some(item => item === 10);
console.log(existe);

existe = collection.some(item => item === 3);
console.log(existe);

existe = collection.some(item => item === 10);
console.log(existe);
*/

/*
const resultados1 = array.filter(item => item > 1);
console.log(resultados1);

const resultados2 = array.filter(item => item > 1 && item < 4);
console.log(resultados2);

const resultados3 = collection.filter(item => item > 1);
console.log(resultados3);
*/

/*
let numeroBuscado = array.find(itemDelArray => itemDelArray == 3);
console.log(numeroBuscado);

numeroBuscado = array.find(itemDelArray => itemDelArray == 10);
console.log(numeroBuscado);

numeroBuscado = array.find((itemDelArray) => {
    if(itemDelArray == 5) {
        return true;
    } else {
        return false;
    }
});
console.log(numeroBuscado);

numeroBuscado = array.find(i => i > 1 && i < 3 && i != 0 && i > 0);
console.log(numeroBuscado);

numeroBuscado = collection.find(itemDelArray => itemDelArray == 3);
console.log(numeroBuscado);

numeroBuscado = collection.find(itemDelArray => itemDelArray == 10);
console.log(numeroBuscado);
*/

/*
function mostrar(itemDelArray) {
    console.log(itemDelArray);
}

array.forEach(mostrar);
collection.forEach(mostrar);

array.forEach(itemDelArray => console.log(itemDelArray));
collection.forEach(itemDelArray => console.log(itemDelArray));
*/
