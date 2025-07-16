fetch('data.json')
  .then(res => res.json())
  .then(data => initMalla(data));

function initMalla(asignaturas) {
  const malla = document.getElementById("malla");
  asignaturas.forEach(ramo => {
    const div = document.createElement("div");
    div.className = `ramo ${ramo.estado} ${ramo.categoria}`;
    div.id = ramo.codigo;
    div.innerHTML = `${ramo.nombre}<br>(${ramo.creditos} cr)`;
    if (ramo.estado !== "bloqueado") {
      div.addEventListener("click", () => marcarRamo(ramo.codigo, asignaturas));
    }
    malla.appendChild(div);
  });
}

function marcarRamo(codigo, asignaturas) {
  const ramo = document.getElementById(codigo);
  if (ramo.classList.contains("aprobado")) {
    ramo.classList.remove("aprobado");
    ramo.classList.add("disponible");
  } else {
    ramo.classList.remove("disponible");
    ramo.classList.add("aprobado");
  }
