// Atualizar o ano dos direitos autorais
const anoAtual = new Date().getFullYear();
document.querySelector("#currentyear").textContent = anoAtual;

// Mostrar a data da última modificação
document.querySelector("#lastModified").textContent = document.lastModified;

// Menu hambúrguer
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

    if (navigation.classList.contains("show")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Fechar menu");
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Abrir menu");
        menuButton.setAttribute("aria-expanded", "false");
    }
});