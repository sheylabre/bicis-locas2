function validateForm(){
        /* Escribe tú código aquí */
    var name = document.getElementById("name").value;
    if (name == ""){
        alert("llenar el campo nombre por favor");
    } else if (/^[a-z]$/.test(name.charAt(0))){
        alert("Por favor ingrese la primera letra en mayuscula");
    } else if (/^[0-9]/.test(name.charAt(0))){
        alert("Por favor no ingrese numeros");
    }
    var lastname = document.getElementById("lastname").value;
    if (lastname == ""){
        alert("llenar el campo apellido por favor");
    }
    var correo1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = document.getElementById("input-email").value;
    if (email == ""){
        alert("llenar el campo correo por favor");
    } else if (!correo1.test(email)) {
        alert("correo invalido");
    }
    var password = document.getElementById("input-password").value;
    if (password == "") {
        alert("llenar el campo contraseña por favor");
    } else if (password.length < 6){ 
        alert("Ingrese  al menos 6 caracteres"); 
     } else if (password == "123456" || password == "password" || password == "098754"){
        alert("ingresa contraseña valida");
    }
    var menu = document.querySelector("select").value;
    if (menu == 0) {
        alert("selecciona un tipo de bici por favor");
    }  
}