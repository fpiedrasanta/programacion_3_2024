/*
let btn = document.getElementById("btn");
let block = document.getElementById("block");

btn.addEventListener("click", (evt) => {
    alert("Hola");
});

console.log("Linea 1");

let n, d, r;
block.style.display = "inline-block";
setTimeout(() => {
    for(let i = 1; i < 1000000000; i++) {
        n = 10;
        d = 100;
        r = 10/100;
    }

    console.log(r);
    block.style.display = "none";
}, 250);

console.log("Linea 2");
console.log("Linea 3");
*/

/*
let btn = document.getElementById("btn");
let popup = document.getElementById("popup");
let wrapper = document.querySelector("#popup .wrapper");

btn.addEventListener("click", (evt) => {
    popup.style.display = "relative";
    wrapper.style.top = 0;
    setTimeout((evt) => {
        popup.style.display = "none";
    }, 3000);
});
*/
/*
function promesa(condicional) {
    return new Promise((resuelto, rechazado) => {
        setTimeout(() => {
            if(condicional) {
                resuelto({status: 'ok', code: 200});
            } else {
                rechazado('No resuelto');
            }
        }, 2000);
    })
}

promesa(true)
    .then(resultado => console.log(resultado))
    .catch(resultado => console.log(resultado))
    .finally(() => console.log("me ejecuto siempre"));

promesa(false)
    .then(resultado => console.log(resultado))
    .catch(resultado => console.log(resultado))
    .finally(() => console.log("me ejecuto siempre"));
*/

function calculoPesado(numeroGrande) {
    return new Promise((resuelto, rechazado) => {
        try {
            let n, d, r;

            for(let i = 1; i < numeroGrande; i++) {
                n = 10;
                d = 100;
                r = 10/100;
            }

            resuelto(r);
        } catch (e) {
            rechazado("Error");
        }
    })
}

console.log("Linea 1");

calculoPesado(1000000000)
    .then(resultado => console.log(resultado))
    .catch(resultado => console.log(resultado))
    .finally(() => console.log("Fin del proceso pesado"));

console.log("Linea 2");
console.log("Linea 3");