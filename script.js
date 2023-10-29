function validarFormulario() {
    let div = document.getElementById("frm");
    let mail = document.forms["form_contacto"]["mail"].value;
    let nombre = document.forms["form_contacto"]["nombre"].value;
    let tiene_error = false;

    if (mail == "") {
        document.getElementById("errorMail").innerHTML = "Campo de correo vacío";
        tiene_error = true;
    }else document.getElementById("errorMail").innerHTML = "";

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))) {
        document.getElementById("errorMail").innerHTML = "Mail inválido";
        tiene_error = true;
    }else document.getElementById("errorMail").innerHTML = "";

    if (nombre == "") {
        document.getElementById("errorNombre").innerHTML = "Campo vacío";
        tiene_error = true;
    }else document.getElementById("errorNombre").innerHTML = "";

    if (nombre.length > 50) {
        document.getElementById("errorNombre").innerHTML = "Nombre muy largo";
        tiene_error = true;
    }else document.getElementById("errorNombre").innerHTML = "";

    if (/\d/.test(nombre) || !/^[A-Za-z]+$/.test(nombre)) {
        document.getElementById("errorNombre").innerHTML = "Su nombre solo puede contener letras y no debe tener números ni otros caracteres";
        tiene_error = true;
    }else document.getElementById("errorNombre").innerHTML = "";

    if(!tiene_error){
      alert("Inscripto con exito!")
    }
    return !tiene_error;
}