const express = require('express');
const router = express.Router();
const publicidadController = require('../controllers/publicidadController');

// Form de nueva publicidad
router.get('/agregarPublicidad', publicidadController.agregarPublicidad);

// Lista de publicidades
router.get('/', publicidadController.getPublicidades);

// Form de editar publicidad
router.get('/editarPublicidad/:id', publicidadController.editarPublicidad);

// Eliminar publicidad desde el listado
router.delete('/:id', publicidadController.deletePublicidad);

// Solicitud de form de nueva publicidad
router.post('/agregarPublicidad', publicidadController.createPublicidades);

// Solicitud de editar publicidad
router.put('/editarPublicidad/:id', publicidadController.updatePublicidad);

module.exports = router;