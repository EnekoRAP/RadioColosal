const mongoose = require('mongoose');


const locutorSchema = new mongoose.Schema({
    _id: { type: Number, required: true }, 
    nombre: { type: String, required: true },
    biografia: { type: String },
    redSocial: {
        instagram: { type: String },
        facebook: { type: String }
    },
    idProgramas: [{ type: Number, ref: 'Programacion' }]
}, { collection: 'Locutores' });

module.exports = mongoose.model('Locutor', locutorSchema);
