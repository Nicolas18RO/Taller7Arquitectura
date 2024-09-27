const express = require("express");
const router = express.Router();
const estudiantesmodulo = require("../modulos/estudiantesmodulo.js");

router.get("/",estudiantesmodulo.consultar);
router.post("/",estudiantesmodulo.ingresar);

router.route("/:id")
.get(estudiantesmodulo.consultarDetalle)
.put(estudiantesmodulo.actualizar)
.delete(estudiantesmodulo.borrar);

module.exports = router;