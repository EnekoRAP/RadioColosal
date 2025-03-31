const Programacion = require('../models/programacion');

class programacionService {

    // Operaciones CRUD
    async createProgramacion(data) {
        const programacion = new Programacion(data);
        await programacion.save();
        return programacion;
    }

    async getProgramacion() {
        return await Programacion.find();
    }

    async getProgramacionById(id) {
        return await Programacion.findById(id);
    }

    async updateProgramacion(id, data) {
        return await Programacion.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteProgramacion(id) {
        return await Programacion.findByIdAndDelete(id);
    }

}

module.exports = new programacionService();