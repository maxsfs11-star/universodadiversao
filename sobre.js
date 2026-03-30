const form = document.getElementById('orcamentoForm');
const mensagemSucesso = document.getElementById('mensagemSucesso');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome')?.value || '';

    if (mensagemSucesso) {
      mensagemSucesso.textContent =
        `Obrigado, ${nome}! Seu orçamento foi enviado com sucesso.`;
    }

    this.reset();
  });
}

let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");

setTimeout(function () {
  if (elem_preloader) elem_preloader.classList.remove("preloader");
  if (elem_loader) elem_loader.classList.remove("loader");
}, 1280);