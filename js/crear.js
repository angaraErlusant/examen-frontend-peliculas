const url = 'https://examen-backend-peliculas.onrender.com/pelicula';

document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nuevaPelicula = {
        titulo: document.getElementById('titulo').value,
        genero: document.getElementById('genero').value,
        duracion: parseInt(document.getElementById('duracion').value),
        anio: parseInt(document.getElementById('anio').value)
    };

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaPelicula)
    });

    window.location.href = 'index.html';
});
