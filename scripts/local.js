// WDD 131 - S03 Página do País

// Valores estáticos de exemplo para Maceió, Alagoas.
const temperatura = 29;
const velocidadeVento = 14;

// Calcula a sensação térmica em Celsius (fórmula de wind chill).
function calcularSensacaoTermica(temp, vento) {
  return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(vento, 0.16)) +
    (0.3965 * temp * Math.pow(vento, 0.16));
}

// A fórmula só é aplicável a temperaturas <= 10 °C e vento > 4,8 km/h.
let sensacaoTermica = "N/A";

if (temperatura <= 10 && velocidadeVento > 4.8) {
  sensacaoTermica = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} °C`;
}

document.querySelector("#temperature").textContent = temperatura;
document.querySelector("#wind").textContent = velocidadeVento;
document.querySelector("#wind-chill").textContent = sensacaoTermica;

// Ano atual e data da última modificação do documento.
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;
