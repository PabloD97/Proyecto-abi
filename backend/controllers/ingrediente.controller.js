const { Ingrediente } = require("../models");
const obtenerIngredientes = async (request, response, next) => {
  try {
    const ingredientes = await Ingrediente.find({});
    response.send({ error: false, data: ingredientes });
  } catch (error) {
    console.log(error);
    next();
  }
};

const agregarIngrediente = async (request, response, next) => {
  const ingrediente = new Ingrediente(request.body);

  try {
    await ingrediente.save();
    response.json({ mensaje: "El ingrediente ha sido agregado correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

const eliminarIngrediente = async (request, response, next) => {
  try {
    const eliminado = await Ingrediente.findByIdAndDelete({
      _id: request.params.id,
    });
    response.json(eliminado);
    response.json({
      mensaje: `El ingrediente ${eliminado.nombre} fue eliminado`,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const actualizarIngrediente = async (request, response, next) => {
  try {
    const ingrediente = await Ingrediente.findByIdAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    response.json(ingrediente);
  } catch (error) {
    console.log(error), next();
  }
};

module.exports = {
  obtenerIngredientes,
  agregarIngrediente,
  eliminarIngrediente,
  actualizarIngrediente
};
