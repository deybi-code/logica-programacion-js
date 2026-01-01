let gastos = [];

function agregarGasto() {
  const monto = document.getElementById("monto").value;

  if (monto === "" || monto <= 0) {
    alert("Ingrese un monto válido");
    return;
  }

  gastos.push(monto);

  const lista = document.getElementById("lista");
  const item = document.createElement("li");
  item.textContent = "Gasto: S/ " + monto;

  lista.appendChild(item);
}
