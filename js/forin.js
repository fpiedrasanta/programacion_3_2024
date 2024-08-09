function Persona(nombre, apellido, edad) {
    //Atributos
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = this.nombre + " " + this.apellido;
    
    //Acciones
    this.saludar = function () { 
        alert(
            `${this.nombreCompleto} tiene ${this.edad} años`
        ); 
    }
}

const persona = new Persona("Pedro", "Almodovar", 60);

for(const atributo in persona) {
    console.log(`${atributo}: ${persona[atributo]}`);
}