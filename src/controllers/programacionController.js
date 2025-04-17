const programacion = require('../models/programacion');
const programacionService = require('../services/programacionService');

class ProgramacionController {

    async showCreateForm(req, res) {
        try {
            res.render('programaciones/agregarProgramacion', {
                programacion: {
                    horario: {
                        inicio: '',
                        fin: ''
                    }
                },
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
               
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el formulario');
        }
    }

    async listProgramaciones(req, res) {
        try {
            const programaciones = await programacionService.getProgramaciones();
            res.render('programaciones/programaciones', { 
                programaciones,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
            });
        } catch (error) {
            res.status(500).send('Error al obtener programaciones');
        }
    }

    async showEditForm(req, res) {
        try {
            const { id } = req.params;
            const programaciones = await programacionService.getProgramacionById(id);
            res.render('programaciones/programaciones', { 
                programaciones,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el programacion para edición');
        }
    }

    async createProgramacion(req, res) {
        try {
            const { nombre, descripcion, dia } = req.body;
            const horario = {
                inicio: req.body['horario.inicio'],
                fin: req.body['horario.fin']
            };

            await programacionService.createProgramacion({ 
                nombre, 

                descripcion, 
                dia, 
                horario 
            });
            
            res.redirect('/programaciones');
        } catch (error) {
            res.status(500).render('programaciones/agregarProgramacion', {
                error: 'Error al crear programacion',
                programacion: req.body,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
                
            });
        }
    }

    async updateProgramacion(req, res) {
        try {
            const { id } = req.params;
            const { nombre, descripcion, dia } = req.body;
            const horario = {
                inicio: req.body['horario.inicio'],
                fin: req.body['horario.fin']
            };

            await programacionService.updateProgramacion(id, { 
                nombre, 

                descripcion, 
                dia, 
                horario 
            });
            
            res.redirect('/programaciones');
        } catch (error) {
            res.status(500).render('programaciones/editarProgramacion', {
                error: 'Error al actualizar la programacion',
                programacion: req.body,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
            });
        }
    }

    async deleteProgramacion(req, res) {
        try {
            const { id } = req.params;
            await programacionService.deleteProgramacion(id);
            res.redirect('/programaciones');
        } catch (error) {
            res.status(500).send('Error al eliminar la programacion');
        }
    }
}

module.exports = new ProgramacionController();