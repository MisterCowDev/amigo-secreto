const input = document.getElementById("ingresarTarea");
const boton = document.getElementById("crearTabla");
const listaTareas = document.getElementById("listaTareas")

boton.addEventListener("click", agregarTarea);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        agregarTarea();
    }
});

function agregarTarea() {
    const tareaTexto = input.value.trim()
    if (tareaTexto) {
        const tareaNueva = document.createElement("div");
        const tareaTextoLee = document.createElement("span");
        const eliminarBoton = document.createElement("button");

        tareaTextoLee.textContent = tareaTexto;
        eliminarBoton.textContent = "Eliminar";

        eliminarBoton.addEventListener("click", () => {
            if (confirm("¿Desea eliminar"));
            listaTareas.removeChild(tareaNueva);
        });
        tareaNueva.appendChild(tareaTextoLee);
        tareaNueva.appendChild(eliminarBoton);

        listaTareas.appendChild(tareaNueva);
        input.value = "";
    } else {
        alert("Por favor ingresa una tarea")
    }
}

