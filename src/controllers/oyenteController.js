const oyenteService = require('../services/oyenteService');

class oyenteController {

    async agregarOyente(req, res) {
        try {
            res.render('oyentes/agregarOyente');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getOyentes(req, res) {
        try {
            const oyentes = await oyenteService.getOyentes();
            res.render('oyentes/oyentes', { oyentes });
        } catch(error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async editarOyente(req, res) {
        try {
            const { id } = req.params;
            const oyente = await oyenteService.getOyenteById(id);
            res.render('oyentes/editarOyente', { oyente });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async createOyentes(req, res) {
        try {
            const { nombre, correo, telefono, fecha_registro, generos } = req.body;
            const nuevoOyente = await oyenteService.createOyente({ nombre, correo, telefono, fecha_registro, generos });
            res.redirect('/oyentes');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async deleteOyente(req, res) {
        try {
            const { id } = req.params;
            await oyenteService.deleteOyente(id);
            res.redirect('/oyentes');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateOyente(req, res) {
        try {
            const { id } = req.params;
            const { nombre, correo, telefono, fecha_registro, generos } = req.body;
            const oyenteActualizado = await oyenteService.updateOyente(id, { nombre, correo, telefono, fecha_registro, generos });
            res.redirect('/oyentes');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new oyenteController();