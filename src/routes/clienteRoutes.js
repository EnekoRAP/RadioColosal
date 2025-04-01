const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Form de nuevo cliente
router.get('/agregarCliente', clienteController.agregarCliente);

// Lista de clientes
router.get('/', clienteController.getClientes);

// Form de editar cliente
router.get('/editarCliente/:id', clienteController.editarCliente);

// Eliminar cliente desde el listado
router.delete('/:id', clienteController.deleteCliente);

// Solicitud de form de nuevo cliente
router.post('/agregarCliente', clienteController.createClientes);

// Solicitud de editar clientes
router.put('/editarCliente/:id', clienteController.updateCliente);

module.exports = router;