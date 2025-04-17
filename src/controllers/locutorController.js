const locutorService = require('../services/locutorService');
const programacionService = require('../models/programacion');

class locutorController {
    async agregarLocutor(req, res) {
        try {
            const programas = await programacionService.find();
            res.render('locutores/agregarLocutor', {
                locutor: {
                    nombre: '',
                    biografia: '',
                    redSocial: {
                        instagram: '',
                        facebook: ''
                    },
                    idProgramas: []
                },
                programas,
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el formulario');
        }
    }

    async getLocutores(req, res) {
        try {
            const locutores = await locutorService.getLocutores();
            res.render('locutores/locutores', { 
                locutores
            });
        } catch (error) {
            res.status(500).send('Error al obtener locutores');
        }
    }



    async editarLocutor(req, res) {
        try {
            const { id } = req.params;
            const locutor = await locutorService.getLocutorById(id);
            const programas = await programacionService.find();
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
            
            const data = this._prepareFormData(req.body);
            await locutorService.createLocutor(data);
            res.redirect('/locutores');
        } catch (error) {
            const programas = await programacionService.find();
            res.status(500).render('locutores/agregarLocutor', {
                error: 'Error al crear el locutor',
                locutor: req.body,
                programas
            });
        }
    }

    async updateLocutor(req, res) {
        try {
            const { id } = req.params;
            const data = this._prepareFormData(req.body);
            await locutorService.updateLocutor(id, data);
            res.redirect('/locutores');
        } catch (error) {
            console.error("Error al crear locutor:", error); // 👈 esto
            const programas = await programacionService.find();
            res.status(500).render('locutores/agregarLocutor', {
                error: 'Error al crear el locutor',
                locutor: req.body,
                programas
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

    // ✅ Método privado para formatear los datos del formulario
    _prepareFormData(body) {
        const data = {
            nombre: body.nombre,
            biografia: body.biografia,
            redSocial: {
                instagram: body['redSocial.instagram'] || '',
                facebook: body['redSocial.facebook'] || ''
            },
            idProgramas: Array.isArray(body.idProgramas)
                ? body.idProgramas.map(Number)
                : [Number(body.idProgramas)]
        };
        return data;
    }
}

module.exports = new locutorController();
