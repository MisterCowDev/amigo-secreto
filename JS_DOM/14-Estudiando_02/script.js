function agregarLineaFactura(){
    const tabla = document.getElementById('cuerpoTabla')
    const nuevaFila = tabla.insertRow(tabla.rows.length);
    const cantidad = nuevaFila.insertCell(0);
    const detalle = nuevaFila.insertCell(1);
    const valor = nuevaFila.insertCell(2);
    const eliminar = nuevaFila.insertCell(3);

    cantidad.innerHTML = '<input type="number" class="cantidadLinea" onchange="calcularTotal()">';
    detalle.innerHTML = '<input type="text" class="detalleLinea">';
    valor.innerHTML = '<input type="text" class="valorLinea" onchange="calcularTotal()">';
    eliminar.innerHTML = '<button onclick="eliminarLinea(this)" class="btn btn-danger">Eliminar</button>';
}

function eliminarLinea(button) {
    if(confirm("¿Seguro para eliminar?")) {
        const fila =  button.parentNode.parentNode;
        fila.parentNode.removeChild(fila);
        calcularTotal();
    }
}

function calcularTotal() {
    const cantidades = document.getElementsByClassName('cantidadLinea');
    const valores = document.getElementsByClassName('valorLinea');
    let total = 0;
    for (let i = 0; i < cantidades.length; i++) {
        const cantidad = parseInt(cantidades[i].value) || 0;
        const valor = parseFloat(valores[i].value) || 0;
        total += cantidad * valor
        
    }
    document.getElementById('totalFactura').innerText = total.toFixed(0);
}

document.getElementById('agregarLinea').addEventListener("click", agregarLineaFactura);

function limpiarCampos () {
    if (confirm("¿Seguro para limpiar?")) {
        document.getElementById('rutCliente').value = '';
        document.getElementById('nombreCliente').value = '';
        document.getElementById('direccion').value = '';
        document.getElementById('ciudad').value = '';
        document.getElementById('fechaFactura').value = '';
        document.getElementById('totalFactura').value = '';
    }
}

