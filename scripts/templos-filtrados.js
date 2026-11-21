// Dados dos templos
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake City Utah",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 253000,
    urlDaImagem: "imagens/templo2.jpg"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem: "https://assets.churchofjesuschrist.org/9e/49/9e49d0f341d5afcd33165fb4bcd2c13158dd23b7/sao_paulo_brazil_temple_lds.jpeg"
  },
  {
    nomeDoTemplo: "Recife Brasil",
    localizacao: "Recife, Brasil",
    consagracao: "2000, 15 de dezembro",
    area: 37200,
    urlDaImagem: "https://www.churchofjesuschrist.org/imgs/74d57cefebf31773df61b0b882067ee236de5279/full/3840%2C/0/default"
  },
  {
    nomeDoTemplo: "Roma Itália",
    localizacao: "Roma, Itália",
    consagracao: "2019, 10 de março",
    area: 41010,
    urlDaImagem: "https://www.churchofjesuschrist.org/imgs/804587d0137532b76b3661501e624ab155e0083f/full/500%2C/0/default"
  }
];

// Elementos da página
const galeria = document.querySelector("#temple-gallery");
const descricaoFiltro = document.querySelector("#filter-description");
const linksFiltro = document.querySelectorAll("nav a[data-filter]");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("nav");

// Extrai o ano do campo de consagração (formato: AAAA, dia de mês)
function obterAno(templo) {
  return Number(templo.consagracao.split(",")[0]);
}

// Cria e exibe os cartões a partir do array
function exibirTemplos(listaTemplos) {
  galeria.innerHTML = "";

  if (listaTemplos.length === 0) {
    galeria.innerHTML = '<p class="empty-message">Nenhum templo encontrado para este filtro.</p>';
    return;
  }

  listaTemplos.forEach((templo) => {
    const cartao = document.createElement("article");
    cartao.classList.add("temple-card");

    const imagem = document.createElement("img");
    imagem.src = templo.urlDaImagem;
    imagem.alt = `Imagem do Templo ${templo.nomeDoTemplo}`;
    imagem.loading = "lazy";
    imagem.width = 400;
    imagem.height = 250;

    const titulo = document.createElement("h2");
    titulo.textContent = templo.nomeDoTemplo;

    const localizacao = document.createElement("p");
    localizacao.innerHTML = `<strong>Localização:</strong> ${templo.localizacao}`;

    const consagracao = document.createElement("p");
    consagracao.innerHTML = `<strong>Consagração:</strong> ${templo.consagracao}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés quadrados`;

    cartao.append(imagem, titulo, localizacao, consagracao, area);
    galeria.appendChild(cartao);
  });
}

// Aplica o filtro selecionado no menu
function filtrarTemplos(filtro) {
  let templosFiltrados = templos;
  let texto = "Todos os templos";

  switch (filtro) {
    case "antigos":
      templosFiltrados = templos.filter((templo) => obterAno(templo) < 1900);
      texto = "Templos consagrados antes de 1900";
      break;
    case "novos":
      templosFiltrados = templos.filter((templo) => obterAno(templo) > 2000);
      texto = "Templos consagrados depois de 2000";
      break;
    case "grandes":
      templosFiltrados = templos.filter((templo) => templo.area > 90000);
      texto = "Templos com área superior a 90.000 pés quadrados";
      break;
    case "pequenos":
      templosFiltrados = templos.filter((templo) => templo.area < 10000);
      texto = "Templos com área inferior a 10.000 pés quadrados";
      break;
    default:
      texto = "Todos os templos";
  }

  descricaoFiltro.textContent = `${texto} — ${templosFiltrados.length} resultado(s)`;
  exibirTemplos(templosFiltrados);
}

linksFiltro.forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    const filtro = link.dataset.filter;
    linksFiltro.forEach((item) => item.removeAttribute("aria-current"));
    link.setAttribute("aria-current", "page");
    filtrarTemplos(filtro);
    navigation.classList.remove("show");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Abrir menu");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Menu hambúrguer para dispositivos móveis
menuButton.addEventListener("click", () => {
  const aberto = navigation.classList.toggle("show");
  menuButton.textContent = aberto ? "✕" : "☰";
  menuButton.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  menuButton.setAttribute("aria-expanded", String(aberto));
});

// Ano dos direitos autorais e data da última modificação
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Exibe todos os templos ao carregar a página
exibirTemplos(templos);
descricaoFiltro.textContent = `Todos os templos — ${templos.length} resultado(s)`;
