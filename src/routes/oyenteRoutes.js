const express = require('express');
const router = express.Router();
const oyenteController = require('../controllers/oyenteController');

// Form de nuevo oyente
router.get('/agregarOyente', oyenteController.agregarOyente);

// Lista de oyentes
router.get('/', oyenteController.getOyentes);

// Form de editar oyente
router.get('/editarOyente/:id', oyenteController.editarOyente);

// Eliminar oyente desde el listado
router.delete('/:id', oyenteController.deleteOyente);

// Solicitud de form de nuevo oyente
router.post('/agregarOyente', oyenteController.createOyentes);

// Solicitud de editar oyente
router.put('/editarOyente/:id', oyenteController.updateOyente);

module.exports = router;