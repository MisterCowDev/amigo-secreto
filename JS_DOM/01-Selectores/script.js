// Se selecciona el elemento por su ID y se cambia su texto
const titulo = document.getElementById("titulo");
titulo.textContent = "Titulo modificado con Javascript";

// const parrafo = document.querySelector(".parrafo");
// parrafo.style.color = "blue";

// Mostrar alerta
const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    alert("Boton clikeado!");
});

// Cambiar contenido del texto
const botonCambiarTexto = document.getElementById("botonCambiarTexto");
botonCambiarTexto.addEventListener("click", () => {
    parrafo.textContent = "El texto cambio al presionar el botón";
});

// Cambiar color del fondo
const botonCambiarFondo = document.getElementById("botonCambiarFondo");
botonCambiarFondo.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
});

// Mostrar/ocultar el párrafo
const botonToggle = document.getElementById("botonToggle");
botonToggle.addEventListener("click", () => {
    parrafo.classList.toggle('oculto');
});

// Cambiar tamaño de la letra
const botonCambiarFuente = document.getElementById("botonCambiarFuente");
botonCambiarFuente.addEventListener("click", () => {
    parrafo.style.fontSize = '30px';
});

// Añadir elemento en la lista
const botonAnadirElemento = document.getElementById("botonAnadirElemento");
botonAnadirElemento.addEventListener("click", () => {
    const lista = document.getElementById("lista");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo elemento";
    lista.appendChild(nuevoElemento);
});

// Mostrar/ocultar imágen
const botonToggleImagen = document.getElementById("botonToggleImagen");
botonToggleImagen.addEventListener("click", () => {
    const imagen = document.getElementById("imagen");
    if (imagen.style.display == "none"){
        imagen.style.display = "block";        
    } else {
        imagen.style.display = "none";
    }
});

// Cambiar valor de un input
const botonCambiarTextoInput = document.getElementById("botonCambiarTextoInput");
botonCambiarTextoInput.addEventListener("click", () => {
    const input = document.getElementById("inputTexto");
    input.value = "Nuevo texto en el cuadro de texto";
});