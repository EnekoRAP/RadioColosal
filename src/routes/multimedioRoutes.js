const express = require('express');
const router = express.Router();
const multimedioController = require('../controllers/multimedioController');

// Form de nuevo multimedio
router.get('/agregarMultimedio', multimedioController.agregarMultimedio);

// Lista de multimedios
router.get('/', multimedioController.getMultimedios);

// Form de editar multimedio
router.get('/editarMultimedio/:id', multimedioController.editarMultimedio);

// Eliminar multimedio desde el listado
router.delete('/:id', multimedioController.deleteMultimedio);

// Solicitud de form de nuevo multimedio
router.post('/agregarMultimedio', multimedioController.createMultimedios);

// Solicitud de editar multimedio
router.put('/editarMultimedio/:id', multimedioController.updateMultimedio);

module.exports = router;