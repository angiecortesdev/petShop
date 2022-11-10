const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
    user: {type: String, required: true},
    calification: Number,
    contenido: String
})

module.exports = mongoose.model('comentarios', comentarioSchema)