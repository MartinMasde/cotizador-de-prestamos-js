document.getElementById("calcular").addEventListener("click", function() {
    const monto = parseFloat(document.getElementById("monto").value);
    const cuotas = parseInt(document.getElementById("cuotas").value);
    const resultadoContainer = document.getElementById("resultado");
  
    if (isNaN(monto) || monto <= 0) {
      resultadoContainer.textContent = "Debe ingresar un monto válido";
      return;
    }
  
    if (isNaN(cuotas) || cuotas <= 0) {
      resultadoContainer.textContent = "Debe ingresar una cantidad de cuotas válida";
      return;
    }
  
    let recargo = 0;
  
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
  
    const valorCuota = monto * (1 + recargo) / cuotas;
    resultadoContainer.textContent = `El valor de cada cuota es: ${valorCuota.toFixed(2)} $`;
  });
  