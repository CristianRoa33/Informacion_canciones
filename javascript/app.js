
/*Codigo que resuelve la pregunta */

const personas = []

function datosPersonas () {
    if (personas.length === 6) {
        alert("Ya hay 6 personas registradas")
        return
    } else {

        const nombre = document.getElementById("nombre").value.trim()
        const cedula = document.getElementById("cedula").value.trim()
        const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim()
        const email = document.getElementById("email").value.trim()
        const ciudadResidencia = document.getElementById("ciudadResidencia").value.trim()
        const ciudadOrigen = document.getElementById("ciudadOrigen").value.trim()

        if (nombre === "" || cedula === "" || fechaNacimiento === "" || email === "" || ciudadResidencia === "" || ciudadOrigen === "") {
            alert("Por favor, complete todos los campos obligatorios")
            return
        }

        let persona= {
            nombre: nombre,
            cedula: cedula,
            fechaNacimiento: fechaNacimiento,
            email: email,
            ciudadResidencia: ciudadResidencia,
            ciudadOrigen: ciudadOrigen,
            canciones: []
        }

        for (let i = 1; i <= 3; i++) {

            const artista = document.getElementById('artista' +  i).value.trim()
            const cancion = document.getElementById('cancion' +  i).value.trim()
            const genero = document.getElementById('genero' +  i).value.trim()

            if (artista !== "") {
                
            persona.canciones.push({
                artista: artista,
                cancion: cancion,
                genero: genero
            })
        }
        }
      personas.push(persona)
            limpiarFormulario()
            console.log(persona)
            renderizarTarjetas()
            mostrarSeccion('lista')
            buscarPorPosicion()
           
    }

}


function limpiarFormulario() {
  const ids = [
    'nombre', 'cedula', 'fechaNacimiento', 'email',
    'ciudadResidencia', 'ciudadOrigen',
    'artista1', 'cancion1', 'genero1',
    'artista2', 'cancion2', 'genero2',
    'artista3', 'cancion3', 'genero3'
  ]

  ids.forEach(id => {
    const el = document.getElementById(id)
    if (el) el.value = ''
  })
}

function rifa() {
    if (personas.length < 6) {
        alert("Todavía no hay 6 personas registradas")
        return
    }

    
    let min = 0
    let max = personas.length - 1
    let indiceGanador = Math.floor(Math.random() * (max - min + 1)) + min

    
    let ganador = personas[indiceGanador]

    const resultado = document.getElementById('resultadoRifa')

    resultado.innerHTML = `
    <div class="card-rifa">
    <h3>${ganador.nombre}</h3>
    <p>Cédula: ${ganador.cedula}</p>
    <p>Nacimiento: ${ganador.fechaNacimiento}</p>
    <p>Correo: ${ganador.email}</p>
    <p>Residencia: ${ganador.ciudadResidencia}</p>
    <p>Origen: ${ganador.ciudadOrigen}</p>
  </div>
`

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
            <p>Correo Electrónico: ${persona.email}</p>
            <p>Ciudad de Residencia: ${persona.ciudadResidencia}</p>
            <p>Ciudad de Origen: ${persona.ciudadOrigen}</p>
        `
        contenedorTarjetas.appendChild(tarjeta)
    })

}


function mostrarSeccion(id, evento) {
  if (evento) {
    evento.preventDefault()
  }

  document.querySelectorAll('.seccion').forEach(s => {
    s.classList.remove('activa')
  })

  document.getElementById(id).classList.add('activa')

  if (id === 'ganador') {
    rifa()
  }
}


function buscarPorPosicion() {
  const posicion = parseInt(document.getElementById('posicion').value)
  const resultado = document.getElementById('resultadoBusqueda')

  
  if (isNaN(posicion) || posicion < 1 || posicion > 6) {
    resultado.innerHTML = ''
    return
  }

  
  if (posicion > personas.length) {
    resultado.innerHTML = '<p>No hay ninguna persona en esa posición aún</p>'
    return
  }

 
  const persona = personas[posicion - 1]

  
  resultado.innerHTML = `
    
    <div class="card-resultado">
    <h3>${persona.nombre}</h3>
    <p>Cédula: ${persona.cedula}</p>
    <p>Nacimiento: ${persona.fechaNacimiento}</p>
    <p>Correo: ${persona.email}</p>
    <p>Residencia: ${persona.ciudadResidencia}</p>
    <p>Origen: ${persona.ciudadOrigen}</p>
  </div>
  `
}

mostrarSeccion('agregar')