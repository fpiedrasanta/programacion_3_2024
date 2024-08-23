/*
const array = [2, 3, 4, 5, 6];

for(let i = 2; i < array.length; i++) {
    console.log(`B.${i - 1}) ${array[i]}`);
}*/

class Matematica {
    constructor(array) {
        this.array = array;
    }

    promedioNumeros(condicion) {
        const numeros = this.#filtrar(this.array, condicion);
        const promedio = Matematica.obtenerPromedio(numeros);
    
        return promedio;
    }

    #filtrar(array, cumpleCondicion) {
        const elementos = [];
        for(let i = 0; i < array.length; i++) {
            if(cumpleCondicion(array[i])) {
                elementos.push(array[i]);
            }
        }
        return elementos;
    }

    static obtenerPromedio(array) {
        if(array.length == 0) return 0;
        
        let suma = 0;
        for(let i = 0; i < array.length; i++) {
            suma += array[i];
        }
    
        return suma/array.length;
    }
}

let numeros = new Matematica([2, 1, 5, 6]);

console.log(numeros.promedioNumeros(x => x % 2 == 0));
console.log(numeros.promedioNumeros(x => x % 2 != 0));
console.log(numeros.promedioNumeros(x => true));
console.log(numeros.promedioNumeros(x => false));
console.log(numeros.promedioNumeros(x => x >= 6));


