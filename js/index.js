const url = 'https://examen-backend-peliculas.onrender.com';

async function cargarDatos() {
    const response = await fetch(url);
    const data = await response.json();
    const tbody = document.querySelector('#tabla tbody');
    tbody.innerHTML = '';
    data.forEach(pelicula => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${pelicula.id}</td>
            <td>${pelicula.titulo}</td>
            <td>${pelicula.genero}</td>
            <td>${pelicula.duracion}</td>
            <td>${pelicula.anio}</td>
            <td>
                <button onclick="window.location.href='editar.html?id=${pelicula.id}'">Editar</button>
                <button onclick="window.location.href='eliminar.html?id=${pelicula.id}'">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

cargarDatos();
