const express = require("express");
const server = express();
const cors = require("cors");
const { IngredienteController, RecetaController } = require("../controllers");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());


server.get("/api/ingredientes", IngredienteController.obtenerIngredientes);
server.get("/api/recetas", RecetaController.obtenerRecetas);


server.post(
  "/api/agregar_ingrediente",
  IngredienteController.agregarIngrediente
);

server.delete(
  "/api/eliminar_ingrediente/:id",
  IngredienteController.eliminarIngrediente
);

server.put(
  "/api/actualizar_ingrediente/:id",
  IngredienteController.actualizarIngrediente
);

module.exports = server;
