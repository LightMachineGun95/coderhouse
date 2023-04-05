const contenidoCarrito = document.getElementById("contenidoCarrito")
const total = document.getElementById("total")

let carrito = []
let precioTotal = 0

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    carrito.push(JSON.parse(value))
  }

  for (const sema of carrito){
    let semilla = document.createElement("div")
    let subTotal = sema.precio * sema.cantidad
    precioTotal = precioTotal + subTotal
    semilla.innerHTML = 
    `
    <div class="col">
        <div class="card w-100">
            <img src="${sema.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h2 class="card-title">${sema.nombre}</h2>
            <p class="card-text">${sema.descripcion}</p>
            <p class="card-text">Precio: $${sema.precio}</p>
            <p class="card-text">Cantidad: ${sema.cantidad}</p>
            <p class="card-text">Subtotal: $${subTotal}</p>
            </div>
        </div>
    </div>
    `
    contenidoCarrito.appendChild(semilla)  
  }

const precioTotalDiv = document.createElement("div")

precioTotalDiv.innerHTML = `<h3>Monto a pagar: $${precioTotal}</h3>
<button class="btn btn-success" onclick="pagado()">Pagar</button>
`

total.appendChild(precioTotalDiv)

function pagado(){
    alert("Gracias por tu compra de semillas Rey");
}