document.addEventListener("click", (e) => {
  if (
    e.target.innerHTML === "Empresa y iniciativa emprendedora" ||
    e.target.innerHTML === "Empresa y iniciativa emprendedora" ||
    e.target.innerHTML === "Desarrollo entorno cliente" ||
    e.target.innerHTML === "Libre configuracion" ||
    e.target.innerHTML === "Desarrollo entorno servidor" ||
    e.target.innerHTML === "Diseño de interfaces web" ||
    e.target.innerHTML === "Despliege de aplicaciones web"
  ) {
    e.target.classList.add("activo");
  }
});
document.addEventListener("mouseout", (e) => {
  if (
    e.target.innerHTML === "Empresa y iniciativa emprendedora" ||
    e.target.innerHTML === "Desarrollo entorno cliente" ||
    e.target.innerHTML === "Libre configuracion" ||
    e.target.innerHTML === "Desarrollo entorno servidor" ||
    e.target.innerHTML === "Diseño de interfaces web" ||
    e.target.innerHTML === "Despliege de aplicaciones web"
  ) {
    e.target.classList.remove("activo");
  }
});
