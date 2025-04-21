const oyenteService = require('../services/oyenteService');

class OyenteController {
    async showCreateForm(req, res) {
        try {
            res.render('oyentes/agregarOyente', {
                oyente: {
                    nombre: '',
                    correo: '',
                    telefono: '',
                    fecha_registro: new Date().toISOString().split('T')[0],
                    generos: ''
                },
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el formulario');
        }
    }

    async listOyentes(req, res) {
        try {
            const oyentes = await oyenteService.getOyentes();
            res.render('oyentes/oyentes', { 
                oyentes
            });
        } catch (error) {
            res.status(500).send('Error al obtener oyentes');
        }
    }

    async showEditForm(req, res) {
        try {
            const { id } = req.params;
            const oyente = await oyenteService.getOyenteById(id);
            res.render('oyentes/editarOyente', { 
                oyente: {
                    ...oyente._doc,
                    fecha_registro: oyente.fecha_registro.toISOString().split('T')[0]
                },
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el oyente para edición');
        }
    }

    async createOyente(req, res) {
        try {
            const { nombre, correo, telefono, fecha_registro, generos } = req.body;
            
            await oyenteService.createOyente({ 
                nombre, 
                correo, 
                telefono, 
                fecha_registro: new Date(fecha_registro),
                generos
            });
            
            res.redirect('/oyentes');
        } catch (error) {
            res.status(500).render('oyentes/agregarOyente', {
                error: 'Error al crear el oyente',
                oyente: req.body
            });
        }
    }

    async updateOyente(req, res) {
        try {
            const { id } = req.params;
            const { nombre, correo, telefono, fecha_registro, generos } = req.body;

            await oyenteService.updateOyente(id, { 
                nombre, 
                correo, 
                telefono, 
                fecha_registro: new Date(fecha_registro),
                generos
            });
            
            res.redirect('/oyentes');
        } catch (error) {
            res.status(500).render('oyentes/editarOyente', {
                error: 'Error al actualizar el oyente',
                oyente: req.body
            });
        }
    }

    async deleteOyente(req, res) {
        try {
            const { id } = req.params;
            await oyenteService.deleteOyente(id);
            res.redirect('/oyentes');
        } catch (error) {
            res.status(500).send('Error al eliminar el oyente');
        }
    }
}

module.exports = new OyenteController();