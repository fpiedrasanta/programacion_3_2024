/*let numero1 = prompt("ingrese el primer número");
let numero2 = prompt("ingrese el segundo número");
if(numero1 == numero2){
    alert("Los números son iguales");
} else {
    alert("Los números son diferentes");
}*/

/*
let nombre = prompt("Ingrese su nombre");
let noEsUnNombreValido = (nombre == "");

if(noEsUnNombreValido) {
    alert("No es un nombre válido");
} else {
    alert(`Hola ${nombre}`);
}
*/

/*
if(5 !== "5") {
    alert("SI son diferentes");
} else {
    alert("NO son diferentes");
}
*/

//i++ => i = i + 1;
//i+=2 => i = i + 2;


function solicitar2NumerosEnteros() {
    let strOpcionMenu, strNumero1, strNumero2;
    let intOpcionMenu, intNumero1, intNumero2;

    strNumero1 = prompt("Ingrese el primer valor");
    strNumero2 = prompt("Ingrese el segundo valor");

    intNumero1 = parseInt(strNumero1);
    intNumero2 = parseInt(strNumero2);

    return {
        numero1: intNumero1,
        numero2: intNumero2
    };
}

function mostrarCalculadora()
{
    let strOpcionMenu, strNumero1, strNumero2;
    let intOpcionMenu, intNumero1, intNumero2;

    do {
        strOpcionMenu = prompt("Ingrese una opción:\n1 - Sumar\n2 - Restar\n3 - Salir");
        intOpcionMenu = parseInt(strOpcionMenu);

        if(!isNaN(intOpcionMenu) && intOpcionMenu == 1) {
            let numeros = solicitar2NumerosEnteros();

            if(!isNaN(numeros.numero1) && !isNaN(numeros.numero2)) {
                alert("El resultado es " + (numeros.numero1 + numeros.numero2));
            } else {
                alert("Debe ingresar dos número válidos");
            }
        } else if (!isNaN(intOpcionMenu) && intOpcionMenu == 2) {
            let numeros = solicitar2NumerosEnteros();

            if(!isNaN(numeros.numero1) && !isNaN(numeros.numero2) && numeros.numero1 > numeros.numero2) {
                alert("El resultado es " + (numeros.numero1 - numeros.numero2));
            } else {
                alert("Debe ingresar dos número válidos, el primero además debe ser mayor al segundo");
            }
        }
    } while (intOpcionMenu != 3);
}

mostrarCalculadora();