const contenidoCarrito = document.getElementById("contenidoCarrito")
const total = document.getElementById("total")
const vaciarCarrito = document.getElementById("vaciarCarrito")
const pagar = document.getElementById("pagar")
const carritoBoton = document.getElementById("carritoBotonModal")


function actualizarCarrito() {
  const value = JSON.parse(localStorage.getItem("carrito"));
  let precioTotal = 0
  for (const sema of value) {
    let semilla = document.createElement("div")
    let subTotal = sema.precio * sema.cantidad
    precioTotal = precioTotal + subTotal
    semilla.innerHTML =
      `
      <div class="col">
          <div class="card w-100">
              <img src="${sema.img}" class="card-img-top img-thumbnail" alt="...">
              <div class="card-body">
              <h2 class="card-title">${sema.nombre}</h2>
              <p class="card-text">${sema.descripcion}</p>
              <p class="card-text">Precio: $${sema.precio}</p>
              <p class="card-text">Cantidad: ${sema.cantidad}</p>
              <p class="card-text">Subtotal: $${subTotal}</p>
              <button type="button" id="borrarProducto" class="btn btn-danger" onclick="borrarProducto(${sema.id})">
                Eliminar producto
              </button>
                </div>
            </div>
        </div>
      `

    contenidoCarrito.appendChild(semilla)
  }
  const precioTotalDiv = document.getElementById("total")
  precioTotalDiv.innerHTML = `<h3>Monto a pagar: $${precioTotal}</h3>`
}


carritoBoton.addEventListener("click", () => {
  contenidoCarrito.innerHTML = '';
  actualizarCarrito();
})


const pagarDiv = document.createElement("button");
pagarDiv.classList.add("btn", "btn-success");
pagarDiv.textContent = "Pagar";
pagar.appendChild(pagarDiv);

pagar.addEventListener("click", () => {
  pagado();
});

const limpiarButton = document.createElement("button");
limpiarButton.classList.add("btn", "btn-danger");
limpiarButton.textContent = "Vaciar carrito";
vaciarCarrito.appendChild(limpiarButton);

limpiarButton.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
  limpiarCarrito();
});

function borrarProducto(id){
  const items = JSON.parse(localStorage.getItem("carrito"))
  const productoBorrar = items.find((e) => e.id === id)
  if(productoBorrar){
    const i = items.indexOf(productoBorrar)
    items.splice(i, 1)
    localStorage.setItem("carrito", JSON.stringify(items))
    location.reload();
  }
}


function pagado() {
  Toastify({
    text: "Gracias por tu compra",
  }).showToast();
}


function limpiarCarrito() {
  Toastify({
    text: "Carrito Vaciado",
  }).showToast();
}
