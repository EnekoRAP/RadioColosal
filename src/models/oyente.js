const mongoose = require('mongoose');

const oyenteSchema = new mongoose.Schema({

    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String, required: true },
    fecha_registro: { type:Date, required: true },
    generos: { trype: String }
    
},

{ collection: 'Oyentes' });

module.exports = mongoose.model('oyente', oyenteSchema);