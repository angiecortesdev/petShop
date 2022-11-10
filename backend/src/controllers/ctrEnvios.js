const ctrEnvio = {};
const { json } = require('express')
const envio = require('../models/envios')


//Crear o obtener con el método Post
ctrEnvio.crear = async (req, res) =>{
    await envio
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//Buscar con método Get
ctrEnvio.listar = async (req, res) =>{
    await envio
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

ctrEnvio.actualizar = async (req, res)=>{
    let {_id, ...body} = req.body;
    await envio
    .updateOne({_id: _id},{$set:body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}



//Borrar con el método Delete
ctrEnvio.eliminar= async (req, res)=>{
    await envio
    .deleteOne({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

module.exports = ctrEnvio;