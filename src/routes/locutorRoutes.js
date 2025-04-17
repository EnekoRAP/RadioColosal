const express = require('express');
const router = express.Router();
const locutorController = require('../controllers/locutorController');

// Form de nuevo cliente
router.get('/agregarLocutor', locutorController.agregarLocutor);
// Procesar formulario de creacion (POST)
router.post('/agregarLocutor', locutorController.createLocutor);


// Lista de clientes
router.get('/', locutorController.getLocutores);

// Form de editar cliente
router.get('/editarLocutor/:id', locutorController.editarLocutor);

// Eliminar cliente desde el listado
router.delete('/:id', locutorController.deleteLocutor);

// Solicitud de form de nuevo cliente
router.post('/:id/update', locutorController.updateLocutor);

// Solicitud de editar clientes
router.put('/:id', locutorController.updateLocutor);

module.exports = router;