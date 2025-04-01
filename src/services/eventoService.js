const Evento = require('../models/evento');

class eventoService {

    // Operaciones CRUD
    async createEvento(data) {
        const evento = new Evento(data);
        await evento.save();
        return evento;
    }

    async getEventos() {
        return await Evento.find();
    }

    async getEventoById(id) {
        return await Evento.findById(id);
    }

    async updateEvento(id, data) {
        return await Evento.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteEvento(id) {
        return await Evento.findByIdAndDelete(id);
    }

}

module.exports = new eventoService();