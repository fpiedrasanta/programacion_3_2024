let btn1 = document.getElementById("btn_1");
/*btn1.onclick = () => {
    alert("Click");
}*/
btn1.addEventListener("click", (e) => {
    alert("click");
    console.log(e);
});

const perrito = document.getElementById("perrito");

perrito.addEventListener("mouseup", (e) => {
    alert("Hola!");
});

const cuadrado = document.getElementsByClassName("cuadrado")[0];

cuadrado.addEventListener("mousedown", (e) => {
    cuadrado.classList.remove("unpressed");
    cuadrado.classList.add("pressed");
});

cuadrado.addEventListener("mouseup", (e) => {
    cuadrado.classList.add("unpressed");
    cuadrado.classList.remove("pressed");
});

cuadrado.addEventListener("mouseover", (e) => {
    cuadrado.classList.add("red");
    cuadrado.classList.remove("blue");
    console.log(e);
});

cuadrado.addEventListener("mouseout", (e) => {
    cuadrado.classList.remove("red");
    cuadrado.classList.add("blue");
});

/*
const n = document.getElementById("txt_nombre");

n.addEventListener("keydown", (e) => {
    console.log(e);
    if(e.key < "1" || e.key > "9") {
        e.preventDefault();
        return;
    }
});

n.addEventListener("keypress", (e) => {
    if(e.key < "1" || e.key > "9") {
        e.preventDefault();
        return;
    }
});

n.addEventListener("keyup", (e) => {
    console.log("keyup");
});

n.addEventListener("change", (e) => {
    console.log(e.target.value);
    if(e.target.value == "hola") {
        e.target.classList.add("error");
        document.getElementsByClassName("txt_nombre_error")[0].classList.add("show");
    } else {
        e.target.classList.remove("error");
        document.getElementsByClassName("txt_nombre_error")[0].remove("show");
    }
});

n.addEventListener("input", (e) => {
    console.log("input");
});
*/

const formularios = document.getElementsByClassName("frm");

for(let frm of formularios) {
    frm.addEventListener("submit", (e) => {
        e.preventDefault();
        /*
        const data = {
            nombre: document.getElementById("txt_nombre").value,
            apellido: document.getElementById("txt_apellido").value,
            mail: document.getElementById("txt_mail").value
        };
    
        alert(JSON.stringify(data));
    
        console.log("Submit");*/
        
        const formData = Object.fromEntries(
            new FormData(e.target)
        );
    
        console.log(formData);
        console.log(e.target.id);

        if(e.target.id == "password" && formData.mayor_edad == undefined) {
            alert("No sos mayor de edad");
            document.getElementById("check_mayor_edad").classList.add("error");
            return;
        }

        alert("si sos mayor de edad");
    });
}

alert("Hola" + localStorage.getItem("nombre"));