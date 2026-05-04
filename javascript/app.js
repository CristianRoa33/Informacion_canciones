
/*Codigo que resuelve la pregunta */

const personas = []

function datosPersonas () {
    if (personas.length === 6) {
        console.log("Ya hay 6 personas registradas")
    } else {
       /*  const nombre = prompt("Ingrese el nombre de la persona")
        const cedula = prompt("Ingrese la cedula de la persona")
        const fechaNacimiento = prompt("Ingrese la fecha de nacimiento de la persona")
        const ciudadResidencia = prompt("Ingrese la ciudad de residencia de la persona")
        const ciudadOrigen = prompt("Ingrese la ciudad de origen de la persona") */
        let persona= {
            nombre: nombre,
            cedula: cedula,
            fechaNacimiento: fechaNacimiento,
            ciudadResidencia: ciudadResidencia,
            ciudadOrigen: ciudadOrigen,
            canciones: []
        }

        for (let i = 0; i < 3; i++) {
          /*   const artista = prompt("Ingrese el nombre del artista")
            const cancion = prompt("Ingrese el nombre de la canción")
            const genero = prompt("Ingrese el género de la canción")
 */
            if (artista === "" || artista === null) {
                break
                console.log("No se ingresó una canción válida")
        }

            persona.canciones.push({
                cancion: cancion,
                artista: artista,
                genero: genero
            })
        }

        personas.push(persona)
        console.log(persona)
        renderizarTarjetas()

    }
      
}

console.log(datosPersonas())

function rifa() {
    if (personas.length < 6) {
        console.log("Todavía no hay 6 personas registradas")
        return
    }

    // Generar número aleatorio entre 0 y 5
    let min = 0
    let max = personas.length - 1
    let indiceGanador = Math.floor(Math.random() * (max - min + 1)) + min

    // Acceder al objeto ganador
    let ganador = personas[indiceGanador]

}

function renderizarTarjetas() {
    const contenedorTarjetas = document.getElementById("ContanedorTarjetas")
    contenedorTarjetas.innerHTML = ""
    personas.forEach(persona => {
        const tarjeta = document.createElement("div")
        tarjeta.classList.add("tarjetas")
        tarjeta.innerHTML = `
            <h3>${persona.nombre}</h3>
            <p>Cédula: ${persona.cedula}</p>
            <p>Fecha de Nacimiento: ${persona.fechaNacimiento}</p>
            <p>Ciudad de Residencia: ${persona.ciudadResidencia}</p>
            <p>Ciudad de Origen: ${persona.ciudadOrigen}</p>
        `
        contenedorTarjetas.appendChild(tarjeta)
    })

}


function mostrarSeccion(id, evento) {
  evento.preventDefault()   

  document.querySelectorAll('.seccion').forEach(s => {
    s.classList.remove('activa')
  })

  document.getElementById(id).classList.add('activa')
}