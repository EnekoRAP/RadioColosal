const mongoose = require('mongoose');

const multimedioSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    tipo: { type: String, required: true },
    descripcion: { type: String, required: true },
    dia: { type: String, required: true },
    horario: {
        inicio: { type: String, required: true },
        fin: { type: String, required: true }
    }
},

{ collection: 'Multimedios' });

module.exports = mongoose.model('multimedio', multimedioSchema);