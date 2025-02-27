document.getElementById("ampliar").addEventListener("click", function(){
    let imagen = document.getElementById("imagen");
    let width = imagen.clientWidth;
    let height = imagen.clientHeight;
    imagen.style.width = (width * 1.2) + "px";
    imagen.style.height = (height * 1.2) + "px";
});

document.getElementById("disminuir").addEventListener("click", function(){
    let imagen = document.getElementById("imagen");
    let width = imagen.clientWidth;
    let height = imagen.clientHeight;
    imagen.style.width = (width / 1.2) + "px";
    imagen.style.height = (height / 1.2) + "px";
});