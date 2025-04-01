const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

// Form de nuevo comentario
router.get('/agregarComentario', comentarioController.agregarComentario);

// Lista de comentarios
router.get('/', comentarioController.getComentarios);

// Form de editar oyente
router.get('/editarComentario/:id', comentarioController.editarComentario);

// Eliminar comentario desde el listado
router.delete('/:id', comentarioController.deleteComentario);

// Solicitud de form de nuevo comentario
router.post('/agregarComentario', comentarioController.createComentarios);

// Solicitud de editar comentario
router.put('/editarComentario/:id', comentarioController.updateComentario);

module.exports = router;