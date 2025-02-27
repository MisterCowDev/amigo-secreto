document.getElementById("formulario").addEventListener("submit", () => {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    const sexo = document.querySelector("input[name=sexo]:checked").value
    
    const mensaje = `Nombre: ${nombre}\nEdad: ${edad}\nEmail: ${email}\nSexo: ${sexo}`
    alert(mensaje);
});