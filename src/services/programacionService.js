const Programacion = require('../models/programacion');

class ProgramacionService {
    async createProgramacion(data) {
        const programacion = new Programacion({
            nombre: data.nombre,
            descripcion: data.descripcion,
            dia: data.dia,
            horario: {
                inicio: data.horario.inicio,
                fin: data.horario.fin
            }
        });
        await programacion.save();
        return programacion;
    }

    async getProgramaciones() {
        return await Programacion.find().sort({ dia: 1, 'horario.inicio': 1 });
    }

    async getProgramacionById(id) {
        return await Programacion.findById(id);
    }

    async updateProgramacion(id, updateData) {
        return await Multimedio.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
    }

    async deleteProgramacion(id) {
        return await Programacion.findByIdAndDelete(id);
    }
}

module.exports = new ProgramacionService();