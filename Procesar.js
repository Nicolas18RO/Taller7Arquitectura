function GuardarDatosEstudiantes(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
        "documentodeidentidaddelestudiante": document.getElementById("documentodeidentidad").value,
        "nombrescompletosdelestudiante": document.getElementById("nombrescompletosdelestudiante").value

    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch("http://localhost:8888/.netlify/functions/estudiantes", requestOptions)
        .then((response)=>response.text())
        .then((result)=>console.log(result))
        .catch((error)=>console.error(error))
}

function GuardarDatosCurso(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
        "nombredelcurso": document.getElementById("nombredelcurso").value,

    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch("http://localhost:8888/.netlify/functions/cursos", requestOptions)
        .then((response)=>response.text())
        .then((result)=>console.log(result))
        .catch((error)=>console.error(error))
}

function GuardarDatosSesion(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
        "fecha": document.getElementById("fecha").value,
        "horainicio": document.getElementById("horainicio").value,
        "horafinal": document.getElementById("horafinal").value,
        "Cursos_codigodelcurso": document.getElementById("Cursos_codigodelcurso").value

    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch("http://localhost:8888/.netlify/functions/sesiones", requestOptions)
        .then((response)=>response.text())
        .then((result)=>console.log(result))
        .catch((error)=>console.error(error))
}

function GuardarDatosAsistencia(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
        "multaasistencia": document.getElementById("multaasistencia").value,
        "Estudiantes_documentodeidentidaddelestudiante": document.getElementById("Estudiantes_documentodeidentidaddelestudiante").value,
        "Sesiones_numerodesecuencia": document.getElementById("Sesiones_numerodesecuencia").value

    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch("http://localhost:8888/.netlify/functions/asistencia", requestOptions)
        .then((response)=>response.text())
        .then((result)=>console.log(result))
        .catch((error)=>console.error(error))
}

//--------------------METODOS DE CONSULTA--------------------------

function cargarLE(resultado){
    let transformado = JSON.parse(resultado);
    var salida="";
    var elemento="";
    elemento = elemento + "<br>Documento de identidad: " + transformado.documentodeidentidaddelestudiante;
    elemento = elemento + "<br>Nombres: " + transformado.nombrescompletosdelestudiante;
    salida = salida  + elemento + "<br><br>";
    document.getElementById("rtaCE").innerHTML = salida;
}

function ConsultarEstudiante(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    let elid=document.getElementById("idCE").value;
    fetch("http://localhost:8888/.netlify/functions/estudiantes/"+elid, requestOptions)
      .then((response) =>
        response.text())
      .then((result) =>
        cargarLE(result))
      .catch((error) =>
        console.error(error))
}

function cargar(resultado){
    let transformado = JSON.parse(resultado);
    var salida="";
    var elemento="";

    for (let vc in transformado){
        elemento = elemento + "<br>Documento de identidad: " + transformado[vc].documentodeidentidaddelestudiante;
        elemento = elemento + "<br>Nombres: " + transformado[vc].nombrescompletosdelestudiante;
    }
    salida = salida  + elemento + "<br><br>";
    document.getElementById("rta").innerHTML = salida;
}

function Buscar_Estudiantes(){
    event.preventDefault();
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    fetch("http://localhost:8888/.netlify/functions/estudiantes/", requestOptions)
      .then((response) =>
        response.text())
      .then((result) =>
        cargar(result))
      .catch((error) =>
        console.error(error));

}



//consultar curso
function cargarLC(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";
  elemento = elemento + "<br>Documento de identidad: " + transformado.codigodelcurso;
  elemento = elemento + "<br>Nombres: " + transformado.nombredelcurso;
  salida = salida  + elemento + "<br><br>";
  document.getElementById("rtaC").innerHTML = salida;
}

function ConsultarCursos(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  let elid=document.getElementById("idCC").value;
  fetch("http://localhost:8888/.netlify/functions/cursos/"+elid, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarLC(result))
    .catch((error) =>
      console.error(error))
}

