/*
let div = document.getElementById("padre");
let p = document.getElementById("hijo");
*/

/*alert(div.innerHTML);
alert(p.innerHTML);*/

/*
const hijos = document.getElementsByClassName("hijo");

console.log(hijos);

for(let hijo of hijos) {
    alert(hijo.innerHTML);
}
*/

/*
let saludo = document.getElementById("saludo");

alert(saludo.innerText);

saludo.innerText = "¡Adiós mundo!";

alert(saludo.innerText);
*/

/*
let saludo = document.getElementById("saludo");

alert(saludo.innerText);
alert(saludo.innerHTML);

saludo.innerText = "Hola mundo";
alert(saludo.innerHTML);

saludo.innerHTML = "Hola mundo";
alert(saludo.innerHTML);
*/

/*
let title = document.getElementById("title");
title.className = "titulo";
*/

/*
let card = document.createElement("div");
card.className = "card";

let title = document.createElement("h2");
let body = document.createElement("div");

title.className = "title";
body.className = "body";

title.innerText = "Saludo";
body.innerText = "Hola mundo";

card.append(title);
card.append(body);

let posts = document.getElementById("posts");
posts.append(card);
*/
function obtenerMusicasMasEscuchadas() {
    return [{
        titulo: "Post 1",
        mensaje: "Cuerpo 1",
        cantidad: 1,
        urlImagen: "https://th.bing.com/th?id=ORMS.1ea589573470ac6fa20db9ec3930b1d1&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0"
    }, {
        titulo: "Post 2",
        mensaje: "Cuerpo 2",
        cantidad: 2,
        urlImagen: "https://th.bing.com/th?id=ORMS.1ea589573470ac6fa20db9ec3930b1d1&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0"
    }, {
        titulo: "Post 3",
        mensaje: "Cuerpo 3",
        cantidad: 3,
        urlImagen: "https://th.bing.com/th?id=ORMS.1ea589573470ac6fa20db9ec3930b1d1&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0"
    }];
}

function obtenerMusicasMasCriticadas() {
    return [{
        titulo: "Post 4",
        mensaje: "Cuerpo 4",
        cantidad: 1,
        urlImagen: "https://th.bing.com/th?id=ORMS.1ea589573470ac6fa20db9ec3930b1d1&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0"
    }, {
        titulo: "Post 5",
        mensaje: "Cuerpo 5",
        cantidad: 2,
        urlImagen: "https://th.bing.com/th?id=ORMS.1ea589573470ac6fa20db9ec3930b1d1&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0"
    }, {
        titulo: "Post 6",
        mensaje: "Cuerpo 6",
        cantidad: 3,
        urlImagen: "https://th.bing.com/th?id=ORMS.1ea589573470ac6fa20db9ec3930b1d1&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0"
    }];
}

const posts = obtenerMusicasMasEscuchadas();
const posts2 = obtenerMusicasMasCriticadas();

for(let post of posts) {
    showCard(post, "posts");
}

for(let post2 of posts2) {
    showCard(post2, "posts2");
}

function showCard(post, idContenedor) {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = getCardTemplate(post);

    let posts = document.getElementById(idContenedor);
    posts.append(card);
}

function getCardTemplate(card) {
    return `
        <img src="${card.urlImagen}"/>
        <h2>${card.titulo}</h2>
        <div class="body">${card.mensaje}</div>
        <div class="reacciones">${card.cantidad}</div>
    `;
}

let ts = document.querySelectorAll("h2");

for(let t of ts)
{
    console.log(t.innerText);
}
