
// Función para calcular el valor de las cuotas de un préstamo
const calcularPrestamo = () => {
  const monto = parseFloat(document.getElementById("monto").value);
  const cuotas = parseInt(document.getElementById("cuotas").value);
  const resultadoContainer = document.getElementById("resultado");
  // Verificacion de que los valores ingresados sean válidos
  if (isNaN(monto) || monto <= 0) {
    // Mostrar aviso de error usando SweetAlert2
    Swal.fire({
      title: "Debe ingresar un monto válido",
      icon: "error"
    });
    return;
  }
  // Verificacion de que los valores ingresados sean válidos
  if (isNaN(cuotas) || cuotas <= 0) {
    // Mostrar aviso de error usando SweetAlert2
    Swal.fire({
      title: "Debe ingresar una cantidad de cuotas válida",
      icon: "error"
    });
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
      // Mostrar aviso de error usando SweetAlert2
      Swal.fire({
        title: "No se permiten más de 36 cuotas, ingrese nuevamente",
        icon: "error"
      });
      return;
  }
 // Calculo del valor de cada cuota
  const valorCuota = (monto * (1 + recargo)) / cuotas;
  // Mostrar el valor de cada cuota en el HTML usando SweetAlert2
  Swal.fire({
    title: "El valor de cada cuota es:",
    text: `$ ${valorCuota.toFixed(2)} `,
    icon: "success"
  });
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
  // Obtener el valor de la verificacion, si o no
  let verificacion = document.querySelector(".registro").value;

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

    // Mensaje de confirmación del registro de un solicitante usando SweetAlert2
    Swal.fire({
          position: "center",
          icon: "success",
          title: "Usuario registrado correctamente",
          showConfirmButton: false,
          timer: 2500
        }).then(() => {
          // Limpiar los inputs después de mostrar el mensaje de éxito
          document.getElementById("nombre").value = "";
          document.getElementById("apellido").value = "";
          document.getElementById("documento").value = "";
          document.getElementById("edad").value = "";
        });

  } else if (verificacion === "no") {
    return;
  } else {
    // Mostrar aviso de error usando SweetAlert2 si 
    Swal.fire({
      title: "Registro de Solicitante",
      text: "Debe ingresar un valor válido",
      icon: "error"
    });
  }
} ;
// Event Listener para el botón de registrar solicitante
document.getElementById("registrar").addEventListener("click", registrarSolicitante); 

// Event Listener para el botón de listar solicitantes 
document.getElementById("listar").addEventListener("click", () => {
  // Obtener la lista de solicitantes guardada en el local storage
  const solicitantesGuardados = localStorage.getItem("solicitantes");
  // Verificar si hay solicitantes guardados
  if ( !solicitantesGuardados || JSON.parse(solicitantesGuardados).length === 0) {
    // Si no hay solicitantes guardados, mostrar un mensaje tipo alert usando Toastify
    Toastify({
      text: "No hay solicitantes registrados",
      duration: 3000,
      newWindow: true,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #000ff, #87cefa)",
      },
    }).showToast();
  } else {
    // Si hay solicitantes guardados, redirigir a la página de lista.html para mostrarlos
    window.location.href = "lista.html";
  }
});