function cargarCursos(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";

  for (let vc in transformado){
      elemento = elemento + "<br>Documento de identidad: " + transformado[vc].codigodelcurso;
      elemento = elemento + "<br>Nombres: " + transformado[vc].nombredelcurso;
  }
  salida = salida  + elemento + "<br><br>";
  document.getElementById("rtaCC").innerHTML = salida;
}

function Buscar_Cursos(){
  event.preventDefault();
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("http://localhost:8888/.netlify/functions/cursos/", requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarCursos(result))
    .catch((error) =>
      console.error(error));

}

//Consulatr Sesiones
function cargarLS(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";
  elemento = elemento + "<br>ID: " + transformado.numerodesecuencia;
      elemento = elemento + "<br>ID Curso: " + transformado.Cursos_codigodelcurso;
      elemento = elemento + "<br>Fecha: " + transformado.fecha;
      elemento = elemento + "<br>Hora Inico: " + transformado.horainicio;
      elemento = elemento + "<br>Hora Fin: " + transformado.horafinal;
  salida = salida  + elemento + "<br><br>";
  document.getElementById("rtaS").innerHTML = salida;
}

function ConsultarSesiones(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  let elid=document.getElementById("idCS").value;
  fetch("http://localhost:8888/.netlify/functions/sesiones/"+elid, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarLS(result))
    .catch((error) =>
      console.error(error))
}

function cargarSesiones(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";

  for (let vc in transformado){
      elemento = elemento + "<br>ID: " + transformado[vc].numerodesecuencia;
      elemento = elemento + "<br>ID Curso: " + transformado[vc].Cursos_codigodelcurso;
      elemento = elemento + "<br>Fecha: " + transformado[vc].fecha;
      elemento = elemento + "<br>Hora Inico: " + transformado[vc].horainicio;
      elemento = elemento + "<br>Hora Fin: " + transformado[vc].horafinal;
  }
  salida = salida  + elemento + "<br><br>";
  document.getElementById("rtaCS").innerHTML = salida;
}

function Buscar_Sesiones(){
  event.preventDefault();
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("http://localhost:8888/.netlify/functions/sesiones/", requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarSesiones(result))
    .catch((error) =>
      console.error(error));

}

//Consulatr Asistencias
function cargarLA(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";
  elemento = elemento + "<br>ID: " + transformado.numerodesecuencia;
  elemento = elemento + "<br>ID Estudiante: " + transformado.Estudiantes_documentodeidentidaddelestudiante;
  elemento = elemento + "<br>ID Sesion: " + transformado.Sesiones_numerodesecuencia;
  elemento = elemento + "<br>Multa: " + transformado.multaasistencia;
  salida = salida  + elemento + "<br><br>";
  document.getElementById("rtaAs").innerHTML = salida;
}

function ConsultarAsitencia(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  let elid=document.getElementById("idCA").value;
  fetch("http://localhost:8888/.netlify/functions/asistencia/"+elid, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarLA(result))
    .catch((error) =>
      console.error(error))
}

function cargarAsistencias(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";

  for (let vc in transformado){
      elemento = elemento + "<br>ID: " + transformado[vc].numerodesecuencia;
      elemento = elemento + "<br>ID Estudiante: " + transformado[vc].Estudiantes_documentodeidentidaddelestudiante;
      elemento = elemento + "<br>ID Sesion: " + transformado[vc].Sesiones_numerodesecuencia;
      elemento = elemento + "<br>Multa: " + transformado[vc].multaasistencia;
  }
  salida = salida  + elemento + "<br><br>";
  document.getElementById("rtaCA").innerHTML = salida;
}

function Buscar_Asistencias(){
  event.preventDefault();
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("http://localhost:8888/.netlify/functions/asistencia/", requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarAsistencias(result))
    .catch((error) =>
      console.error(error));

}

//---------------METODOS DE MODIFICAR--------------
function respuesta_actualizar(resultado){
  document.getElementById("rtaMD").innerHTML = resultado;
}

