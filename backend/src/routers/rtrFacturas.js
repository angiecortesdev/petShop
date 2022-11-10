const express = require('express');
const router = express.Router();
const ctrFactura = require('../controllers/crtFactura')


//Create
router.post('/facturas', ctrFactura.crear)

//Read
router.get('/facturas', ctrFactura.listar)

//Update
router.put('/facturas', ctrFactura.actualizar)

//Delete
router.delete('/facturas/:id', ctrFactura.eliminar)

module.exports = router;