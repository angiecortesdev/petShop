const express = require('express');
const router = express.Router();
const ctrEnvio = require('../controllers/ctrEnvios');


//Create
router.post('/envios', ctrEnvio.crear)

//Read
router.get('/envios', ctrEnvio.listar)

//Update
router.put('/envios', ctrEnvio.actualizar)

//Delete
router.delete('/envios/:id', ctrEnvio.eliminar)



module.exports = router;