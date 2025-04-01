const express = require('express');
const router = express.Router();
const locutorController = require('../controllers/locutorController');

// Form de nuevo locutor
router.get('/agregarLocutor', locutorController.agregarLocutor);

// Lista de locutores
router.get('/', locutorController.getLocutores);

// Form de editar locutor
router.get('/editarLocutor/:id', locutorController.editarLocutor);

// Eliminar locutor desde el listado
router.delete('/:id', locutorController.deleteLocutor);

// Solicitud de form de nuevo locutor
router.post('/agregarLocutor', locutorController.createLocutores);

// Solicitud de editar locutor
router.put('/editarLocutor/:id', locutorController.updateLocutor);

module.exports = router;