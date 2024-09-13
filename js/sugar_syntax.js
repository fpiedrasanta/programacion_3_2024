let strNumero = prompt("¿Cuando es el día del programador?");

/*
Sintáxis tradicional If - Else

if(numero == "256") {
    alert("¡Exacto! Feliz día");
} else {
    alert("No, ese no es el día");
}
*/

//Sugar if - else: ternario
let numero = !isNaN(parseInt(strNumero)) ? parseInt(strNumero) : 0;

/* INCORRECTO: No hacer. Al uncle Bob no le gusta esto. 
   ESTO NO ES UN TERNARIO.
*/
/*
if(numero === 256) alert("¡Excelente!"); else alert("No, ese no es el día");
*/

/*
Sintáxis tradicional If sin Else

if(numero === 0) {
    alert("Debe ingresar un número");
}
*/

//Sugar: If sin Else.
numero === 0 && alert("Debe ingresar un número");

//Sintáxis tradicional - If solo con el Else
/*if(numero === 0) {

} else {
    alert("Es un número");
}*/

//alert(parseInt(strNumero) || "NO ES UN NÚMERO");
//let numero2 = !isNaN(parseInt(strNumero)) ? parseInt(strNumero) : 0;

//Sugar syntax - if solo con el else.
let numero2 = parseInt(strNumero) || 0;
alert(numero2);

let nombre = prompt("Ingrese su nombre");
let saludo = `Hola ${(nombre || "desconocido")}`;
alert(saludo);

//Sintáxis tradicional - If solo con el Else
/*if(nombre !== null || nombre !== udefined) {

} else {
    alert("Es un número");
}*/

/*Sugar syntax: Valida solo null y undefined */
function sumar(numero1, numero2) {
    return (numero1 ?? 0) + (numero2 ?? 0);
}

let resultado = sumar();
alert(resultado);

const arrayPersonas = [{
    nombre: "Persona1",
    id: 1
}, {
    nombre: "Persona2",
    id: 2
}, {
    nombre: "Persona3",
    id: 3
}];

const persona = arrayPersonas.find(x => x.id === 4);

/* Sintáxis tradicional para evaluar un objeto null o undefined */
/*
if(persona == null || persona == undefined) {
    alert(`Hola objeto desconocido sin id`);
} else {
    alert(`Hola ${persona.nombre} con id ${persona.id}`);
}
*/

alert(`Hola ${persona?.nombre} con id: ${persona?.id ?? "0"}`);
console.log("HOLA!");
