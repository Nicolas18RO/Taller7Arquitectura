const express = require("express");
const router = express.Router();
const cursomodulo = require("../modulos/cursomodulo.js");

router.get("/",cursomodulo.consultar);
router.post("/",cursomodulo.ingresar);

router.route("/:id")
.get(cursomodulo.consultarDetalle)
.put(cursomodulo.actualizar)
.delete(cursomodulo.borrar);

module.exports = router;