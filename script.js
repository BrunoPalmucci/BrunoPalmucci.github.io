function validarFormulario() {
    let div = document.getElementById("frm")
    let mail = document.forms["form_contacto"]["mail"].value
    let nombre = document.forms["form_contacto"]["nombre"].value
    let tiene_error = false

    if (mail == "") {
        document.getElementById("errorMail").innerHTML = "Campo de correo vacío"
        tiene_error = true
    }else document.getElementById("errorMail").innerHTML = ""

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))) {
        document.getElementById("errorMail").innerHTML = "Mail inválido"
        tiene_error = true
    }else document.getElementById("errorMail").innerHTML = ""

    if (nombre == "") {
        document.getElementById("errorNombre").innerHTML = "Campo vacío"
        tiene_error = true
    }else document.getElementById("errorNombre").innerHTML = ""

    if (nombre.length > 50) {
        document.getElementById("errorNombre").innerHTML = "Nombre muy largo"
        tiene_error = true
    }else document.getElementById("errorNombre").innerHTML = ""

    if (/\d/.test(nombre) || !/^[A-Za-z]+$/.test(nombre)) {
        document.getElementById("errorNombre").innerHTML = "Su nombre solo puede contener letras y no debe tener números ni otros caracteres"
        tiene_error = true
    }else document.getElementById("errorNombre").innerHTML = ""

    if (!tiene_error) {
        let exito = document.getElementById("exito")
        if (exito) {
            exito.remove()
        }

        exito = document.createElement("div")
        exito.id = "exito"
        exito.className = "exito"
        exito.innerHTML = "Bienvenido a la pagina, " + nombre + "! Ingresaste con el mail: " + mail
        div.appendChild(exito)
    }
    return false
}