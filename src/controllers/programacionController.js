const programacionService = require('../services/programacionService');

class ProgramacionController {

    async showCreateForm(req, res) {
        try {
            res.render('programacion/agregarProgramacion', {
                programacion: {
                    dia: '',
                    horario: {
                        inicio: '',
                        fin: ''
                    },
                    nombre: '',
                    descripcion: ''
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
            res.render('programacion/programaciones', { 
                programaciones,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
            });
        } catch (error) {
            res.status(500).send('Error al obtener la programación');
        }
    }

    async showEditForm(req, res) {
        try {
            const { id } = req.params;
            const programacion = await programacionService.getProgramacionById(id);
            res.render('programacion/editarProgramacion', { 
                programacion,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar la programación para edición');
        }
    }

    async createProgramacion(req, res) {
        try {
            const { dia, nombre, descripcion } = req.body;
            const horario = {
                inicio: req.body['horario.inicio'],
                fin: req.body['horario.fin']
            };

            await programacionService.createProgramacion({ 
                dia, 
                horario, 
                nombre, 
                descripcion 
            });
            
            res.redirect('/programacion');
        } catch (error) {
            res.status(500).render('programacion/agregarProgramacion', {
                error: 'Error al crear la programación',
                programacion: req.body,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
            });
        }
    }

    async updateProgramacion(req, res) {
        try {
            const { id } = req.params;
            const { dia, nombre, descripcion } = req.body;
            const horario = {
                inicio: req.body['horario.inicio'],
                fin: req.body['horario.fin']
            };

            await programacionService.updateProgramacion(id, { 
                dia, 
                horario, 
                nombre, 
                descripcion 
            });
            
            res.redirect('/programacion');
        } catch (error) {
            res.status(500).render('programacion/editarProgramacion', {
                error: 'Error al actualizar la programación',
                programacion: req.body,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
            });
        }
    }

    async deleteProgramacion(req, res) {
        try {
            const { id } = req.params;
            await programacionService.deleteProgramacion(id);
            res.redirect('/programacion');
        } catch (error) {
            res.status(500).send('Error al eliminar la programación');
        }
    }
}

module.exports = new ProgramacionController();
