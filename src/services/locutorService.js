const Locutor = require('../models/locutor');
const Programacion = require('../models/programacion');

class LocutorService {
    async createLocutor(data) {
        const locutor = new Locutor(data);
        await locutor.save();
        return locutor;
    }

    async getLocutores() {
        return await Locutor.find()
            .sort({ nombre: 1 })
            .populate('programas', 'nombre');
    }

    async getLocutorById(id) {
        return await Locutor.findById(id).populate('programas', 'nombre');
    }

    async updateLocutor(id, updateData) {
        return await Locutor.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        }).populate('programas', 'nombre');
    }

    async deleteLocutor(id) {
        return await Locutor.findByIdAndDelete(id);
    }

    async getAllProgramas() {
        return await Programacion.find({}, 'nombre _id').sort({ nombre: 1 });
    }
}

module.exports = new LocutorService();
