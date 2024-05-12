
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
    listaSolicitantes.push(new Solicitante(nombre, apellido, documento, edad)); // Agregar un nuevo solicitante a la lista
    for (let solicitante of listaSolicitantes) { // Recorrer la lista de solicitantes y mostrar sus datos por consola
      console.log("Nombre: " + solicitante.nombre);
      console.log("Apellido: " + solicitante.apellido);
      console.log("Documento: " + solicitante.documento);
    }
    console.log(listaSolicitantes); // ver la lista de solicitantes por consola
 
    
    resultadoContainer.textContent = `Se ha registrado un total de ${listaSolicitantes.length} solicitantes`; // Mensaje de confirmación del registro de un solicitante

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

let listaSolicitantes = [];


