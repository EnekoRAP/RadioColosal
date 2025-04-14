const mongoose = require('mongoose');

const locutorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    alias: { type: String },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    estado: { type: String, enum: ['Activo', 'Inactivo', 'Vacaciones'], default: 'Activo' }
}, { collection: 'Locutores' });

module.exports = mongoose.model('Locutor', locutorSchema);