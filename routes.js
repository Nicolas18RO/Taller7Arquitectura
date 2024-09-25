const express = require("express");
const router = express.Router();
const estudiantescontroller = require("./estudiantescontrollers.js");

router.post("/", estudiantescontroller.ingresar);
module.exports = router;