const Programacion = require('../models/programacion');

class ProgramacionService {
    async getAllProgramas() {
        return await Programacion.find().sort({ dia: 1, 'horario.inicio': 1 });
    }

    async createPrograma(programaData) {
        const programa = new Programacion(programaData);
        return await programa.save();
    }

    async getProgramaById(id) {
        return await Programacion.findById(id);
    }
}

module.exports = new ProgramacionService();