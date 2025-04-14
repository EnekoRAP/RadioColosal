const express = require('express');
const router = express.Router();
const locutorController = require('../controllers/locutorController');

// Formulario de creación
router.get('/agregarLocutor', locutorController.showCreateForm);

// Procesar creación
router.post('/agregarLocutor', locutorController.createLocutor);

// Listar locutores
router.get('/', locutorController.listLocutores);

// Formulario de edición
router.get('/editarLocutor/:id', locutorController.showEditForm);

// Procesar actualización
router.put('/:id', locutorController.updateLocutor);

// Eliminar locutor
router.delete('/:id', locutorController.deleteLocutor);

module.exports = router;