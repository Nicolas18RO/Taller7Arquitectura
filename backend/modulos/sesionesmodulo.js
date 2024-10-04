const db= require("../database/conexion.js");


class SesionesModulo{
    construct(){

    }

    consultar(req,res){
        try{
            db.query('SELECT  * FROM sesiones',
            [],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                res.status(200).json(rows);
            });
        }catch (err){
            res.status(500).send(err.message);
        }
    }

    actualizar(req,res){
        const {id} = req.params;
        try{
            const {Sesion_Cursos_codigodelcurso, Sesion_fecha, Sesion_horainicio, Sesion_horafinal} = req.body;
            db.query('UPDATE sesiones SET Cursos_codigodelcurso=?, fecha=?, horainicio=?, horafinal=? WHERE numerodesecuencia=?;',
            [Sesion_Cursos_codigodelcurso, Sesion_fecha, Sesion_horainicio, Sesion_horafinal, id],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                if (rows.affectedRows == 1)
                    res.status(200).json({respuesta:"Registro actualizado correctamente"});
            });
        }catch (err){   
            //console.log(err);
            res.status(500).send(err.message);
        }
    }

    ingresar(req,res){
        try{
            const myJSON = JSON.stringify(req.body);
            console.log ("la información que llega es " + myJSON );


            const {fecha, horainicio, horafinal, Cursos_codigodelcurso} = req.body;
            //console.log ("el dni que llega es de " + nombredelcurso);

            db.query('INSERT INTO sesiones (fecha, horainicio, horafinal, Cursos_codigodelcurso) VALUES (?, ?, ?, ?);',
            [fecha, horainicio, horafinal, Cursos_codigodelcurso],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }else{
                    res.status(201).json({id: rows.insertId});
                }
            });

        }catch (err){
            res.status(500).send(err.message);
        }
    }

    consultarDetalle(req,res){
        const {id} = req.params;
        try{

            db.query('SELECT  * FROM sesiones WHERE numerodesecuencia=?',
            [id],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                res.status(200).json(rows[0]);
            });
        }catch (err){
            res.status(500).send(err.message);
        }

    }

    borrar(req,res){
        const {id} = req.params;
        try{
            req.body;
            db.query('DELETE FROM sesiones WHERE numerodesecuencia=?;',
            [id],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                if (rows.affectedRows == 1)
                    res.status(200).json({respuesta:"Registro borrado correctamente"});
            });
        }catch (err){
            res.status(500).send(err.message);
        }
   }
}

module.exports = new SesionesModulo();