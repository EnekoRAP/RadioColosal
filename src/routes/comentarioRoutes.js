const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

// Mostrar formulario de creación
router.get('/agregarComentario', comentarioController.showCreateForm);

// Procesar creación de comentario
router.post('/agregarComentario', comentarioController.createComentario);

// Listar todos los comentarios
router.get('/', comentarioController.listComentarios);

// Mostrar formulario de edición
router.get('/editarComentario/:id', comentarioController.showEditForm);

// Procesar actualización de comentario
router.put('/:id', comentarioController.updateComentario);

// Eliminar comentario
router.delete('/:id', comentarioController.deleteComentario);

module.exports = router;