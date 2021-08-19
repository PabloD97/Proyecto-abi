const mongoose = require("mongoose");
const { Schema } = mongoose;

const IngredienteSchema = new Schema(
  {
    nombre: { type: String, require: true },
    precioKg: { type: Number, require: true },
    esGramos: { type: Boolean, require: true}
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

// TODO: Realizar la busqueda mediante el nombre y obtener el precio
// por gramos



module.exports = mongoose.model('ingrediente', IngredienteSchema);
