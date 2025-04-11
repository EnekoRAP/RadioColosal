document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', function(e) {
        const titulo = document.getElementById('titulo').value.trim();
        if (!titulo) {
            alert('Por favor ingresa un título para el multimedia');
            e.preventDefault();
        }
    });
});