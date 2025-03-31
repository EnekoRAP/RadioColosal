const mongoose = require('mongoose');

const publicidadSchema = new mongoose.Schema({

    patrocinador: { type: String, required: true },
    contenido: { type: String, required: true }, 
    tipo: { type: String, required: true },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true },
    
},

{ collection: 'Publicidad' });

module.exports = mongoose.model('publicidad', publicidadSchema);