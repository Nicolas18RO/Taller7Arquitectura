class EstudiantesController{
    construct(){
    }

    ingresar(req, res){
        try {
            const myJSON = JSON.stringify(req.body);
            console.log("la informacion que llega es "+ myJSON);
            const {nombres} = req.body; 
            res.status(201).json({id: "Registro Exitoso......5.0"});

        } catch (err) {
            res.status(500).send(err.mesagge);
        }
    }
}
module.exports = new EstudiantesController();