// Cargar la lista de solicitantes al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const listaSolicitantes = JSON.parse(localStorage.getItem("solicitantes")) || [];
    // Verificar si hay solicitantes guardados
    const tbody = document.querySelector("#tablaSolicitantes tbody");
        // Limpiar el contenido de la tabla
        tbody.innerHTML = "";
        // Iterar sobre la lista de solicitantes y agregar una fila por cada solicitante a la tabla
        listaSolicitantes.forEach(solicitante => {
            const tr = document.createElement("tr");

            const tdNombre = document.createElement("td");
            tdNombre.textContent = solicitante.nombre;
            tr.appendChild(tdNombre);

            const tdApellido = document.createElement("td");
            tdApellido.textContent = solicitante.apellido;
            tr.appendChild(tdApellido);

            const tdDocumento = document.createElement("td");
            tdDocumento.textContent = solicitante.documento;
            tr.appendChild(tdDocumento);

            const tdEdad = document.createElement("td");
            tdEdad.textContent = solicitante.edad;
            tr.appendChild(tdEdad);
            // Agregar la fila a la tabla
            tbody.appendChild(tr);
        } );

    // Event Listener para el boton de Volver
    document.getElementById("volver").addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
