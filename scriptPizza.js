let wrap = document.getElementById("wrap");

window.onload = getPizzas;

async function getPizzas() {
  let pizzas = await fetch("http://localhost:3000/pizzas")
    .then((res) => res.json())
    .then((data) => data);

  pizzas.map((pizza) => {
    wrap.innerHTML += `
    <div onClick="popUp(${pizza.id})" id="containerPizza">
      <div>
        <h1>${pizza.title}</h1>
      </div>
      <div>
        <p>${pizza.ingredientes}</p>
      </div>
    </div>
      `;
  });
}

async function popUp(id) {
  let pizza = await fetch(`http://localhost:3000/pizzas/${id}`)
    .then((res) => res.json())
    .then((data) => data);

  document.body.innerHTML += `
      <div id=${pizza.id} class="popup">
      <div id="popInfo">
      <p onClick="excluir(${pizza.id})" id="close">X</p>
        <div>
          <h1>${pizza.title}</h1>
        </div>
        <div>
          <p>${pizza.ingredientes}</p>
        </div>
      </div>
    </div>
        `;
}

async function excluir(id) {
  let e = document.getElementById(id);
  document.body.removeChild(e);
}
