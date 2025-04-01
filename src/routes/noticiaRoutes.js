const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');

// Form de nueva noticia
router.get('/agregarNoticia', noticiaController.agregarNoticia);

// Lista de noticias
router.get('/', noticiaController.getNoticias);

// Form de editar noticia
router.get('/editarNoticia/:id', noticiaController.editarNoticia);

// Eliminar noticia desde el listado
router.delete('/:id', noticiaController.deleteNoticia);

// Solicitud de form de nueva noticia
router.post('/agregarNoticia', noticiaController.createNoticias);

// Solicitud de editar noticia
router.put('/editarNoticia/:id', noticiaController.updateNoticia);

module.exports = router;