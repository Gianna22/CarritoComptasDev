const carrito = document.getElementById("carrito")
const button = document.querySelectorAll(".btn-primary")
const template = document.querySelector("#template")
const fragment = document.createDocumentFragment();


const carritoArray = [];
const mostrarCarrito = () => {
    carrito.textContent = ""
    carritoArray.forEach((item) => {
        const clone = template.content.cloneNode(true)

        clone.querySelector(".lead").textContent = item.titulo
        clone.querySelector(".badge").textContent = item.cantidad
        fragment.appendChild(clone);

        carrito.appendChild(fragment);
    })
};

const agregarProductosCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.article,
        id: e.target.dataset.article,
        cantidad: 1,
    }

    const posicion = carritoArray.findIndex((item) => {
        return item.titulo === producto.titulo
    })

    if (posicion === -1) {
        carritoArray.push(producto)
    } else {
        carritoArray[posicion].cantidad++
    }
    mostrarCarrito()
}

    


button.forEach((item) => {
    item.addEventListener("click", agregarProductosCarrito) 
})
