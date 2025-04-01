const express = require('express');
const router = express.Router();
const programacionController = require('../controllers/programacionController');

// Form de nueva programacion
router.get('/agregarProgramacion', programacionController.agregarProgramacion);

// Lista de programaciones
router.get('/', programacionController.getProgramaciones);

// Form de editar programacion
router.get('/editarProgramacion/:id', programacionController.editarProgramacion);

// Eliminar programacion desde el listado
router.delete('/:id', programacionController.deleteProgramacion);

// Solicitud de form de nueva programacion
router.post('/agregarProgramacion', programacionController.createProgramacion);

// Solicitud de editar programacion
router.put('/editarProgramacion/:id', programacionController.updateProgramacion);

module.exports = router;