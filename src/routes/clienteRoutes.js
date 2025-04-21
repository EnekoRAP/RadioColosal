const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Form de nuevo cliente
router.get('/agregarCliente', clienteController.agregarCliente);

// Procesar formulario de creacion (POST)
router.post('/agregarCliente', clienteController.createClientes);

// Lista de clientes
router.get('/', clienteController.getClientes);

// Form de editar cliente
router.get('/editarCliente/:id', clienteController.editarCliente);

// Eliminar cliente desde el listado
router.delete('/:id', clienteController.deleteCliente);

// Solicitud de form de nuevo cliente
router.post('/:id/update', clienteController.updateCliente);

// Solicitud de editar clientes
router.put('/:id', clienteController.updateCliente);

module.exports = router;
