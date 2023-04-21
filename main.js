// Selecciona el contenedor donde se agregarán las tarjetas
const cardContainer = document.querySelector("#shopping");
// Realiza una solicitud fetch para obtener los datos del archivo JSON
fetch("./productos.json")
.then((response) => response.json())
.then((data) => {
// Para cada objeto en el array de datos, crea una tarjeta de Bootstrap y agrega los datos correspondientes
data.forEach((producto) => {
// Crea un div para la tarjeta con las clases de Bootstrap
const cardDiv = document.createElement("div");
cardDiv.classList.add("card", "m-3");
// Crea un elemento de imagen para mostrar la imagen del producto
const img = document.createElement("img");
img.classList.add("card-img-top");
img.src = producto.img;
img.alt = producto.nombre;
cardDiv.appendChild(img);

// Crea un div para el cuerpo de la tarjeta con las clases de Bootstrap
const cardBodyDiv = document.createElement("div");
cardBodyDiv.classList.add("card-body");

// Agrega el nombre del producto al cuerpo de la tarjeta
const nombre = document.createElement("h2");
nombre.classList.add("card-title");
nombre.textContent = producto.nombre;
cardBodyDiv.appendChild(nombre);

// Agrega la descripción del producto al cuerpo de la tarjeta
const descripcion = document.createElement("p");
descripcion.classList.add("card-text");
descripcion.textContent = producto.descripcion;
cardBodyDiv.appendChild(descripcion);

// Agrega el precio del producto al cuerpo de la tarjeta
const precio = document.createElement("p");
precio.classList.add("card-text");
precio.textContent = `Precio: $${producto.precio}`;
cardBodyDiv.appendChild(precio);

// Crea un botón de compra para la tarjeta
const comprarButton = document.createElement("button");
comprarButton.classList.add("btn", "btn-success");
comprarButton.textContent = "Comprar";
comprarButton.addEventListener("click", () => {
  // Al hacer clic en el botón de comprar, se guarda el producto en el localStorage
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  producto["cantidad"] = 1;
  const productoEncontrado = carrito.find((e) => e.id === producto.id)
  if(productoEncontrado){
    productoEncontrado.cantidad++;
  } else {
    carrito.push(producto);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  Toastify({
    text: "Producto agregado al carrito",
    }).showToast();

});

cardBodyDiv.appendChild(comprarButton);
// Agrega el cuerpo de la tarjeta al div de la tarjeta
cardDiv.appendChild(cardBodyDiv);


// Agrega la tarjeta al contenedor de tarjetas
cardContainer.appendChild(cardDiv);
});
})
.catch((error) => console.error(error));


