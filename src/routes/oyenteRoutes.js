const express = require('express');
const router = express.Router();
const oyenteController = require('../controllers/oyenteController');

// Formulario de creacion
router.get('/agregarOyente', oyenteController.showCreateForm);

// Procesar creacion
router.post('/agregarOyente', oyenteController.createOyente);

// Listar oyentes
router.get('/', oyenteController.listOyentes);

// Formulario de edicion
router.get('/editarOyente/:id', oyenteController.showEditForm);

// Procesar actualizacion
router.put('/:id', oyenteController.updateOyente);

// Eliminar locutor
router.delete('/:id', oyenteController.deleteOyente);

module.exports = router;