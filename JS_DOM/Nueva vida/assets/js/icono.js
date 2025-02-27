const ventana = document.getElementById("icono")

ventana.addEventListener("click", mostrarVentana);

function mostrarVentana(){
    var ventana = window.open("","_black", "width=400, height=400");
    ventana.document.write(`
        <html>
        <head>
        </head>
        <body>
            <button onclick="window.close()">Cerrar</button>
        </body>
        </html>
    `);
}