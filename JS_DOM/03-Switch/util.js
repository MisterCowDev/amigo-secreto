const cuteSwitch = document.getElementById("switchCambiaColor");
cuteSwitch.addEventListener("change", () => {
    if (cuteSwitch.checked) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});