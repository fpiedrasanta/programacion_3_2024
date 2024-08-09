class Persona {
    #nombre
    #apellido
    #edad

    constructor(nombre, apellido, edad) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
}

const persona = new Persona("Pedro", "Almodovar", 65);

console.log(persona.getNombre());