const locutorService = require('../services/locutorService');

class LocutorController {
    async showCreateForm(req, res) {
        try {
            res.render('locutores/agregarLocutor', {
                locutor: {
                    nombre: '',
                    apellido: '',
                    alias: '',
                    email: '',
                    telefono: '',
                    estado: 'Activo'
                },
                estados: ['Activo', 'Inactivo', 'Vacaciones'],
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el formulario');
        }
    }

    async listLocutores(req, res) {
        try {
            const locutores = await locutorService.getLocutores();
            res.render('locutores/locutores', { 
                locutores,
                estados: ['Activo', 'Inactivo', 'Vacaciones']
            });
        } catch (error) {
            res.status(500).send('Error al obtener locutores');
        }
    }

    async showEditForm(req, res) {
        try {
            const { id } = req.params;
            const locutor = await locutorService.getLocutorById(id);
            res.render('locutores/editarLocutor', { 
                locutor,
                estados: ['Activo', 'Inactivo', 'Vacaciones'],
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el locutor para edición');
        }
    }

    async createLocutor(req, res) {
        try {
            await locutorService.createLocutor(req.body);
            res.redirect('/locutores');
        } catch (error) {
            res.status(500).render('locutores/agregarLocutor', {
                error: 'Error al crear el locutor',
                locutor: req.body,
                estados: ['Activo', 'Inactivo', 'Vacaciones']
            });
        }
    }

    async updateLocutor(req, res) {
        try {
            const { id } = req.params;
            await locutorService.updateLocutor(id, req.body);
            res.redirect('/locutores');
        } catch (error) {
            res.status(500).render('locutores/editarLocutor', {
                error: 'Error al actualizar el locutor',
                locutor: req.body,
                estados: ['Activo', 'Inactivo', 'Vacaciones']
            });
        }
    }

    async deleteLocutor(req, res) {
        try {
            const { id } = req.params;
            await locutorService.deleteLocutor(id);
            res.redirect('/locutores');
        } catch (error) {
            res.status(500).send('Error al eliminar el locutor');
        }
    }
}

module.exports = new LocutorController();