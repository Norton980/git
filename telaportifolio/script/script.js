const links = [
  {
    nome: "Instagram",
    descricao: "Meu Instagram",
    url: "https://instagram.com/EspecialistadeTintasMarcosVinicius",
    icone: "fab fa-instagram"
  },
  {
    nome: "TikTok",
    descricao: "Me siga no TikTok",
    url: "https://www.tiktok.com/@brunoneujhr",
    icone: "fab fa-tiktok"
  },
  {
    nome: "GitHub",
    descricao: "Veja meus projetos",
    url: "https://github.com/MarcosViniciusFagundesMuller",
    icone: "fab fa-github"
  },
  {
    nome: "WhatsApp",
    descricao: "Fale comigo",
    url: "https://wa.me/5551987654321?text=gostaria de mais informações",
    icone: "fab fa-whatsapp"
  },
  {
    nome: "E-mail",
    descricao: "Envie um e-mail",
    url: "mailto:01158676000@senacrs.edu.br",
    icone: "fas fa-envelope"
  },
  {
    nome: "X (Twitter)",
    descricao: "Siga-me no X",
    url: "https://twitter.com/MarcosViniciusFagundesMuller",
    icone: "fab fa-twitter"
  }
];

const container = document.getElementById("links-container");

links.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.className = "link-item";
  a.setAttribute("aria-label", link.nome);

  a.innerHTML = `
    <i class="${link.icone}"></i>
    <div>
      <strong>${link.nome}</strong>
      <p>${link.descricao}</p>
    </div>
  `;

  container.appendChild(a);
});