function actualizar(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({
    "nombre": document.getElementById("Modi_Nombre").value
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let elid=document.getElementById("Modi_Id").value;
  fetch("http://localhost:8888/.netlify/functions/estudiantes/"+elid, requestOptions)
    .then((response) =>
          response.text())
    .then((result) =>
          respuesta_actualizar(result))
    .catch((error) =>
          console.error(error));
}

//Cursos
function respuesta_actualizar_curso(resultado){
  document.getElementById("rtaMC").innerHTML = resultado;
}

function actualizar_curso(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({
    "nombreCurso": document.getElementById("PUT_Nombre").value
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let elid=document.getElementById("PUT_IdC").value;
  fetch("http://localhost:8888/.netlify/functions/cursos/"+elid, requestOptions)
    .then((response) =>
          response.text())
    .then((result) =>
      respuesta_actualizar_curso(result))
    .catch((error) =>
          console.error(error));
}

//Sesiones
function respuesta_actualizar_sesiones(resultado){
  document.getElementById("rtaMS").innerHTML = resultado;
}

function actualizar_sesiones(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({
    "Sesion_fecha": document.getElementById("PUT_fecha").value,
    "Sesion_horainicio": document.getElementById("PUT_horainicio").value,
    "Sesion_horafinal": document.getElementById("PUT_horafinal").value,
    "Sesion_Cursos_codigodelcurso": document.getElementById("PUT_Cursos_codigodelcurso").value
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let elid=document.getElementById("PUT_IdS").value;
  fetch("http://localhost:8888/.netlify/functions/sesiones/"+elid, requestOptions)
    .then((response) =>
          response.text())
    .then((result) =>
      respuesta_actualizar_sesiones(result))
    .catch((error) =>
          console.error(error));
}

//Asistencia
function respuesta_actualizar_asistencia(resultado){
  document.getElementById("rtaMA").innerHTML = resultado;
}

function actualizar_asistencia(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({
    "Asistencia_ID_Estudiante": document.getElementById("PUT_ID_Estudiante").value,
    "Asistencia_ID_Sesion": document.getElementById("PUT_ID_Sesiones").value,
    "Asistencia_Multa": document.getElementById("PUT_Multa").value
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let elid=document.getElementById("PUT_IdA").value;
  fetch("http://localhost:8888/.netlify/functions/asistencia/"+elid, requestOptions)
    .then((response) =>
          response.text())
    .then((result) =>
      respuesta_actualizar_asistencia(result))
    .catch((error) =>
          console.error(error));
}

//--------------METODOS DELETE-------------
function cargarEE(resultado){
  let transformado = JSON.parse(resultado);
  document.getElementById("rtaDE").innerHTML = transformado.respuesta;
}

function eliminar_estudiante(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  let elid=document.getElementById("DEL_Id").value;
  fetch("http://localhost:8888/.netlify/functions/estudiantes/"+elid, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarEE(result))
    .catch((error) =>
      console.error(error));
}

//Cursos
function cargarEC(resultado){
  let transformado = JSON.parse(resultado);
  document.getElementById("rtaDC").innerHTML = transformado.respuesta;
}

function eliminar_cursos(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  let elid=document.getElementById("DEL_IdC").value;
  fetch("http://localhost:8888/.netlify/functions/cursos/"+elid, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarEC(result))
    .catch((error) =>
      console.error(error));
}

//Sesiones
function cargarES(resultado){
  let transformado = JSON.parse(resultado);
  document.getElementById("rtaDS").innerHTML = transformado.respuesta;
}

function eliminar_sesiones(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  let elid=document.getElementById("DEL_IdS").value;
  fetch("http://localhost:8888/.netlify/functions/sesiones/"+elid, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarES(result))
    .catch((error) =>
      console.error(error));
}

//Asistencia
function cargarEAs(resultado){
  let transformado = JSON.parse(resultado);
  document.getElementById("rtaDA").innerHTML = transformado.respuesta;
}

function eliminar_asistencia(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  let elid=document.getElementById("DEL_IdA").value;
  fetch("http://localhost:8888/.netlify/functions/asistencia/"+elid, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarEAs(result))
    .catch((error) =>
      console.error(error));
}