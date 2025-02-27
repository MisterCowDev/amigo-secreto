const inputTarea = document.getElementById("inputTarea");
const botonAgregar = document.getElementById("botonAgregar");
const listaTareas = document.getElementById("listaTareas");

let tareas = ["Estudiar para WEB", "Terminar proyecto WEB"];

const mostrarListaTareas = () => {
    let html = "";
    for (let i = 0; i < tareas.length; i++) {
        html = html + "<li>" + tareas[i] + "</li>";        
    }
    listaTareas.innerHTML = html;
}

const agregarTarea = () => {
    const nuevaTarea = inputTarea.value.trim();
    if (nuevaTarea) {
        tareas.push(nuevaTarea);
        mostrarListaTareas();
        inputTarea.value = "";
    } else {
        alert("Por favor, ingresa una tarea válida")
    }
}

mostrarListaTareas();

botonAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        agregarTarea();
    }
});