const { Receta } = require("../models");

const obtenerRecetas = async (request, response, next) => {
  try {
    const recetas = await Receta.find({});
    response.send({ error: false, data: recetas });
  } catch (error) {
    console.log(error);
    next();
  }
};

const agregarReceta = async (request, response, next) => {
  const receta = new Receta(request.body);

  try {
    await receta.save();
    response.json({ mensaje: "La receta ha sido agregado correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

const eliminarReceta = async (request, response, next) => {
  try {
    const eliminado = await Receta.findByIdAndDelete({
      _id: request.params.id,
    });
    response.json(eliminado);
    response.json({
      mensaje: `La receta ${eliminado.nombre} fue eliminado`,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const actualizarReceta = async (request, response, next) => {
  try {
    const receta = await Receta.findByIdAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    response.json(receta);
  } catch (error) {
    console.log(error), next();
  }
};


module.exports = {
    obtenerRecetas,
    agregarReceta,
    eliminarReceta,
    actualizarReceta
}