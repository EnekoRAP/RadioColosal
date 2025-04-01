const Tarifa = require('../models/tarifa');

class tarifaService {

    // Operaciones CRUD
    async createTarifa(data) {
        const tarifa = new Tarifa(data);
        await tarifa.save();
        return tarifa;
    }

    async getTarifas() {
        return await Tarifa.find();
    }

    async getTarifaById(id) {
        return await Tarifa.findById(id);
    }

    async updateTarifa(id, data) {
        return await Tarifa.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteTarifa(id) {
        return await Tarifa.findByIdAndDelete(id);
    }

}

module.exports = new tarifaService();