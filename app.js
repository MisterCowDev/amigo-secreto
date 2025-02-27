let arrayAmigos = [];

function agregarAmigo() {
    let nombreAgregado = document.getElementById('amigo').value;
    let listaAmigos = document.getElementById('listaAmigos');

    if (nombreAgregado.trim() !== '') {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombreAgregado;
        listaAmigos.appendChild(nuevoElemento);
        arrayAmigos.push(nombreAgregado);
    } else {
        alert("Debe ingresar un nombre");
    }
    document.getElementById('amigo').value = "";
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (arrayAmigos.length != 0) {
        let numeroRandom = Math.floor(Math.random() * arrayAmigos.length)
        let nombreRandom = arrayAmigos[numeroRandom];
        let elementoResultado = document.createElement('li');
        elementoResultado.textContent = "El nombre aleatorio es: " + nombreRandom;
        resultado.appendChild(elementoResultado);

        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = "";
        arrayAmigos = [];
    } else {
        alert("La lista de amigos esta vacia");
    }
}