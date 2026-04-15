// QUIZ
function resposta(tipo) {
  let resultado = document.getElementById("resultado");

  if (tipo === "certo") {
    resultado.innerText = "✅ Correto! Essa prática ajuda a preservar o meio ambiente.";
  } else {
    resultado.innerText = "❌ Errado! Essa prática prejudica a natureza.";
  }
}

// CONTADOR
let numero = 0;

function contador() {
  numero++;
  document.getElementById("numero").innerText = numero;
}

// MODO ESCURO
function modoEscuro() {
  document.body.classList.toggle("dark");
}

// MENSAGEM POR HORÁRIO
window.onload = function () {
  let hora = new Date().getHours();

  if (hora < 12) {
    alert("🌅 Bom dia! Vamos cuidar do campo!");
  } else if (hora < 18) {
    alert("☀️ Boa tarde! Sustentabilidade faz a diferença!");
  } else {
    alert("🌙 Boa noite! Pense no futuro do planeta!");
  }
};