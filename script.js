//Bootstrap

// Validación de formulario de contacto
function validarForm() {

    //Validar nombre:

    //ingresa al value del input "nombre"
    var nombre = document.formulario.nombre.value;
    var apellido = document.formulario.apellido.value;
    var comentario = document.formulario.comentario.value;
    var mail = document.getElementById("email").value;


    //Validar e-mail:
    var ck_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    


    //si no hay nada escrito en el input de nombre...
    if (nombre == "" || !isNaN(nombre)) {
        alert("Complete el campo 'nombre' correctamente");
        document.formulario.nombre.focus();
        return false;
    }

    //Validar apellido:
    if (apellido == "" || !isNaN(apellido)) {
        alert("El campo 'apellido' es obligatorio");
        document.formulario.apellido.focus();
        return false;
    }


    if(!(ck_email.test(mail)))  {
        alert("El campo 'email' debe tener una dirección válida");
        document.formulario.nombre.focus();
        return false;
    }


    if (comentario == "" || comentario.length < 25) {
        alert("Por favor, ingrese su comentario.");
        document.formulario.comentario.focus();
        return false;
    }


    //Enviar formulario
    //alert("Muchas gracias por su mensaje"); -----
    document.getElementById("contenedor_form").style.display = "none";
    document.getElementById("agradecimiento").style.display = "block";
    //document.formulario.submit(); ----

}