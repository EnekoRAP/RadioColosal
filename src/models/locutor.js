const mongoose = require('mongoose');

const locutorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    biografia: { type: String },
    redSocial: {
        instagram: { type: String },
        facebook: { type: String }
    },
    programas: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Programacion' 
    }]
}, { collection: 'Locutores' });

module.exports = mongoose.model('Locutor', locutorSchema);
