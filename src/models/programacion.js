const mongoose = require('mongoose');

const programacionSchema = new mongoose.Schema({

    dia: { type: String, required: true },
    horario: {
        inicio: { type: String, required: true },
        fin: { type: String, required: true }
    },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    
},

{ collection: 'Programacion' });

module.exports = mongoose.model('programacion', programacionSchema);