const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({

    idOyente: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'oyente' },
    idPrograma: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'programacion' },
    comentario: { type: String, required: true },
    calificacion: { type: Number, min: 1, max: 5, required: true },
    
},

{ collection: 'Comentarios' });

module.exports = mongoose.model('comentario', comentarioSchema);