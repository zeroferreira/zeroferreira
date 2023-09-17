function mostrarOcultarEtiqueta() {
    const input = document.getElementById('nombre_usuario');
    const etiqueta = document.getElementById('etiquetaUsuario');

    if (input.value.trim() !== "") {
        etiqueta.style.display = "none";
    } else {
        etiqueta.style.display = "inline";
    }
}
function mostrarOcultarEtiqueta(inputId, etiquetaId) {
    const input = document.getElementById(inputId);
    const etiqueta = document.getElementById(etiquetaId);

    if (input.value.trim() !== "") {
        etiqueta.style.display = "none";
    } else {
        etiqueta.style.display = "inline";
    }
}
