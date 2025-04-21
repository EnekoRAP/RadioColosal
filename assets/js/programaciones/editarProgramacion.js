document.querySelector('form').addEventListener('submit', function(e) {
    const sitioWeb = document.getElementById('sitio_web').value;
    if (sitioWeb && !sitioWeb.startsWith('http://') && !sitioWeb.startsWith('https://')) {
        document.getElementById('sitio_web').value = 'https://' + sitioWeb;
    }
});
