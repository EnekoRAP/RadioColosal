const express = require('express');
const router = express.Router();
const tarifaController = require('../controllers/tarifaController');

// Formulario de creacion
router.get('/agregarTarifa', tarifaController.showCreateForm);

// Procesar creacion
router.post('/agregarTarifa', tarifaController.createTarifa);

// Listar tarifas
router.get('/', tarifaController.listTarifas);

// Formulario de edicion
router.get('/editarTarifa/:id', tarifaController.showEditForm);

// Procesar actualizacion
router.put('/:id', tarifaController.updateTarifa);

// Eliminar tarifa
router.delete('/:id', tarifaController.deleteTarifa);

module.exports = router;