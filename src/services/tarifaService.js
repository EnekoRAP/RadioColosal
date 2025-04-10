const Tarifa = require('../models/tarifa');

class TarifaService {
    async createTarifa(data) {
        const tarifa = new Tarifa(data);
        await tarifa.save();
        return tarifa;
    }

    async getTarifas() {
        return await Tarifa.find().sort({ tipo: 1, precio: 1 });
    }

    async getTarifaById(id) {
        return await Tarifa.findById(id);
    }

    async updateTarifa(id, updateData) {
        return await Tarifa.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
    }

    async deleteTarifa(id) {
        return await Tarifa.findByIdAndDelete(id);
    }
}

module.exports = new TarifaService();