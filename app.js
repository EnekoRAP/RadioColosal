const express = require('express');
const methodOverride = require('method-override');
const connectDB = require('./src/config/db');
const locutorRoutes = require('./src/routes/locutorRoutes');
const programacionRoutes = require('./src/routes/programacionRoutes');
const publicidadRoutes = require('./src/routes/publicidadRoutes');
const noticiaRoutes = require('./src/routes/noticiaRoutes');
const eventoRoutes = require('./src/routes/eventoRoutes');
const oyenteRoutes = require('./src/routes/oyenteRoutes');
const comentarioRoutes = require('./src/routes/comentarioRoutes');
const multimedioRoutes = require('./src/routes/multimedioRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const tarifaRoutes = require('./src/routes/tarifaRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear cuerpo de la solicitud (JSON y URL-encoded)
app.use(express.urlencoded({ extended: true })); // Primero el body parser
app.use(express.json());
app.use(methodOverride('_method')); // Luego method-override

// Configuración de vistas con EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Configuración de archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static('assets'));

// Rutas: Index
app.get('/', (req, res) => {
    res.render('index'); // Renderiza src/views/index.ejs
});

// Rutas de la aplicación
app.use('/locutores', locutorRoutes);
app.use('/programacion', programacionRoutes);
app.use('/publicidad', publicidadRoutes);
app.use('/noticias', noticiaRoutes);
app.use('/eventos', eventoRoutes);
app.use('/oyentes', oyenteRoutes);
app.use('/comentarios', comentarioRoutes);
app.use('/multimedios', multimedioRoutes);
app.use('/clientes', clienteRoutes);
app.use('/tarifas', tarifaRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));