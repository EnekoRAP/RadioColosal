const Locutor = require('../models/locutor');

class LocutorService {
    async createLocutor(data) {
        const locutor = new Locutor(data);
        await locutor.save();
        return locutor;
    }

    async getLocutores() {
        return await Locutor.find().sort({ apellido: 1, nombre: 1 });
    }

    async getLocutorById(id) {
        return await Locutor.findById(id);
    }

    async updateLocutor(id, updateData) {
        return await Locutor.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
    }

    async deleteLocutor(id) {
        return await Locutor.findByIdAndDelete(id);
    }
}

module.exports = new LocutorService();