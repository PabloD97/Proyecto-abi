const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecetaSchema = new Schema({
    nombre: {type: String, require: true},
    descripcion: {type: String},
    ingredientes: [{
        nombre: String,
        gramos: Number
    }],
    imagen: {type: String},
    cantidad: {type: Number, require: true}
},{ timestamps: { createdAt: true, updatedAt: true } });


module.exports = mongoose.model('receta', RecetaSchema);