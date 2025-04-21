const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({

    tipo: { type: String, required: true },
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    sitio_web: { type: String, required: true },
    red_social: {
        facebook: { type: String },
        x: { type: String },
        instagram: { type: String },
        youtube: { type: String }
    },

},

{ collection: 'Clientes' });

module.exports = mongoose.model('cliente', clienteSchema);
