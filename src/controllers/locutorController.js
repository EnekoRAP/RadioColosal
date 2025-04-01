const locutorService = require('../services/locutorService');
const Programacion = require('../models/programacion');

class locutorController {

    async agregarLocutor(req, res) {
        try {
            const programacion = await Programacion.find();
            res.render('programacion/agregarProgramacion', { programacion });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getLocutores(req, re) {
        try {
            const locutores = await locutorService.getLocutores();
            res.render('locutores/locutores', { locutores });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async editarLocutor(req, res) {
        try {
            const { id } = req.params;
            const locutor = await locutorService.getLocutorById(id);
            res.render('locutores/editarLocutor', { locutor });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async createLocutor(req, res) {
        try {
            const { nombre, biografia, redSocial, idProgramas } = req.body;
            const nuevoLocutor = await locutorService.createLocutor({
                nombre,
                biografia,
                redSocial,
                idProgramas
            });
            res.redirect('/locutores');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async deleteLocutor(req, res) {
        try {
            const { id } = req.params;
            await locutorService.deleteLocutor(id);
            res.redirect('/locutores');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateLocutor(req, res) {
        try {
            const { id } = req.params;
            const { nombre, biografia, redSocial, idProgramas } = req.body;
            const programacionActualizada = await locutorService.updateLocutor(id, { nombre, biografia, redSocial, idProgramas });
            res.redirect('/locutores');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new locutorController();