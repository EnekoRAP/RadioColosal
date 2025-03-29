const mongoose = require('mongoose');

const locutorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    biografia: { type: String, required: true },
    redSocial: {
        instagram: { type: String },
        facebook: { type: String }
    },
    idProgramas: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'programacion' }
    
},

{ collection: 'Locutores' });

module.exports = mongoose.model('locutor', locutorSchema);