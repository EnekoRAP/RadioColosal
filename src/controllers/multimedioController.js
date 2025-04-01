const multimedioService = require('../services/multimedioService');

class multimedioController {

    async agregarMultimedio(req, res) {
        try {
            res.render('multimedios/agregarMultimedio');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getMultimedios(req, res) {
        try {
            const multimedios = await multimedioService.getMultimedios();
            res.render('multimedios/multimedios', { multimedios });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async editarMultimedio(req, res) {
        try {
            const { id } = req.params;
            const multimedio = await multimedioService.getMultimedioById(id);
            res.render('multimedios/editarMultimedio', { multimedio });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async createMultimedios(req, res) {
        try {
            const { titulo, tipo, descripcion, dia, horario } = req.body;
            const nuevoMultimedio = await multimedioService.createMultimedio({ titulo, tipo, descripcion, dia, horario });
            res.redirect('/multimedios');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async deleteMultimedio(req, res) {
        try {
            const { id } = req.params;
            await multimedioService.deleteMultimedio(id);
            res.redirect('/multimedios');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateMultimedio(req, res) {
        try {
            const { id } = req.params;
            const { titulo, tipo, descripcion, dia, horario } = req.body;
            const multimedioActualizado = await multimedioService.updateMultimedio(id, { titulo, tipo, descripcion, dia, horario });
            res.redirect('/multimedios');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new multimedioController();