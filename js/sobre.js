function abrirSobre() {
    const contenedor = document.querySelector(".sobre-container");
    contenedor.classList.add("abierto");

    setTimeout(() => {
        window.location.href = "carta.html";
    }, 1800);
}