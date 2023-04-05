const semas = [
    {
      id: 1,
      nombre: "Dos-Si-Dos Automatic",
      descripcion: "La Do-Si-Dos Automatic ofrece todo lo que buscan la mayoría de los cultivadores. Su rápido ciclo de vida se traduce en unas cosechas impresionantes en cuestión de semanas. Siembra más semillas justo antes de cortar tus plantas para iniciar una cosecha perpetua y garantizar que tus frascos estén siempre llenos. Esta potente señorita ofrece un 20% de THC y unos terpenos terrosos y cítricos.",
      precio: 25,
      img: "assets/img/semillas/automaticas/do-si-dos-automatic.jpg"
    },
    {
      id: 2,
      nombre: "Green Gelato Automatic",
      descripcion: "Las cepas autoflorecientes suelen clasificarse como inferiores a las cepas tradicionales. La Green Gelato Automatic deja de lado este estereotipo. Prepárate para un subidón alucinante.",
      precio: 35,
      img: "assets/img/semillas/automaticas/green-gelato-automatic.jpg"
    },
    {
      id: 3,
      nombre: "Mimosa Automatic",
      descripcion: "La Mimosa Automatic no solo supone un desafío en cuanto a dejar de fumarla, debido a sus deliciosos sabores cítricos. Esta potente autofloreciente también ejerce un gran subidón edificante, que representa el estimulante diario perfecto. Además, garantiza grandes cosechas en un tiempo récord.",
      precio: 45,
      img: "assets/img/semillas/automaticas/mimosa-automatic.jpg"
    },
    {
      id: 4,
      nombre: "Purple Queen Automatic",
      descripcion: "La Purple Queen Automtic es un regalo para la vista, el olfato y la mente. Tiene un aspecto imponente, un aroma increíble y un efecto eufórico.",
      precio: 25,
      img: "assets/img/semillas/automaticas/purple-queen-automatic.jpg"
    },
    {
      id: 5,
      nombre: "Royal Gorilla Automatic",
      descripcion: "La Royal Gorilla Automatic es la variedad que está colocando al cannabis auto en primera línea, como un cohete impulsado por THC. Los mejores genes de la costa oeste de EE.UU. se han hibridado con éxito para producir una variedad auto que está cambiando el panorama del cannabis. La Royal Gorilla Automatic te lleva al siguiente nivel del cultivo auto con hasta un 20% de THC en solo 8 semanas.",
      precio: 35,
      img: "assets/img/semillas/automaticas/royal-gorilla-automatic.jpg"
    },
    {
      id: 6,
      nombre: "Blue Gelato",
      descripcion: "La Gelato causó sensación desde que llegó a la escena cannábica. Tanto cultivadores como fumadores sienten obsesión por los sabores dulces y los efectos corporales de este portento genético. El equipo de cría de RQS decidió ir más allá y añadió la apreciada Blueberry a la mezcla. Si creías que la Gelato no podía saber mejor, prepárate para descubrir lo contrario.",
      precio: 15,
      img: "assets/img/semillas/feminizadas/blue-gelato.jpg"
    },
    {
      id: 7,
      nombre: "Blue Mystic",
      descripcion: "Alrededor de las montañas y colinas de Oregón y California, un equipo de expertos cultivadores de cánnabis trabajaba en nuevas cepas, que finalmente sentaron las bases de las variedades actuales de marihuana de América del Norte.",
      precio: 45,
      img: "assets/img/semillas/feminizadas/blue-mistic.jpg"
    },
    {
      id: 8,
      nombre: "El Patron",
      descripcion: "El Patron es un híbrido equilibrado que estimula la mente y calma el cuerpo. Acierta siempre, independientemente de tu estado de ánimo.",
      precio: 35,
      img: "assets/img/semillas/feminizadas/el-patron.jpg"
    },
    {
      id: 9,
      nombre: "O.G. Kush",
      descripcion: "Originaria del Norte de California, esta cepa de cannabis se ha dado a conocer rápidamente en todo el mundo por su distintivo aroma y sus fuertes efectos. La OG Kush es una variedad especialmente única que no se puede comparar con ninguna otra cepa de marihuana.",
      precio: 15,
      img: "assets/img/semillas/feminizadas/og-kush-.jpg"
    },
    {
      id: 10,
      nombre: "Purple Queen",
      descripcion: "La Purple Queen es pura realeza índica. Mediante el cruce de los fenotipos morados más exclusivos y apreciados de las variedades de la cordillera del Kush, los maestros cultivadores de Royal Queen Seeds han creado un maravilloso híbrido. La Purple Queen ofrece intensos colores, un penetrante aroma a combustible y pino y un fuerte colocón físico.",
      precio: 55,
      img: "assets/img/semillas/feminizadas/purple-queen.jpg"
    },
    {
      id: 11,
      nombre: "Royal Cookies",
      descripcion: "La Royal Cookies trae a Europa lo mejor de la genética Cali Weed. Con los mejores genes Cookies, produce un dulce y potente cogollo capaz de animar la mente y relajar el cuerpo. Además, gracias a su predominancia Indica, tiene unos rendimientos de hasta 525g/m² tras solo 8-9 semanas de floración.",
      precio: 45,
      img: "assets/img/semillas/feminizadas/royal-cookies.jpg"
    },
    {
      id: 12,
      nombre: "Royal Skywalker",
      descripcion: "La Royal Skywalker te llevará de paseo. Gracias a su impresionante contenido de THC del 25% solo necesitarás un par de caladas para lanzarte al espacio. Sin embargo, si consigues encontrar tu dosis ideal, esta variedad te animará y te relajará completamente al mismo tiempo. Sus terpenos con sabores de arándanos, cítricos y pimienta son la guinda del pastel.",
      precio: 30,
      img: "assets/img/semillas/feminizadas/royal-skywalker.jpg"
    }
  ]

const contenido = document.querySelector("#shopping")

for (const sema of semas){
    let semilla = document.createElement("div")

    semilla.innerHTML = 
    `
    <div class="col">
        <div class="card w-100">
            <img src="${sema.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h2 class="card-title">${sema.nombre}</h2>
            <p class="card-text">${sema.descripcion}</p>
            <p class="card-text">Precio: $${sema.precio}</p>
            <button id="agregar" class="btn btn-success" onclick="guardarSema(${sema.id})">Agregar</button>
            </div>
        </div>
    </div>
  `
contenido.appendChild(semilla)

}

function guardarSema(semaId){
    const buscarSemilla = semas.find((e) => {
        if(e.id === semaId){
            return e
        }
    })
    if(!localStorage.getItem(semaId)){
    buscarSemilla["cantidad"] = 1
    localStorage.setItem(semaId, JSON.stringify(buscarSemilla))
    let semaACarrito = JSON.parse(localStorage.getItem(semaId))
    } else {
    let semaExistente = JSON.parse(localStorage.getItem(semaId))
    semaExistente.cantidad++
    localStorage.setItem(semaId, JSON.stringify(semaExistente))
    }

}



