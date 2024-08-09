const persona = {
    nombre: "Juan",
    apellido: "De los Palotes",
    edad: 45
};

//alert(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años`);

persona.nombre = "Maria";
persona.apellido = "De los Ángeles";
persona.edad = 35;

//alert(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años`);

function Persona(nombre, apellido, edad, metodoSalida) {
    //Atributos
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = this.nombre + " " + this.apellido;
    
    //Acciones
    this.saludar = function () { 
        metodoSalida(
            `${this.nombreCompleto} tiene ${this.edad} años`
        ); 
    }
}

function mostrar(persona) {
    alert(`${persona.nombreCompleto} tiene ${persona.edad} años`);
}

const alerta = function (mensaje) {
    alert(mensaje)
}

const consola = mensaje => console.log(mensaje);

const persona1 = new Persona(
    "Chapulin", 
    "Colorado", 
    25, 
    alerta
);

const persona2 = new Persona(
    "Jorge", 
    "Pinarello", 
    35, 
    consola
);

persona1.saludar();
persona2.saludar();

persona1.nombre = "Carlos";
persona1.apellido = "Perez";
persona1.nombreCompleto = "Carlos Perez";

persona1.saludar();

function Persona2(persona) {
    this.nombre = persona.nombre;
    this.apellido = persona.apellido;
    this.edad = persona.edad;
    this.nombreCompleto = persona.nombreCompleto;
}

const persona3 = new Persona2(persona1);
mostrar(persona3);

alerta("HOLA MUNDO");
consola("CHAU MUNDO");