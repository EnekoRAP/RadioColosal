const express = require('express');
const router = express.Router();
const oyenteController = require('../controllers/oyenteController');

// Formulario de creación
router.get('/agregarOyente', oyenteController.showCreateForm);

// Procesar creación
router.post('/agregarOyente', oyenteController.createOyente);

// Listar oyentes
router.get('/', oyenteController.listOyentes);

// Formulario de edición
router.get('/editarOyente/:id', oyenteController.showEditForm);

// Procesar actualización
router.put('/:id', oyenteController.updateOyente);

// Eliminar oyente
router.delete('/:id', oyenteController.deleteOyente);

module.exports = router;