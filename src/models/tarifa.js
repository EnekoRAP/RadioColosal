const mongoose = require('mongoose');

const tarifaSchema = new mongoose.Schema({

    tipo: { type: String, required: true },
    cobertura: { type: String, required: true },
    tiempo: { type: String, required: true },
    precio: { type: Number, required: true, min: 0 },
    
},

{ collection: 'Tarifas' });

module.exports = mongoose.model('tarifa', tarifaSchema);
