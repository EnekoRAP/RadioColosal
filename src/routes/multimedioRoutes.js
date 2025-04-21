const express = require('express');
const router = express.Router();
const multimedioController = require('../controllers/multimedioController');

// Formulario de creacion
router.get('/agregarMultimedio', multimedioController.showCreateForm);

// Procesar creacion
router.post('/agregarMultimedio', multimedioController.createMultimedio);

// Listar multimedios
router.get('/', multimedioController.listMultimedios);

// Formulario de edicion
router.get('/editarMultimedio/:id', multimedioController.showEditForm);

// Procesar actualizacion
router.put('/:id', multimedioController.updateMultimedio);

// Eliminar multimedia
router.delete('/:id', multimedioController.deleteMultimedio);

module.exports = router;
