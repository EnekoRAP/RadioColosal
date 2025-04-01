const eventoService = require('../services/eventoService');

class eventoController {

    async agregarEvento(req, res) {
        try {
            res.render('eventos/agregarEvento');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getEventos(req, res) {
        try {
            const eventos = await eventoService.getEventos();
            res.render('eventos/eventos', { eventos });
        } catch(error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async editarEvento(req, res) {
        try {
            const { id } = req.params;
            const evento = await eventoService.getEventoById(id);
            res.render('eventos/editarEvento', { evento });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async createEventos(req, res) {
        try {
            const { nombre, tipo, descripcion, fecha, ubicacion } = req.body;
            const nuevoEvento = await eventoService.createEvento({ nombre, tipo, descripcion, fecha, ubicacion });
            res.redirect('/eventos');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async deleteEvento(req, res) {
        try {
            const { id } = req.params;
            await eventoService.deleteEvento(id);
            res.redirect('/eventos');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateEvento(req, res) {
        try {
            const { id } = req.params;
            const { nombre, tipo, descripcion, fecha, ubicacion } = req.body;
            const eventoActualizado = await eventoService.updateEvento(id, { nombre, tipo, descripcion, fecha, ubicacion });
            res.redirect('/eventos');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new eventoController();