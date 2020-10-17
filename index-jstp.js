document.addEventListener("DOMContentLoaded", function () {
    let formu = document.getElementById("formulario");
    formu.addEventListener('submit', validarFormulario);
});

let cont = 0;
function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    for (const user of usuario) {
        if (user == "@") {
            cont++;
            break;
        }
    }
    if (cont == 0) {
        alert("El campo Usuario debe contener un arroba.")
        return
    } else {
        //alert("Usuario válido")
        var psw = document.getElementById('clave').value;
        if (psw.length < 1) {
            alert("Su contraseña debe contener al menos 1 caracter");
            return;
        } else {
            alert("Usted ha ingresado al sistema :D ")
        }

    }
}
