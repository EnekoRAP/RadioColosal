const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({

    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha: { type: Date, required: true },
    ubicacion: { type: String, required: true },
    
},

{ collection: 'Eventos' });

module.exports = mongoose.model('evento', eventoSchema);