// Alerta de confirmación
function mostrarConfirmacion(){
    let confirmacion = confirm("¿Estás seguro de continuar?");
    if (confirmacion){
        alert("Has confirmado");
    } else {
        alert("Has cancelado");
    }
}

// Formulario de datos
function solicitarDatos(){
    let nombre = prompt("Ingresa tu nombre");
    if (nombre !== null && nombre !== ""){
        alert("Hola, " + nombre);
    } else if (nombre === ""){
        alert("No ingresaste ningún nombre");
    } else {
        alert("Has cancelado");
    }
}

// Mostrar alerta
function mostrarAlerta(){
    alert("Super alerta!")
}

/** 
 * Tambien es una forma correcta de usar la función
 * 
 * function mostrarMensajeHtml() {
 * document.getElementById("texto").style.display = "block";
 * }
*/

// Mostrar mensaje html
function mostrarMensajeHtml(){
    const mensajeHtml = document.getElementById("texto");
    mensajeHtml.style.display = "block";
}

// Mostrar ventana emergente
function mostrarMensajeVentana(){
    var ventana = window.open("","_black", "width=400", "heiht=400");
    ventana.document.write("<html><head><body><button onclick='window.close()'>Cerrar</button></body></head></html>");
}

// Mostrar un mensaje tooltip
function mostrarMensajeTooltip(){
    let elemento = document.getElementById("tooltip");
    elemento.setAttribute("title", "Este mensaje es de ayuda.");
}

function mostrarMensajeTemporizado(){
    setTimeout(function() {
        alert("Mensaje mostrado luego de 3 segundos")
    }, 3000);
}

function mostrarMensajeDobleCLick(){
    alert("Mensaje luego de doble click")
}

function mostrarMensajeMouseOver(){
    alert("Has pasado el ratón sobre mí")
}

function mostrarMensajeMouseOut(){
    alert("Has quitado el ratón")
}

function manejarBotonRadio(){
    let radios = document.getElementsByName("opcion");
    radios.forEach(function (radio){
        if (radio.checked) {
            alert("Seleccionaste la opción: " + radio.value);
        }
    });
}

function manejarCasillaVerificacion() {
    let casillas = document.querySelectorAll("input[type='checkbox']");
    let seleccionadas = [];
    casillas.forEach(function(casilla) {
        if(casilla.checked) {
            seleccionadas.push(casilla.value);
        }
    });
    if (seleccionadas.length > 0 ) {
        alert("Casillas seleccionadas: " + seleccionadas.join(", "));
    } else {
        alert("No has seleccionado ninguna casilla");
    }
}