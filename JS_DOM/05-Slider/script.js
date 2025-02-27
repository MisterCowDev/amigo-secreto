document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".sliderPrincipal");
    const slides = document.querySelectorAll(".sliderIndividual");

    // Obtiene el ancho de la primera diapositiva para usarlo como base
    const slideWidth = slides[0].clientWidth;
    // Inicializa el índice de la diapositiva actual
    let indiceActual = 0;

    function avanzaImagen () {
        // Verifica si la diapo actual es la última
        if (indiceActual === slides.length - 1) {
            indiceActual = 0; // Si es la última, regresa al comienzo
        } else {
            indiceActual++; // Si no es la última, avanza a la siguiente
        }
        // Aplica transformación para cambiar la diapositiva
        slider.style.transform = "translateX(-" + (indiceActual * slideWidth) + "px)";
    }
    // Establece un intervalo para cambiar automáticamente las diapo cada 2 segundos
    setInterval(avanzaImagen, 2000);
});