const noticiaService = require('../services/noticiaService');

class noticiaController {

    async agregarNoticia(req, res) {
        try {
            res.render('noticias/agregarNoticia');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getNoticias(req, res) {
        try {
            const noticias = await noticiaService.getNoticias();
            res.render('noticias/noticias', { noticias });
        } catch(error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async editarNoticia(req, res) {
        try {
            const { id } = req.params;
            const noticia = await noticiaService.getNoticiaById(id);
            res.render('noticias/editarNoticia', { noticia });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async createNoticias(req, res) {
        try {
            const { titulo, contenido, fecha, autor } = req.body;
            const nuevaNoticia = await noticiaService.createNoticia({ titulo, contenido, fecha, autor });
            res.redirect('/noticias');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async deleteNoticia(req, res) {
        try {
            const { id } = req.params;
            await noticiaService.deleteNoticia(id);
            res.redirect('/noticias');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateNoticia(req, res) {
        try {
            const { id } = req.params;
            const { titulo, contenido, fecha, autor } = req.body;
            const noticiaActualizada = await noticiaService.updateNoticia(id, { titulo, contenido, fecha, autor });
            res.redirect('/noticias');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new noticiaController();