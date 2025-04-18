const express = require('express');
const router = express.Router();
const locutorController = require('../controllers/locutorController');

// Formulario de creacion
router.get('/agregarLocutor', locutorController.showCreateForm);

// Procesar creacion
router.post('/agregarLocutor', locutorController.createLocutor);

// Listar locutores
router.get('/', locutorController.listLocutores);

// Formulario de edicion
router.get('/editarLocutor/:id', locutorController.showEditForm);

// Procesar actualizacion
router.put('/:id', locutorController.updateLocutor);

// Eliminar locutor
router.delete('/:id', locutorController.deleteLocutor);

module.exports = router;