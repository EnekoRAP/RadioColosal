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

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('assets'));

// Rutas: Index
app.get('/', (req, res) => {
    res.render('index'); // Renders src/views/index.ejs
});

// Rutas: Locutores
app.use('/locutores', locutorRoutes);

// Rutas: Programación
app.use('/programacion', programacionRoutes);

// Rutas: Publicidad
app.use('/publicidad', publicidadRoutes);

// Rutas: Noticias
app.use('/noticias', noticiaRoutes);

// Rutas: Eventos
app.use('/eventos', eventoRoutes);

// Rutas: Oyentes
app.use('/oyentes', oyenteRoutes);

// Rutas: Comentarios
app.use('/comentarios', comentarioRoutes);

// Rutas: Multimedios
app.use('/multimedios', multimedioRoutes);

// Rutas: Clientes
app.use('/clientes', clienteRoutes);

// Rutas: Tarifas
app.use('/tarifas', tarifaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
