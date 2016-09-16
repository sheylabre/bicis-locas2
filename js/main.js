function validateForm(){
    var name = document.getElementById("name").value;
        if(name == ""){
             var ingresa = document.getElementById("name"); 
             var text = document.createTextNode("Debe ingresar su nombre");
             mensaje(ingresa,text);
        }
        
    var lastname = document.getElementById("lastname").value;
        if (lastname == null || lastname.length == 0){
             var ingresa = document.getElementById("lastname");
             var text = document.createTextNode("Debe ingresar su apellido");
             mensaje(ingresa,text);
    }

    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(email) ){
         var ingresa = document.getElementById("input-email");
         var texto = document.createTextNode("Verifique su e-mail");
         mensaje(ingresa, texto);
    }

    var password = document.getElementById("input-password").value;
        if (password == "") {
            alert("llenar el campo contraseña por favor");
        } else if (password.length < 6){ 
             var ingresa = document.getElementById("input-password");
             var texto = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
             mensaje(ingresa, texto);
        } else if (password == "123456" || password == "password" || password == "098754"){
             alert("ingresa contraseña valida");
    }

    var menu = document.querySelector("select").value;
         if (menu == 0) {
             var ingresa = document.getElementsByTagName("select")[0];
             var texto = document.createTextNode("Debes seleccionar al menos un tipo de bicicleta");
             mensaje(ingresa, texto);
        
    }     

    function mensaje (ingresa, texto){
         var cuadroMensaje = document.createElement("span");
         var padreMensaje = ingresa.parentNode;

    padreMensaje.insertBefore(cuadroMensaje,ingresa);
    cuadroMensaje.appendChild(texto);
    return cuadroMensaje;
    }
}