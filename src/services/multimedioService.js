const Multimedio = require('../models/multimedio');

class multimedioService {

    // Operaciones CRUD
    async createMultimedio(data) {
        const multimedio = new Multimedio(data);
        await multimedio.save();
        return multimedio;
    }

    async getMultimedio() {
        return await Multimedio.find();
    }

    async getMultimedioById(id) {
        return await Multimedio.findById(id);
    }

    async updateMultimedio(id, data) {
        return await Multimedio.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteMultimedio(id) {
        return await Multimedio.findByIdAndDelete(id);
    }

}

module.exports = new multimedioService();