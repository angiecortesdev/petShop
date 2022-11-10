const express = require('express');
const router = express.Router();
const ctrComentario = require('../controllers/ctrComentario')

//Crear
router.post('/comentarios', ctrComentario.crear)

//Listar
router.get('/comentarios', ctrComentario.listar)

//Update
router.put('/comentarios', ctrComentario.actualizar)

//Delete
router.delete('/comentarios', ctrComentario.eliminar)

module.exports = router;