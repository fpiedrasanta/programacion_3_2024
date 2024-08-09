function isFloat(value) {
    const parsedValue = parseFloat(value);
    return !isNaN(parsedValue) && parsedValue.toString() === value.toString();
}

function getNumber(message) {
    while(true) {
        const number = prompt(message);
        if(isFloat(number)) return parseFloat(number);
        else alert("El valor ingresado no es un número decimal válido");
    }
}

function getIVA(value, percentage) {
    return value * (1 + percentage/100);
    //1000 * 0.1 = 1100
}

function getDiscount(value, discount) {
    return value * (1 - discount/100);
}

const getResult = function (value, iva, desc) {
    let valorConIVA = getIVA(value, iva);
    let valorConDescuento = getDiscount(valorConIVA, desc);
    return valorConDescuento;
}

const ejercicio = (show) => {
    let productValue = getNumber("Ingrese el valor del producto");
    let iva = getNumber("Ingrese el porcentaje de IVA del producto");
    let desc = getNumber("Ingrese el descuento del producto");

    show(`El resultado es ${getResult(productValue, iva, desc)}`);
}

ejercicio(x => alert(x));