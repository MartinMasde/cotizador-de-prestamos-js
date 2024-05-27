// Cargar la lista de solicitantes al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const listaSolicitantes = JSON.parse(localStorage.getItem("solicitantes")) || [];
    const tbody = document.querySelector("#tablaSolicitantes tbody");

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

        tbody.appendChild(tr);
    });

    document.getElementById("volver").addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
