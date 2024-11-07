// Obteniendo la referencia de los elementos
// por medio de arreglos asociativos
// aquí se está utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nombre = document.forms["frmRegistro"]["idNombre"].value;
    const apellido = document.forms["frmRegistro"]["idApellidos"].value;
    const fechaNacimiento = document.forms["frmRegistro"]["idFechaNac"].value;
    const correo = document.forms["frmRegistro"]["idCorreo"].value;
    const password = document.forms["frmRegistro"]["idPassword"].value;
    const repetirPassword = document.forms["frmRegistro"]["idPasswordRepetir"].value;
    const carrera = document.forms["frmRegistro"]["idRdCarrera"].value;
    const pais = document.forms["frmRegistro"]["idCmPais"].value;
    const archivo = document.forms["frmRegistro"]["idArchivo"].value;
    const intereses=document.forms["frmRegistro"]["intereses"].value;
    if (
    !nombre.trim() ||
    !apellido.trim() ||
    !fechaNacimiento.trim() ||
    !correo.trim() ||
    !password.trim() ||
    !repetirPassword.trim() ||
    !carrera.trim() ||
    !pais.trim() ||
    !archivo.trim()
) {
    alert("Campos vacíos");
    return;
}
// Utilice expresiones regulares para validar el campo correo electrónico.
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(correo)) {
    alert("Correo electrónico inválido");
    return;
}
// Valide que los campos contraseña y repetir contraseña, sean iguales.
if (password !== repetirPassword) {
    alert("Las contraseñas no coinciden");
    return;
}
// Verifique que debe estar seleccionada al menos una opción para "algunos intereses".
if (!intereses.trim()) {
    alert("Debes escoger un interes");
    return;
}


})
// Recorrer el formulario
const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;

    // Recorriendo elementos del formulario
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        // Accediendo a cada hijo del formulario
        let elemento = elementos[index];

        // verificando el tipo de control en el formulario
        let tipoElemento = elemento.type;
        // verificando el tipo de nodo
        let tipoNode = elemento.nodeName;

        // Contabilizando el total de INPUT TYPE = TEXT
        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;
        }
        // Contabilizando el total de INPUT TYPE = PASSWORD
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;
        }
        // Contabilizando el total de INPUT TYPE = EMAIL
        else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        }
        // Contabilizando el total de INPUT TYPE = RADIO
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        }
        // Contabilizando el total de INPUT TYPE = CHECKBOX
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        }
        // Contabilizando el total de INPUT TYPE = FILE
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        }
        // Contabilizando el total de INPUT TYPE = DATE
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        }
        // Contabilizando el total de SELECT
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }

    let resultado = `
        Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPass}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="file"] = ${totFile}<br>
        Total de input[type="date"] = ${totDate}<br>
        Total de input[type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;
    // Función que permite mostrar el modal de Bootstrap
    // Esta función es definida por Bootstrap
    modal.show();
};

// Agregue eventos a los botones
// agregando eventos al boton
button.onclick = () => {
    recorrerFormulario();
};
