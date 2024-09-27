function GuardarDatosEstudiantes(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
        "documentodeidentidad": document.getElementById("documentodeidentidad").value,
        "nombrescompletosdelestudiante": document.getElementById("nombrescompletosdelestudiante").value

    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch("http://localhost:6500/estudiantes/", requestOptions)
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
    
    fetch("http://localhost:6500/estudiantes/", requestOptions)
        .then((response)=>response.text())
        .then((result)=>console.log(result))
        .catch((error)=>console.error(error))
}

function GuardarDatosEstudiantes(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
        "documentodeidentidad": document.getElementById("documentodeidentidad").value,
        "nombrescompletosdelestudiante": document.getElementById("nombrescompletosdelestudiante").value

    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch("http://localhost:6500/estudiantes/", requestOptions)
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
        "horafinal": document.getElementById("horafinal").value

    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch("http://localhost:6500/estudiantes/", requestOptions)
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

    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch("http://localhost:6500/estudiantes/", requestOptions)
        .then((response)=>response.text())
        .then((result)=>console.log(result))
        .catch((error)=>console.error(error))
}