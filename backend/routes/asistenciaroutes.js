const express = require("express");
const router = express.Router();
const asistenciamodulo = require("../modulos/asistenciamodulo.js");

router.get("/",asistenciamodulo.consultar);
router.post("/",asistenciamodulo.ingresar);

router.route("/:id")
.get(asistenciamodulo.consultarDetalle)
.put(asistenciamodulo.actualizar)
.delete(asistenciamodulo.borrar);

module.exports = router;