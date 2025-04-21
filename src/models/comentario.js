const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({

    idOyente: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Oyente' 
    },
    idPrograma: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Programacion' 
    },
    comentario: { 
        type: String, 
        required: true 
    },
    calificacion: { 
        type: Number, 
        min: 1, 
        max: 5, 
        required: true 
    },
    fecha: {
        type: Date,
        default: Date.now
    }
    
}, 

{ collection: 'Comentarios' });

module.exports = mongoose.model('Comentario', comentarioSchema);
