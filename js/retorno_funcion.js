/*
function mensajeError(t, b) {
    alert(`IconoError - Rojo\n\n${t}\n\n${b}`);
}

function mensajeSuccess(t, b) {
    alert(`IconoSuccess - Verde\n\n${t}\n\n${b}`);
}

function mensajeInfo(t, b) {
    alert(`IconoInfo - Azul\n\n${t}\n\n${b}`);
}
*/

/*
function mensaje(icono, h1) {
    return (t, b) => { 
        alert(`${icono} - ${h1}\n\n${t}\n\n${b}`); 
    }
}

let mensajeError = mensaje('IconoError', 'Rojo');
let mensajeSuccess = mensaje('IconoSuccess', 'Verde');
let mensajeInfo = mensaje('IconoInfo', 'Azul');

let numero = prompt("Ingrese un número");

if(numero === "5") {
    mensajeSuccess("Excelente!", "El número buscado era un 5");
} else {
    mensajeError("Mal!", "Ese no era el número.");
}

let numero2 = prompt("Ingrese otro número");

if(numero2 === "10") {
    mensajeSuccess("Super excelente!", "El número buscado era un 10");
} else {
    mensajeError("Mal!", "Ese no era el número.");
}

mensajeInfo("Información", "El juego se terminó");
*/

/*
function mayorQue10(numero) {
    if(numero > 10) {
        return true;
    } else {
        return false;
    }
}

function mayorQue18(numero) {
    if(numero > 18) {
        return true;
    } else {
        return false;
    }
}

function mayorQue16(numero) {
    if(numero > 16) {
        return true;
    } else {
        return false;
    }
}
*/
/*
let mayorQue10 = mayorQue(10);
let mayorQue18 = mayorQue(18);
let mayorQue16 = mayorQue(16);

function mayorQue(numero) {
    return (numeroAComparar) => {
        if(numeroAComparar > numero) {
            return true;
        } else {
            return false;
        }
    }
}

alert(mayorQue10(15));
alert(mayorQue10(8));

alert(mayorQue18(20));
alert(mayorQue18(15));
*/

function saludar(saludo) {
    return (persona) => alert(`${saludo} ${persona}`);
}

function saludar2(saludo, persona) {
    alert(`${saludo} ${persona}`);
}

let saludoFormal = saludar("Buenos días sr/sra");
let saludoInformal = saludar("Hola");
let saludoJuvenil = saludar("Que pasa");
let saludoCopado = saludar("Que tul");

saludoFormal("William");
saludoFormal("Lorena");
saludoInformal("Andrea");
saludoInformal("Marcos");
saludoJuvenil("Mauricio");
saludoJuvenil("Johana");
saludoCopado("Lara");

/*
saludar2("Buenos días sr/sra", "William");
saludar2("Buenos días sr/sra", "Lorena");
saludar2("Hola", "Andrea");
saludar2("Hola", "Marcos");
saludar2("Que pasa", "Mauricio");
saludar2("Que onda", "Johana");
saludar2("Que tul", "Lara");
*/