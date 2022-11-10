const mongoose = require('mongoose');

const infoEnvioSchema = new mongoose.Schema({
    Name: { type: String, required: true},
    LastName: { type: String, required: true },
    Address: { type: String, required: true },
    Country: { type: String, required: true },
    Department: String,
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('envios', infoEnvioSchema)