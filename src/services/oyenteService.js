const Oyente = require('../models/oyente');

class OyenteService {

    async createOyente(data) {
        const oyente = new Oyente(data);
        await oyente.save();
        return oyente;
    }

    async getOyentes() {
        return await Oyente.find().sort({ fecha_registro: -1 });
    }

    async getOyenteById(id) {
        return await Oyente.findById(id);
    }

    async updateOyente(id, updateData) {
        return await Oyente.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
    }

    async deleteOyente(id) {
        return await Oyente.findByIdAndDelete(id);
    }
    
}

module.exports = new OyenteService();
