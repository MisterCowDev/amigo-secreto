document.addEventListener("DOMContentLoaded", function() {
    const cantidadInputs = document.getElementsByClassName("cantidad");
    const montoInputs = document.getElementsByClassName("monto");
    const subtotalCells = document.getElementsByClassName("subtotal");
    const totalSpan = document.getElementById("total");

    function calcularSubTotal() {
        let total = 0;

        for (let i = 0; i < cantidadInputs.length; i++) { // Obtiene valor de la cantidad
            const cantidad = parseInt(cantidadInputs[i].value); // Obtiene valor del monto
            const monto = parseInt(montoInputs[i].value);
            
            const subtotal = cantidad * monto; // Establece el texto del subtotal en la celda
            
            subtotalCells[i].textContent = subtotal; // Añade el subtotal al total acumulado
            
            total = total + subtotal;
        }
        totalSpan.textContent = total; // Establece el texto total en el elemento
    }
    for (let i = 0; i < cantidadInputs.length; i++) {
        cantidadInputs[i].addEventListener("input", calcularSubTotal);        
    }
    for (let i = 0; i < montoInputs.length; i++) {
        montoInputs[i].addEventListener("input", calcularSubTotal);        
    }
    calcularSubTotal();
});