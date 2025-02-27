document.addEventListener("DOMContentLoaded", function() {
    // Evento para confimar si desea limpiar los campos
    const botonLimpiar = document.getElementById("limpiar");

    botonLimpiar.addEventListener("click", function(event) {
        const confirmacion = confirm("¿Estás seguro que desea limpiar todos los campos del formulario");
        if (confirmacion) {
            const seleccionarInputs = document.querySelector("input[type='text']");
            seleccionarInputs.ForEach(function(campo) {
                campo.value = "";
            });
        } else {
            event.preventDefault();
        }
        
    });

    // Evento para agregar espacios en la tabla
    const botonAgregar = document.getElementById("agregar");

    botonAgregar.addEventListener("click", function(event) {
        // Previene que se envíe el formulario
        event.preventDefault();

        const nuevaTabla = document.querySelector("table tbody")
        
        // Crea una nueva fila
        const nuevaFila = document.createElement("tr");

        // Se agregan los elementos
        const cantidadCelda = document.createElement("td")
        cantidadCelda.innerHTML = '<input type="text" class="cantidad">';
        
        const detalleCelda = document.createElement("td");
        detalleCelda.innerHTML = '<input type="text" class="detalle">';

        const valorCelda = document.createElement("td");
        valorCelda.innerHTML = '<input type="text" class="valor">';

        const accionesCelda = document.createElement("td");
        accionesCelda.innerHTML = '<button class="eliminar btn btn-danger">Eliminar</button>';

        nuevaFila.appendChild(cantidadCelda);
        nuevaFila.appendChild(detalleCelda);
        nuevaFila.appendChild(valorCelda);
        nuevaFila.appendChild(accionesCelda);

        nuevaTabla.appendChild(nuevaFila);

        function eliminarCeldas() {
            if (confirm("¿Estás seguro de que deseas eliminar esta línea de la factura?")){
                nuevaTabla.appendChild(nuevaFila);
            }
        }

        const botonEliminar = document.getElementById("eliminar");
        botonEliminar.addEventListener("click", eliminarCeldas);
        accionesCelda.addEventListener("click", eliminarCeldas);
    });



    
    // Hacer el calculo de valor
    const cantidadInputs = document.getElementsByClassName("valor");
    const totalSpan = document.getElementById("total");

    function calcularSubTotal() {
        let total = 0;

        for (let i = 0; i < cantidadInputs.length; i++) { // Obtiene valor de la cantidad
            const cantidad = parseInt(cantidadInputs[i].value); // Obtiene valor del monto

            subtotalCells[i].textContent = subtotal; // Añade el subtotal al total acumulado
            
            total = total + cantidad;
        }
        totalSpan.textContent = total; // Establece el texto total en el elemento
    }
    for (let i = 0; i < cantidadInputs.length; i++) {
        cantidadInputs[i].addEventListener("input", calcularSubTotal);        
    }

    calcularSubTotal();
});