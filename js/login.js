let formLogin = document.getElementById("form_login");

formLogin.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let txtUserName = document.getElementById("txt_user_name");
    let txtPassword = document.getElementById("txt_password");

    let pedido = {
        mail: txtUserName.value,
        password: txtPassword.value
    };

    getLogin(pedido, 
        (json) => {
            if(json.success) {
                window.location.href = "/alerts.html";
            } else {
                let errorLabel = document.getElementById("error_label");
                errorLabel.style.display = "block";
                errorLabel.innerText = `* ${json.message}`;
            }
        });
});