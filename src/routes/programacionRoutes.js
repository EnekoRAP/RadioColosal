const express = require('express');
const router = express.Router();
const programacionController = require('../controllers/programacionController');

// Formulario de creación
router.get('/agregarProgramacion', programacionController.showCreateForm);

// Procesar creación
router.post('/agregarProgramacion', programacionController.createProgramacion);

// Listar programación
router.get('/', programacionController.listProgramaciones);

// Formulario de edición
router.get('/editarProgramacion/:id', programacionController.showEditForm);

// Procesar actualización
router.put('/:id', programacionController.updateProgramacion);

// Eliminar programación
router.delete('/:id', programacionController.deleteProgramacion);

module.exports = router;