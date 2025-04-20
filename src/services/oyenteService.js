const Oyente = require('../models/oyente');

class oyenteService {
    async createOyente(data) {
        const oyente = new Oyente(data);
        await oyente.save();
        return oyente;
    }

    async getOyentes() {
        return await Oyente.find();
    }

    async getOyenteById(id) {
        return await Oyente.findById(id);
    }

    async updateOyente(id, data) {
        return await Oyente.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteOyente(id) {
        return await Oyente.findByIdAndDelete(id);
    }

}

module.exports = new oyenteService();