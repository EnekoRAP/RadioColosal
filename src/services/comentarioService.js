const Comentario = require('../models/comentario');
const Oyente = require('../models/oyente');
const Programacion = require('../models/programacion');

class ComentarioService {
    async createComentario(data) {
        const comentario = new Comentario(data);
        await comentario.save();
        return comentario;
    }

    async getComentarios() {
        return await Comentario.find()
            .populate('idOyente', 'nombre')
            .populate('idPrograma', 'nombre')
            .sort({ fecha: -1 });
    }

    async getComentarioById(id) {
        return await Comentario.findById(id)
            .populate('idOyente', 'nombre')
            .populate('idPrograma', 'nombre');
    }

    async updateComentario(id, updateData) {
        return await Comentario.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
    }

    async deleteComentario(id) {
        return await Comentario.findByIdAndDelete(id);
    }

    async getOyentes() {
        return await Oyente.find({}, 'nombre _id').sort({ nombre: 1 });
    }

    async getProgramas() {
        return await Programacion.find({}, 'nombre _id').sort({ nombre: 1 });
    }

    // Nuevo método para buscar por nombre
    async findOyenteByName(nombre) {
        return await Oyente.findOne({ nombre });
    }

    // Nuevo método para buscar por nombre
    async findProgramaByName(nombre) {
        return await Programacion.findOne({ nombre });
    }
}

module.exports = new ComentarioService();