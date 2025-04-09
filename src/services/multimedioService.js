const Multimedio = require('../models/multimedio');

class MultimedioService {
    async createMultimedio(data) {
        const multimedio = new Multimedio({
            titulo: data.titulo,
            tipo: data.tipo,
            descripcion: data.descripcion,
            dia: data.dia,
            horario: {
                inicio: data.horario.inicio,
                fin: data.horario.fin
            }
        });
        await multimedio.save();
        return multimedio;
    }

    async getMultimedios() {
        return await Multimedio.find().sort({ dia: 1, 'horario.inicio': 1 });
    }

    async getMultimedioById(id) {
        return await Multimedio.findById(id);
    }

    async updateMultimedio(id, updateData) {
        return await Multimedio.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
    }

    async deleteMultimedio(id) {
        return await Multimedio.findByIdAndDelete(id);
    }
}

module.exports = new MultimedioService();