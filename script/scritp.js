// orçamento
const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const item = document.getElementById(parametro);
  if (item) {
    item.checked = true;
  }
}
parametros.forEach(ativarProdutos);

// perguntas
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativo);
}

function mostrarPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(mostrarPergunta);
