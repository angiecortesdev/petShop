
const mongoose = require('mongoose');
const { Schema } = 'mongoose';

const facturaSchema = new mongoose.Schema({
    Fecha: Date,
    DescuentoFactura: Number,
    ValorFactura: Number,
    EstadoFacura: Boolean
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('facturas', facturaSchema)