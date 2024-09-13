const usuario = {
    nombreUsuario: "fpiedrasanta",
    password: "admin123",
    edad: 45,
    documento: {
        numeroDocumento: 29000000,
        tipoDocumento: 'DNI'
    }
};

let { password, nombreUsuario, documento: {tipoDocumento} } = usuario;

//let { password: pass, nombreUsuario: user } = usuario;

console.log(usuario);

//console.log(`Nombre de usuario: ${nombreUsuario} - Password: ${password} - tipoDocumento: ${tipoDocumento}`);
//console.log(`Nombre de usuario: ${user} - Password: ${pass} - tipoDocumento: ${tipoDocumento}`);

//mostrarDatos2(usuario);
mostrarDatos(usuario);
console.log(usuario);

function mostrarDatos2(usuario) {
    usuario.nombreUsuario = usuario.nombreUsuario.toUpperCase();
    usuario.password = usuario.password.toUpperCase();
    console.log(`Nombre de usuario: ${usuario.nombreUsuario} - Password: ${usuario.password} - tipoDocumento: ${usuario.documento.tipoDocumento}`);
}

function mostrarDatos({ password, nombreUsuario, documento: { tipoDocumento } }) {
    console.log(`Nombre de usuario: ${nombreUsuario} - Password: ${password} - tipoDocumento: ${tipoDocumento}`);
}

const frutas = ["Pera", "Banana", "Manzana"];

let [f1, f2, f3] = frutas;
console.log(`Fruta 1: ${f1} - Fruta 3: ${f3}`);