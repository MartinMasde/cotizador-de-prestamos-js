
// Función para calcular el valor de las cuotas de un préstamo
const calcularPrestamo = () => {
  const monto = parseFloat(document.getElementById("monto").value);
  const cuotas = parseInt(document.getElementById("cuotas").value);
  const resultadoContainer = document.getElementById("resultado");
  // Verificacion de que los valores ingresados sean válidos
  if (isNaN(monto) || monto <= 0) {
    resultadoContainer.textContent = "Debe ingresar un monto válido";
    return;
  }
  // Verificacion de que los valores ingresados sean válidos
  if (isNaN(cuotas) || cuotas <= 0) {
    resultadoContainer.textContent = "Debe ingresar una cantidad de cuotas válida";
    return;
  }

  let recargo = 0;
  // Calculo del recargo segun la cantidad de cuotas y aviso de error si se ingresan mas de 36 cuotas
  switch (true) {
    case cuotas <= 12:
      recargo = 0.02;
      break;
    case cuotas <= 24:
      recargo = 0.03;
      break;
    case cuotas <= 36:
      recargo = 0.045;
      break;
    default:
      resultadoContainer.textContent = "No se permiten más de 36 cuotas, ingrese nuevamente";
      return;
  }
 // Calculo del valor de cada cuota
  const valorCuota = (monto * (1 + recargo)) / cuotas;
  resultadoContainer.textContent = `El valor de cada cuota es: ${valorCuota.toFixed(2)} $`;
};

// Event Listener para el botón de calcular prestamo
document.getElementById("calcular").addEventListener("click", calcularPrestamo);


// Definicion de la clase Solicitante
class Solicitante {
  constructor(nombre, apellido, documento, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.documento = documento;
    this.edad = edad;
  }
}

// Incializa la lista de solicitantes con los datos guardados en el local storage o una lista vacia
let listaSolicitantes = JSON.parse(localStorage.getItem("solicitantes")) || [];

// Funcion para registrar solicitantes de prestamos
const registrarSolicitante = (e) => {
  e.preventDefault();
  let verificacion = document.querySelector(".registro").value;
  const resultadoContainer = document.getElementById("resultado2");

  // Verificacion de que los valores ingresados sean válidos  
  if (verificacion === "si" 
      && document.getElementById("nombre").value !== "" 
      && document.getElementById("apellido").value !== "" 
      && document.getElementById("documento").value !== "" 
      && document.getElementById("edad").value !== "") {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let documento = document.getElementById("documento").value;
    let edad = document.getElementById("edad").value;
    // Agregar un nuevo solicitante a la lista  
    listaSolicitantes.push(new Solicitante(nombre, apellido, documento, edad)); 

    // Guardar la lista de solicitantes en el local storage
    localStorage.setItem("solicitantes", JSON.stringify(listaSolicitantes));

    // Recorrer la lista de solicitantes y mostrar sus datos por consola
    // for (let solicitante of listaSolicitantes) { 
    //   console.log("Nombre: " + solicitante.nombre);
    //   console.log("Apellido: " + solicitante.apellido);
    //   console.log("Documento: " + solicitante.documento);
    // }
    // console.log(listaSolicitantes); // ver la lista de solicitantes por consola
 
    // Mensaje de confirmación del registro de un solicitante
    resultadoContainer.textContent = `Se ha registrado correctamente.
                                      Hay un total de ${listaSolicitantes.length} solicitantes`; 

    // Limpiar los inputs lueego de agregar un solicitante
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("documento").value = "";
    document.getElementById("edad").value = "";

  } else if (verificacion === "no") {
    return;
  } else {
    alert("Ingrese un valor válido");
  }
} ;
// Event Listener para el botón de registrar solicitante
document.getElementById("registrar").addEventListener("click", registrarSolicitante); 

// Funcion para listar solicitantes de prestamos
const listarSolicitantes = () => {
  // Obtener la lista de solicitantes guardada en el local storage
  const solicitantesGuardados = localStorage.getItem("solicitantes");

  // Verificar si hay solicitantes guardados
  if (solicitantesGuardados) {
    const listaSolicitantes = JSON.parse(solicitantesGuardados);
    const listaSolicitantesDiv = document.getElementById("listaSolicitantes");
    //  Limpiar la lista de solicitantes antes de mostrarla
    listaSolicitantesDiv.innerHTML = "";

    //  Crear una lista para mostrar los solicitantes
    const ul = document.createElement("ul");

    // Crear un li por cada solicitante y agregarlo a la lista
    listaSolicitantes.forEach((solicitante) => {
      const li = document.createElement("li");
      li.textContent = ` Nombre: ${solicitante.nombre}, Apellido: ${solicitante.apellido},
                         Documento: ${solicitante.documento}, Edad: ${solicitante.edad}`;
      ul.appendChild(li);
    });

    // Mostrar la lista de solicitantes en el HTML
    listaSolicitantesDiv.appendChild(ul);

    } else {
      alert("No hay solicitantes registrados");
    }
  } ; 

  // Event Listener para el boton de Listar solicitantes
  document.getElementById("listar").addEventListener("click", listarSolicitantes);






