const mongoose = require('mongoose');

const oyenteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String, required: true },
    fecha_registro: { type: Date, required: true, default: Date.now },
    generos: { type: String }
}, { collection: 'Oyentes' });

module.exports = mongoose.model('Oyente', oyenteSchema);