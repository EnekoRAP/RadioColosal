const locutorService = require('../services/locutorService');

class LocutorController {
    async showCreateForm(req, res) {
        try {
            const programas = await locutorService.getAllProgramas();
            res.render('locutores/agregarLocutor', {
                locutor: {
                    nombre: '',
                    biografia: '',
                    redSocial: {
                        instagram: '',
                        facebook: ''
                    },
                    programas: []
                },
                programas,
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
                locutores
            });
        } catch (error) {
            res.status(500).send('Error al obtener locutores');
        }
    }

    async showEditForm(req, res) {
        try {
            const { id } = req.params;
            const [locutor, programas] = await Promise.all([
                locutorService.getLocutorById(id),
                locutorService.getAllProgramas()
            ]);
            
            res.render('locutores/editarLocutor', { 
                locutor,
                programas,
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el locutor para edición');
        }
    }

    async createLocutor(req, res) {
        try {
            const { nombre, biografia, programas } = req.body;
            const redSocial = {
                instagram: req.body['redSocial.instagram'],
                facebook: req.body['redSocial.facebook']
            };

            const programasIds = Array.isArray(programas) 
                ? programas 
                : programas ? [programas] : [];

            await locutorService.createLocutor({ 
                nombre, 
                biografia,
                redSocial,
                programas: programasIds
            });
            
            res.redirect('/locutores');
        } catch (error) {
            const programas = await locutorService.getAllProgramas();
            res.status(500).render('locutores/agregarLocutor', {
                error: 'Error al crear el locutor',
                locutor: req.body,
                programas,
                error: error.message
            });
        }
    }

    async updateLocutor(req, res) {
        try {
            const { id } = req.params;
            const { nombre, biografia, programas } = req.body;
            const redSocial = {
                instagram: req.body['redSocial.instagram'],
                facebook: req.body['redSocial.facebook']
            };

            const programasIds = Array.isArray(programas) 
                ? programas 
                : programas ? [programas] : [];

            await locutorService.updateLocutor(id, { 
                nombre, 
                biografia,
                redSocial,
                programas: programasIds
            });
            
            res.redirect('/locutores');
        } catch (error) {
            const programas = await locutorService.getAllProgramas();
            res.status(500).render('locutores/editarLocutor', {
                error: 'Error al actualizar el locutor',
                locutor: req.body,
                programas,
                error: error.message
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