
document.getElementById('orcamentoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const servico = document.getElementById('servico').value;
  const mensagem = document.getElementById('mensagem').value;

  // Aqui você pode integrar com backend ou serviço de envio
  document.getElementById('mensagemSucesso').textContent =
    `Obrigado, ${nome}! Seu orçamento foi enviado com sucesso.`;

  this.reset();
});
  

 /*   Created by: Truzz Blogg  
  Youtube Link: https://youtu.be/l7W5pHSr1w0  */

let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");
console.log("Testing... Ok");


setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
  }, 1280);


