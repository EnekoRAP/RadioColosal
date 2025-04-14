const express = require('express');
const router = express.Router();
const programacionController = require('../controllers/programacionController');


router.get('/', programacionController.listProgramas);


router.get('/:id', programacionController.getPrograma);

module.exports = router;