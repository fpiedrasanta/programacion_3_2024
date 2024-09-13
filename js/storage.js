const txtNombre = document.getElementById("txt_nombre");
const btnGuardar = document.getElementById("btn_guardar");

btnGuardar.addEventListener("click", (e) => {
    localStorage.setItem("nombre", txtNombre.value);
    sessionStorage.setItem("nombre", txtNombre.value);
});

