const url = 'https://examen-backend-peliculas.onrender.com/peliculas';

document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nuevaPelicula = {
        titulo: document.getElementById('titulo').value,
        genero: document.getElementById('genero').value,
        duracion: Number(document.getElementById('duracion').value),
        anio: Number(document.getElementById('anio').value)
    };

    console.log("Enviando datos:", nuevaPelicula);

    const respuesta = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaPelicula)
    });

    if (respuesta.ok) {
        window.location.href = 'index.html';
    } else {
        console.error("Error en el servidor");
    }
});