const comentarioService = require('../services/comentarioService');

class ComentarioController {
    async showCreateForm(req, res) {
        try {
            const [oyentes, programas] = await Promise.all([
                comentarioService.getOyentes(),
                comentarioService.getProgramas()
            ]);
            
            res.render('comentarios/agregarComentario', {
                comentario: {
                    nombreOyente: '',
                    nombrePrograma: '',
                    comentario: '',
                    calificacion: 3
                },
                oyentes,
                programas,
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el formulario');
        }
    }

    async listComentarios(req, res) {
        try {
            const comentarios = await comentarioService.getComentarios();
            res.render('comentarios/comentarios', { 
                comentarios
            });
        } catch (error) {
            res.status(500).send('Error al obtener comentarios');
        }
    }

    async showEditForm(req, res) {
        try {
            const { id } = req.params;
            const [comentario, oyentes, programas] = await Promise.all([
                comentarioService.getComentarioById(id),
                comentarioService.getOyentes(),
                comentarioService.getProgramas()
            ]);
            
            res.render('comentarios/editarComentario', { 
                comentario: {
                    ...comentario._doc,
                    nombreOyente: comentario.idOyente.nombre,
                    nombrePrograma: comentario.idPrograma.nombre
                },
                oyentes,
                programas,
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el comentario para edición');
        }
    }

    async createComentario(req, res) {
        try {
            const { nombreOyente, nombrePrograma, comentario, calificacion } = req.body;
            
            // Buscar IDs basados en los nombres
            const [oyente, programa] = await Promise.all([
                comentarioService.findOyenteByName(nombreOyente),
                comentarioService.findProgramaByName(nombrePrograma)
            ]);

            if (!oyente || !programa) {
                throw new Error('Oyente o programa no encontrado');
            }

            await comentarioService.createComentario({ 
                idOyente: oyente._id, 
                idPrograma: programa._id, 
                comentario, 
                calificacion: parseInt(calificacion)
            });
            
            res.redirect('/comentarios');
        } catch (error) {
            const [oyentes, programas] = await Promise.all([
                comentarioService.getOyentes(),
                comentarioService.getProgramas()
            ]);
            
            res.status(500).render('comentarios/agregarComentario', {
                error: error.message,
                comentario: req.body,
                oyentes,
                programas
            });
        }
    }

    async updateComentario(req, res) {
        try {
            const { id } = req.params;
            const { nombreOyente, nombrePrograma, comentario, calificacion } = req.body;

            // Buscar IDs basados en los nombres
            const [oyente, programa] = await Promise.all([
                comentarioService.findOyenteByName(nombreOyente),
                comentarioService.findProgramaByName(nombrePrograma)
            ]);

            if (!oyente || !programa) {
                throw new Error('Oyente o programa no encontrado');
            }

            await comentarioService.updateComentario(id, { 
                idOyente: oyente._id, 
                idPrograma: programa._id, 
                comentario, 
                calificacion: parseInt(calificacion)
            });
            
            res.redirect('/comentarios');
        } catch (error) {
            const [oyentes, programas] = await Promise.all([
                comentarioService.getOyentes(),
                comentarioService.getProgramas()
            ]);
            
            res.status(500).render('comentarios/editarComentario', {
                error: error.message,
                comentario: req.body,
                oyentes,
                programas
            });
        }
    }

    async deleteComentario(req, res) {
        try {
            const { id } = req.params;
            await comentarioService.deleteComentario(id);
            res.redirect('/comentarios');
        } catch (error) {
            res.status(500).send('Error al eliminar el comentario');
        }
    }
}

module.exports = new ComentarioController();