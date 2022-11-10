const ctrComentario = {};
const { json } = require('express');
const comentario = require('../models/comentarios');

//Create método post
ctrComentario.crear = async (req, res)=>{
    await comentario
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//Read método get
ctrComentario.listar = async (req, res)=>{
    await comentario
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//Update método put
ctrComentario.actualizar = async (req, res)=>{
    let {_id, ...body} = req.body;
    await comentario
    .updateOne({_id: _id},{$set:body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//Delete método delete
ctrComentario.eliminar = async (req, res)=>{
    await comentario
    .deleteOne({_id :req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}


module.exports = ctrComentario;