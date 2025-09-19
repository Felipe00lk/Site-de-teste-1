const modoEscuro = document.getElementById("escuro");
const body = document.body;

modoEscuro.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  if (body.classList.contains("dark")) {
    modoEscuro.textContent= "☀️";
  } else {
    modoEscuro.textContent = "🌑";
  }
});
