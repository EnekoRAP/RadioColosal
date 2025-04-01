const comentarioService = require('../services/comentarioService');
const Oyente = require('../models/oyente');
const Programacion = require('../models/programacion');

class comentarioController {

    async getComentarios(req, res) {
        try {
            const comentarios = await comentarioService.getComentarios();
            res.render('comentarios/comentarios', { comentarios });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async agregarComentario(req, res) {
        try {
            const oyentes = await Oyente.find();
            const programas = await Programacion.find();
            res.render('comentarios/agregarComentario', { oyentes, programas });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async createComentarios(req, res) {
        try {
            const { idOyente, idPrograma, comentario, calificacion } = req.body;
            const nuevoComenatrio = await comentarioService.createComentario({ idOyente, idPrograma, comentario, calificacion });
            res.redirect('/comentarios');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async editarComentario(req, res) {
        try {
            const { id } = req.params;
            const comentario = await comentarioService.getComentarioById(id);
            const oyentes = await Oyente.find();
            const programas = await Programacion.find();
            res.render('comentarios/editarComentario', { comentario, oyentes, programas });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateComentario(req, res) {
        try {
            const { id } = req.params;
            const { idOyente, idPrograma, comentario, calificacion } = req.body;
            const comentarioActualizado = await comentarioService.updateComentario(id, { idOyente, idPrograma, comentario, calificacion });
            res.redirect('/comentarios'); 
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async deleteComentario(req, res) {
        try {
            const { id } = req.params;
            await comentarioService.deleteComentario(id);
            res.redirect('/comentarios');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new comentarioController();