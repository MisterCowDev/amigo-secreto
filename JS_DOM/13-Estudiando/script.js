document.addEventListener("DOMContentLoaded", () => {

    // Combobox
    const cmbCiudades = document.getElementById("comboBox");

    // Elementos para el combobox
    const opciones = [
                    {value: "opcion1", text: "Santiago"},
                    {value: "opcion2", text: "Valparaíso"},
                    {value: "opcion3", text: "Concepción"},
                    {value: "opcion4", text: "Antofagasta"},
                    {value: "opcion4", text: "Temuco"}  
    ];

    opciones.forEach(function(opcion) {
        let optionElement = document.createElement("option");
        optionElement.value = opcion.value;
        optionElement.textContent = opcion.text;
        cmbCiudades.appendChild(optionElement);
    });

    const addElement = document.getElementById("addElement");
    addElement.addEventListener("click", agregarElemento);

    function agregarElemento (event){

        event.preventDefault();

        const table = document.getElementById("cuerpoTabla");       
        const trTable = document.createElement("tr");
        const tdCantidad = document.createElement("td");
        tdCantidad.innerHTML = '<input type="text" id="cantidad">';
        const tdDetalle = document.createElement("td");
        tdDetalle.innerHTML = '<input type="text" id="detalle">';
        const tdValor = document.createElement("td");
        tdValor.innerHTML = '<input type="text" id="valor">';
        const botonDelete = document.createElement("td");
        botonDelete.innerHTML = '<button id="eliminar" class="eliminar btn btn-danger">Eliminar</button>';
        
        trTable.appendChild(tdCantidad);
        trTable.appendChild(tdDetalle);
        trTable.appendChild(tdValor);
        trTable.appendChild(botonDelete);

        table.appendChild(trTable);

        const boton = document.getElementById('eliminar')
        boton.addEventListener("click", function() {
            table.removeChild(trTable);
        })
    }
    
});
