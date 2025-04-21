document.querySelector('form').addEventListener('submit', function(e) {
    const inicio = document.getElementById('horario.inicio').value;
    const fin = document.getElementById('horario.fin').value;
    
    if (inicio && fin && inicio >= fin) {
        alert('La hora de inicio debe ser anterior a la hora de fin');
        e.preventDefault();
    }
    
    const titulo = document.getElementById('titulo').value.trim();
    if (!titulo) {
        alert('Por favor ingresa un título para el multimedia');
        e.preventDefault();
    }
});
