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