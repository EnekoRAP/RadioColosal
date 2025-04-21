document.addEventListener('DOMContentLoaded', function() {
    const deleteForms = document.querySelectorAll('form[action*="/oyentes/"]');
    
    deleteForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!confirm('¿Estás seguro de que deseas eliminar al oyente?')) {
                e.preventDefault();
            }
        });
    });
});