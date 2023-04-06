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

// galeria de imagens
const galeria = document.querySelectorAll(".bicicleta-imagem img");
const galeriaContainer = document.querySelector(".bicicleta-imagem");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1100px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGaleria);

// animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
