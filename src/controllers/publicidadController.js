const publicidadService = require('../services/publicidadService');

class publicidadController {

    async agregarPublicidad(req, res) {
        try {
            res.render('publicidad/agregarPublicidad');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getPublicidades(req, res) {
        try {
            const publicidades = await publicidadService.getPublicidades();
            res.render('publicidad/publicidad', { publicidades });
        } catch(error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async editarPublicidad(req, res) {
        try {
            const { id } = req.params;
            const publicidad = await publicidadService.getPublicidadById(id);
            res.render('publicidad/editarPublicidad', { publicidad });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async createPublicidades(req, res) {
        try {
            const { patrocinador, contenido, tipo, fecha_inicio, fecha_fin } = req.body;
            const nuevaPublicidad = await publicidadService.createPublicidad({ patrocinador, contenido, tipo, fecha_inicio, fecha_fin });
            res.redirect('/publicidad');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async deletePublicidad(req, res) {
        try {
            const { id } = req.params;
            await publicidadService.deletePublicidad(id);
            res.redirect('/publicidad');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async updatePublicidad(req, res) {
        try {
            const { id } = req.params;
            const { patrocinador, contenido, tipo, fecha_inicio, fecha_fin } = req.body;
            const publicidadActualizada = await publicidadService.updatePublicidad(id, { patrocinador, contenido, tipo, fecha_inicio, fecha_fin });
            res.redirect('/publicidad');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new publicidadController();
