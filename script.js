function iniciarSesion() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificación de credenciales (en un entorno real, deberías hacer esto en el servidor)
    if (username === "admin" && password === "123456") {
        // Credenciales válidas, mostrar la sección de consulta
        document.querySelector(".login-container").style.display = "none";
        document.querySelector(".consulta-container").style.display = "block";
    } else {
        alert("Credenciales incorrectas. Intenta de nuevo.");
    }
}

function consultarDatos() {
    var idInput = document.getElementById("idInput").value;
    var resultadosDiv = document.getElementById("resultados");

    // Simulación de consulta de datos (en un entorno real, deberías hacer esto en el servidor)
    var datosSimulados = {
        nombre: "Juan",
        apellidos: "Pérez Torres",
        edad: 3,
        sexo: "Hombre",
        departamento: "Piura",
        provincia: "Sechura",
        distrito: "Tambo",
        pobreza: "Pobre extremo"
    };

    resultadosDiv.innerHTML = `<p><b>Nombre:</b> ${datosSimulados.nombre}</p>
                               <p><b>Apellidos:</b> ${datosSimulados.apellidos}</p>
                               <p><b>Edad:</b> ${datosSimulados.edad}</p>
                               <p><b>Sexo:</b> ${datosSimulados.sexo}</p>
                               <p><b>Departamento:</b> ${datosSimulados.departamento}</p>
                               <p><b>Provincia:</b> ${datosSimulados.provincia}</p>
                               <p><b>Distrito:</b> ${datosSimulados.distrito}</p>
                               <p><b>Pobreza:</b> ${datosSimulados.pobreza}</p>`;
}
