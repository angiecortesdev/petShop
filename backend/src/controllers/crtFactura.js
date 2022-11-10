const ctrFactura = {};
const { json } = require('express');
const factura = require('../models/facturas')


//Create con método POST
ctrFactura.crear = async(req, res) =>{
    await factura
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
    
}

//Read con método Get
ctrFactura.listar = async (req, res) => {
    await factura
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}


//Update con método PUT

ctrFactura.actualizar = async (req, res)=>{
    let {_id, ...body} = req.body;
    await factura
    .updateOne({_id:_id},{$set:body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//Eliminar con método Delete
ctrFactura.eliminar = async (req, res) =>{
    await factura
    .deleteOne({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}




module.exports = ctrFactura