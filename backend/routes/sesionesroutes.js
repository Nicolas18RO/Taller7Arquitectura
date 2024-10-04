const express = require("express");
const router = express.Router();
const sesionesmodulo = require("../modulos/sesionesmodulo.js");

router.get("/",sesionesmodulo.consultar);
router.post("/",sesionesmodulo.ingresar);

router.route("/:id")
.get(sesionesmodulo.consultarDetalle)
.put(sesionesmodulo.actualizar)
.delete(sesionesmodulo.borrar);

module.exports = router;