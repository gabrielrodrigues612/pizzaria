fetch("http://localhost:3000/pizzas")
  .then((res) => res.json())
  .then((data) => console.log(data));

const ingredientes = document.getElementById("ingredientes");
const pizza = document.getElementById("nomePizza");
const btn = document.getElementById("btn-form");
const form = document.getElementById("formulario");

form.addEventListener("submit", cadastrar);

function cadastrar(e) {
  e.preventDefault();
  fetch("http://localhost:3000/pizzas", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: pizza.value,
      ingredientes: ingredientes.value,
    }),
  }).then((res) => res.json());
}
