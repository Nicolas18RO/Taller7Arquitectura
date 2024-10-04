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