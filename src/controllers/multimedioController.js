const multimedioService = require('../services/multimedioService');

class MultimedioController {
    async showCreateForm(req, res) {
        try {
            res.render('multimedios/agregarMultimedio', {
                multimedio: {
                    horario: {
                        inicio: '',
                        fin: ''
                    }
                },
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                tiposMultimedia: ['Película', 'Serie', 'Documental', 'Programa', 'Otro'],
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el formulario');
        }
    }

    async listMultimedios(req, res) {
        try {
            const multimedios = await multimedioService.getMultimedios();
            res.render('multimedios/multimedios', { 
                multimedios,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
            });
        } catch (error) {
            res.status(500).send('Error al obtener multimedios');
        }
    }

    async showEditForm(req, res) {
        try {
            const { id } = req.params;
            const multimedio = await multimedioService.getMultimedioById(id);
            res.render('multimedios/editarMultimedio', { 
                multimedio,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                tiposMultimedia: ['Película', 'Serie', 'Documental', 'Programa', 'Otro'],
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el multimedio para edición');
        }
    }

    async createMultimedio(req, res) {
        try {
            const { titulo, tipo, descripcion, dia } = req.body;
            const horario = {
                inicio: req.body['horario.inicio'],
                fin: req.body['horario.fin']
            };

            await multimedioService.createMultimedio({ 
                titulo, 
                tipo, 
                descripcion, 
                dia, 
                horario 
            });
            
            res.redirect('/multimedios');
        } catch (error) {
            res.status(500).render('multimedios/agregarMultimedio', {
                error: 'Error al crear el multimedia',
                multimedio: req.body,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                tiposMultimedia: ['Película', 'Serie', 'Documental', 'Programa', 'Otro']
            });
        }
    }

    async updateMultimedio(req, res) {
        try {
            const { id } = req.params;
            const { titulo, tipo, descripcion, dia } = req.body;
            const horario = {
                inicio: req.body['horario.inicio'],
                fin: req.body['horario.fin']
            };

            await multimedioService.updateMultimedio(id, { 
                titulo, 
                tipo, 
                descripcion, 
                dia, 
                horario 
            });
            
            res.redirect('/multimedios');
        } catch (error) {
            res.status(500).render('multimedios/editarMultimedio', {
                error: 'Error al actualizar el multimedia',
                multimedio: req.body,
                diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                tiposMultimedia: ['Película', 'Serie', 'Documental', 'Programa', 'Otro']
            });
        }
    }

    async deleteMultimedio(req, res) {
        try {
            const { id } = req.params;
            await multimedioService.deleteMultimedio(id);
            res.redirect('/multimedios');
        } catch (error) {
            res.status(500).send('Error al eliminar el multimedia');
        }
    }
}

module.exports = new MultimedioController();