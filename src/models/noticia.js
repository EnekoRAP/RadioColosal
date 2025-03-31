const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({

    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
    fecha: { type: Date, required: true },
    autor: {type: String, required: true },
    
},

{ collection: 'Noticias' });

module.exports = mongoose.model('noticia', noticiaSchema);