const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes.js");

app.use (express.json());
app.use(cors());

app.get ("/", (req, res) => {
    res.send ("Hola mundoooo");
})

app.use ("/estudiantes", routes);
app.listen (6500, () => {
    console.log("servidor activo");
});