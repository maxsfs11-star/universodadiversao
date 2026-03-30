const { useState } = React;

function FormularioContato() {
  const initialState = {
    nome: "",
    telefone: "",
    email: "",
    tipoEvento: "",
    dataEvento: "",
    localEvento: "",
    convidados: "",
    servico: "",
    mensagem: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [erro, setErro] = useState("");

  const numeroWhatsApp = "5517992647714";

  function formatarTelefone(valor) {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);

    if (numeros.length <= 2) return numeros;
    if (numeros.length <= 7) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "telefone") {
      setFormData((prev) => ({
        ...prev,
        telefone: formatarTelefone(value)
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function limparFormulario() {
    setFormData(initialState);
    setErro("");
  }

  function validarFormulario() {
    if (!formData.nome.trim()) {
      return "Por favor, informe seu nome.";
    }

    if (!formData.telefone.trim()) {
      return "Por favor, informe seu telefone ou WhatsApp.";
    }

    if (formData.telefone.replace(/\D/g, "").length < 10) {
      return "Digite um telefone válido com DDD.";
    }

    if (!formData.servico) {
      return "Selecione o serviço desejado.";
    }

    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();

    const mensagemErro = validarFormulario();

    if (mensagemErro) {
      setErro(mensagemErro);
      return;
    }

    setErro("");

    const texto = `
Olá! Gostaria de solicitar um orçamento.

*Nome:* ${formData.nome}
*Telefone / WhatsApp:* ${formData.telefone}
*E-mail:* ${formData.email || "Não informado"}
*Tipo de evento:* ${formData.tipoEvento || "Não informado"}
*Data do evento:* ${formData.dataEvento || "Não informada"}
*Local / Cidade:* ${formData.localEvento || "Não informado"}
*Quantidade de convidados:* ${formData.convidados || "Não informado"}
*Serviço desejado:* ${formData.servico}

*Mensagem:*
${formData.mensagem || "Sem mensagem adicional."}
    `.trim();

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="form-box">
      <h2>Peça seu orçamento</h2>
      <p>
        Preencha os dados abaixo e envie sua solicitação diretamente pelo WhatsApp.
      </p>

      {erro && <div className="form-erro">{erro}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>
              Nome <span className="campo-obrigatorio">*</span>
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
          </div>

          <div className="form-group">
            <label>
              Telefone / WhatsApp <span className="campo-obrigatorio">*</span>
            </label>
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(17) 99999-9999"
            />
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seuemail@gmail.com"
            />
          </div>

          <div className="form-group">
            <label>Tipo de evento</label>
            <input
              type="text"
              name="tipoEvento"
              value={formData.tipoEvento}
              onChange={handleChange}
              placeholder="Aniversário, casamento, confraternização..."
            />
          </div>

          <div className="form-group">
            <label>Data do evento</label>
            <input
              type="date"
              name="dataEvento"
              value={formData.dataEvento}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Local / Cidade</label>
            <input
              type="text"
              name="localEvento"
              value={formData.localEvento}
              onChange={handleChange}
              placeholder="Cidade ou local do evento"
            />
          </div>

          <div className="form-group">
            <label>Quantidade de convidados</label>
            <input
              type="number"
              name="convidados"
              value={formData.convidados}
              onChange={handleChange}
              placeholder="Ex: 50"
              min="1"
            />
          </div>

          <div className="form-group">
            <label>
              Serviço desejado <span className="campo-obrigatorio">*</span>
            </label>
            <select
              name="servico"
              value={formData.servico}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="Brinquedos">Brinquedos</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Combo completo">Combo completo</option>
              <option value="Decoração">Decoração</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="form-group full">
            <label>Mensagem</label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Conte mais detalhes sobre o evento e o que você precisa..."
            ></textarea>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-whatsapp">
            Enviar pelo WhatsApp
          </button>

          <button
            type="button"
            className="btn-limpar"
            onClick={limparFormulario}
          >
            Limpar formulário
          </button>
        </div>

        <p className="texto-ajuda">
          Ao clicar em enviar, o WhatsApp será aberto com a mensagem pronta para envio.
        </p>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("form-react"));
root.render(<FormularioContato />);