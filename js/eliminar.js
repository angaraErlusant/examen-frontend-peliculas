const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const url = `https://examen-backend-peliculas.onrender.com${id}`;

document.getElementById('btnEliminar').addEventListener('click', async () => {
    await fetch(url, {
        method: 'DELETE'
    });
    window.location.href = 'index.html';
});
