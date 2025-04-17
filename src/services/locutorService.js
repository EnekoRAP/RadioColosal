const Locutor = require('../models/locutor');

class locutorService {
    async createLocutor(data) {
        const locutor = new Locutor(data);
        await locutor.save();
        return locutor;
    }

    async getLocutores() {
        return await Locutor.find()
            .populate('idProgramas') 
            .sort({ nombre: 1 });     
    }

    async editarLocutor(id) {
        return await Locutor.findById(id).populate('idProgramas');
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

module.exports = new locutorService();
