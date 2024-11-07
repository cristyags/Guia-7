// 1. Localice el archivo index.js y comience a definir las siguientes referencia a botones:
// OBTENIENDO LA REFERENCIA DE LOS BOTONES
// POR MEDIO DEL .getElementById

const buttonSpan = document.getElementById("idBtnSpan");
const buttonP = document.getElementById("idBtnP");
const buttonDiv = document.getElementById("idBtnDiv");
const buttonButton = document.getElementById("idBtnButton");
const imprimir = document.getElementById("idImprimirResultado");

// 2. Defina la siguiente función para contar los elementos dentro de nuestro documento HTML.
// DEFINICION DE FUNCIONES
const contarElementos = function (elemento) {
    // OBTENIENDO EL NUMERO DE ETIQUETAS SPAN QUE SE HAN CREADO
    // EN EL DOCUMENTO HTML
    let arrayElement = document.getElementsByTagName(elemento);
    console.log(`Etiquetas buscadas ${elemento} / Total encontradas: ${arrayElement.length}`);
    for (const i of arrayElement) {
        console.log(i);
    }
    alert("Revise la consola del navegador");
};

// 3. Ahora defina los eventos clic para cada botón.
// DEFINICION DE EVENTOS PARA LOS BOTONES
buttonSpan.onclick = () => {
    contarElementos("span");
};

buttonP.onclick = () => {
    contarElementos("p");
};

buttonDiv.onclick = () => {
    contarElementos("div");
};

buttonButton.onclick = () => {
    contarElementos("button");
};
