// 1. References to HTML elements
const newForm = document.getElementById("idNewForm");
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElemento");
const buttonValidate = document.getElementById("idBtnValidate"); // New validation button
const cmbElemento = document.getElementById("idCmbElemento");
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// Check if ID is unique
function isUniqueID(id) {
    return !document.getElementById(id);
}

// Show modal to select element type
const verificarTipoElemento = function () {
    let elemento = cmbElemento.value;
    if (elemento !== "") {
        modal.show();
    } else {
        alert("Debe seleccionar el elemento que se creará");
    }
};

// Function to create a new select element
const newSelect = function () {
    let id = `id${nombreElemento.value}`;
    if (!isUniqueID(id)) {
        alert("El ID ya existe. Por favor, elija un ID único.");
        return;
    }

    let addElemento = document.createElement("select");
    addElemento.setAttribute("id", id);
    addElemento.setAttribute("class", "form-select");

    for (let i = 1; i <= 10; i++) {
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opción ${i}`;
        addElemento.appendChild(addOption);
    }

    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", id);
    labelElemento.textContent = tituloElemento.value;

    let labelId = document.createElement("span");
    labelId.textContent = `ID de control = ${nombreElemento.value}`;

    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

// Function to create radio or checkbox elements
const newRadioCheckbox = function (newElemento) {
    let id = `id${nombreElemento.value}`;
    if (!isUniqueID(id)) {
        alert("El ID ya existe. Por favor, elija un ID único.");
        return;
    }

    let addElemento = document.createElement("input");
    addElemento.setAttribute("id", id);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");

    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", id);
    labelElemento.textContent = tituloElemento.value;

    let labelId = document.createElement("span");
    labelId.textContent = `ID de control = ${nombreElemento.value}`;

    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-check");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

// Function to create input elements including new types: color and email
const newInput = function (newElemento) {
    let id = `id${nombreElemento.value}`;
    if (!isUniqueID(id)) {
        alert("El ID ya existe. Por favor, elija un ID único.");
        return;
    }

    let addElemento =
        newElemento === "textarea"
            ? document.createElement("textarea")
            : document.createElement("input");

    addElemento.setAttribute("id", id);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", id);

    let iconLabel = document.createElement("i");
    iconLabel.setAttribute("class", "bi bi-tag");

    labelElemento.textContent = tituloElemento.value;
    labelElemento.insertAdjacentElement("afterbegin", iconLabel);

    let labelId = document.createElement("span");
    labelId.textContent = `ID de control = ${nombreElemento.value}`;

    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating mb-3");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

// Validate that all required fields are filled and options selected
buttonValidate.onclick = function () {
    const elements = newForm.elements;
    let valid = true;

    for (let element of elements) {
        if (element.type === 'radio' || element.type === 'checkbox') {
            if (!element.checked) {
                valid = false;
            }
        } else if (element.tagName === 'SELECT') {
            if (element.selectedIndex === 0) {
                valid = false;
            }
        } else {
            if (!element.value) {
                valid = false;
            }
        }
    }

    if (valid) {
        alert("Todos los campos están completos.");
    } else {
        alert("Hay campos incompletos. Por favor, revise.");
    }
};

// Event listeners for buttons
buttonCrear.onclick = verificarTipoElemento;

buttonAddElemento.onclick = () => {
    if (nombreElemento.value !== "" && tituloElemento.value !== "") {
        let elemento = cmbElemento.value;

        if (elemento === "select") {
            newSelect();
        } else if (elemento === "radio" || elemento === "checkbox") {
            newRadioCheckbox(elemento);
        } else {
            newInput(elemento);
        }
    } else {
        alert("Faltan campos por completar");
    }
};

// Clear modal inputs when shown
document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    tituloElemento.value = "";
    nombreElemento.value = "";
    tituloElemento.focus();
});
