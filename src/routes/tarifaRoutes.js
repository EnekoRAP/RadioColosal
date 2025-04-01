const express = require('express');
const router = express.Router();
const tarifaController = require('../controllers/tarifaController');

// Form de nueva tarifa
router.get('/agregarTarifa', tarifaController.agregarTarifa);

// Lista de tarifas
router.get('/', tarifaController.getTarifas);

// Form de editar tarifa
router.get('/editarTarifa/:id', tarifaController.editarTarifa);

// Eliminar tarifa desde el listado
router.delete('/:id', tarifaController.deleteTarifa);

// Solicitud de form de nueva tarifa
router.post('/agregarTarifa', tarifaController.createTarifas);

// Solicitud de editar tarifas
router.put('/editarTarifa/:id', tarifaController.updateTarifa);

module.exports = router;