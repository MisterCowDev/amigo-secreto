document.addEventListener("DOMContentLoaded", () => {
    const camposServicioMilitar = document.getElementById("camposServicioMilitar");

    document.getElementById("sexoMasculino").addEventListener("click", () => {
        camposServicioMilitar.style.display = "block";
    });
    document.getElementById("sexoFemenino").addEventListener("click", () => {
        camposServicioMilitar.style.display = "none";
    });

    document.getElementById("formRegistro").addEventListener("submit", () => {
        const nombre = document.getElementById("nombre").value;
        const sexo = document.querySelector('input[name="sexo"]:checked').value;
        const servicioMilitar = document.querySelector('input[name="servicioMilitar"]:checked');
        
        const mensaje = "Nombre: " + nombre + "\nSexo: " + sexo + 
        (sexo === "masculino" && servicioMilitar ? "\n Servicio: " + servicioMilitar.value:"");
        alert(mensaje);
    });
});