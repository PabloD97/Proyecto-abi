const express = require("express");
const server = express();
const cors = require("cors");
const { IngredienteController, RecetaController } = require("../controllers");
const { Ingrediente } = require("../models");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

// TODO: Crear una carpeta routers que se encargue de los endpoints
server.get("/api/ingredientes", IngredienteController.obtenerIngredientes);
server.get("/api/recetas", RecetaController.obtenerRecetas);
server.get("/api/costo_receta/:id", RecetaController.costoTotal);


server.put('/api/actualizar_ingredientes', async(request, response, next) => {
  const actualizacion = await Ingrediente.updateMany({"esGramos": true}, {"$set":{"created": true}});
  response.json(actualizacion);

})

server.post(
  "/api/agregar_ingrediente",
  IngredienteController.agregarIngrediente
);
server.post("/api/agregar_receta", RecetaController.agregarReceta);

server.delete(
  "/api/eliminar_ingrediente/:id",
  IngredienteController.eliminarIngrediente
);
server.delete("/api/eliminar_receta/:id", RecetaController.eliminarReceta);

server.put(
  "/api/actualizar_ingrediente/:id",
  IngredienteController.actualizarIngrediente
);
server.put("/api/actualizar_receta/:id", RecetaController.actualizarReceta);

module.exports = server;
