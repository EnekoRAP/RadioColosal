const programacionService = require('../services/programacionService');

class programacionController {

    async agregarProgramacion(req, res) {
        try {
            res.render('programacion/agregarprogramacion');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getProgramaciones(req, res) {
        try {
            const programacion = await programacionService.getProgramaciones();
            res.render('programacion/programacion', { programacion });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async editarProgramacion(req, res) {
        try {
            const { id } = req.params;
            const programacion = await programacionService.getProgramacionById(id);
            res.render('programacion/editarProgramacion', { programacion });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async createProgramacion(req, res) {
        try {
            const { dia, horario, nombre, descripcion } = req.body;
            const nuevaProgramacion = await programacionService.createProgramacion({dia, horario, nombre, descripcion});
            res.redirect('/programacion');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProgramacion(req, res) {
        try {
            const { id } = req.params;
            await programacionService.deleteProgramacion(id);
            res.redirect('/programacion');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message })
        }
    }

    async updateProgramacion(req, res) {
        try {
            const { id } = req.params;
            const { dia, horario, nombre, descripcion } = req.body;
            const programacionActualizada = await programacionService.updateProgramacion(id, { dia, horario, nombre, descripcion });
            res.redirect('/programacion');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new programacionController();