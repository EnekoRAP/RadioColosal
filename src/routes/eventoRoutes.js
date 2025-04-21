const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

// Form de nuevo evento
router.get('/agregarEvento', eventoController.agregarEvento);

// Lista de eventos
router.get('/', eventoController.getEventos);

// Form de editar evento
router.get('/editarEvento/:id', eventoController.editarEvento);

// Eliminar evento desde el listado
router.delete('/:id', eventoController.deleteEvento);

// Solicitud de form de nuevo evento
router.post('/agregarEvento', eventoController.createEventos);

// Solicitud de editar evento
router.put('/editarEvento/:id', eventoController.updateEvento);

module.exports = router;
