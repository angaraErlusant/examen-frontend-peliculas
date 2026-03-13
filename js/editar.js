const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const url = `https://examen-backend-peliculas.onrender.com${id}`;

async function cargarPelicula() {
    const response = await fetch(url);
    const pelicula = await response.json();
    document.getElementById('titulo').value = pelicula.titulo;
    document.getElementById('genero').value = pelicula.genero;
    document.getElementById('duracion').value = pelicula.duracion;
    document.getElementById('anio').value = pelicula.anio;
}

document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();
    const peliculaActualizada = {
        titulo: document.getElementById('titulo').value,
        genero: document.getElementById('genero').value,
        duracion: parseInt(document.getElementById('duracion').value),
        anio: parseInt(document.getElementById('anio').value)
    };

    await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(peliculaActualizada)
    });

    window.location.href = 'index.html';
});

cargarPelicula();