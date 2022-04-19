const nav = document.querySelectorAll(".header-menu a");

function barra(link) {
  const pag = link.href;
  const url = location.href;
  if (url.includes(pag)) {
    link.classList.add("ativo");
  }
}

nav.forEach(barra);
