const express = require('express');
const router = express.Router();
const programacionController = require('../controllers/programacionController');

// Formulario de creacion
router.get('/agregarProgramacion', programacionController.showCreateForm);

// Procesar creacion
router.post('/agregarProgramacion', programacionController.createProgramacion);

// Listar multimedios
router.get('/', programacionController.listProgramaciones);

// Formulario de edicion
router.get('/editarProgramacion/:id', programacionController.showEditForm);

// Procesar actualizacion
router.put('/:id', programacionController.updateProgramacion);

// Eliminar multimedia
router.delete('/:id', programacionController.deleteProgramacion);

module.exports = router;