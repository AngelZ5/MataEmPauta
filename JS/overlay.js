const descriptions = {
  politica1: {
    src: "../src/img/politica1.svg", // Coloque     a imagem correspondente, se houver.
    text: "O Plano Nacional de Recuperação da Mata Atlântica é uma iniciativa do governo brasileiro que visa restaurar áreas degradadas desse bioma, um dos mais ameaçados do país. O plano tem como objetivo promover a recuperação de florestas nativas, preservar a biodiversidade e garantir serviços ecossistêmicos essenciais, como a regulação do clima e a conservação dos recursos hídricos. Ele também busca envolver a sociedade em ações de reflorestamento, proteção legal e sustentabilidade econômica, contribuindo para a conservação de um patrimônio natural crucial para o equilíbrio ambiental do Brasil.",
  },
  politica2: {
    src: "../src/img/politica2.svg",
    text: "A Política Nacional de Meio Ambiente (PNMA), instituída pela Lei nº 6.938 de 1981, é o principal marco legal para a proteção ambiental no Brasil. Seu objetivo é promover a preservação, melhoria e recuperação da qualidade ambiental, garantindo condições para o desenvolvimento sustentável e o bem-estar da população. A PNMA define diretrizes para o uso racional dos recursos naturais, o combate à poluição e o controle de atividades potencialmente degradantes. Também cria o Sistema Nacional de Meio Ambiente (SISNAMA), que integra órgãos federais, estaduais e municipais na gestão ambiental, e institui o princípio do poluidor-pagador, responsabilizando aqueles que causam danos ambientais.",
  },
  politica3: {
    src: "../src/img/politica3.svg",
    text: "O Programa de Áreas Protegidas da Mata Atlântica (PAPMA) é uma iniciativa voltada para a conservação e gestão sustentável de áreas protegidas dentro desse bioma, que abrange regiões de extrema importância ecológica e alta biodiversidade. O programa tem como objetivo fortalecer a criação, implementação e manejo de unidades de conservação, como parques e reservas, além de promover a recuperação de áreas degradadas e o uso sustentável dos recursos naturais. O PAPMA busca também incentivar a integração de comunidades locais e promover ações educativas e de monitoramento ambiental, contribuindo para a preservação de um dos ecossistemas mais ricos e ameaçados do Brasil.",
  },
  politica4: {
    src: "../src/img/politica4.svg",
    text: "O Fundo Nacional do Meio Ambiente (FNMA) é um instrumento do governo brasileiro criado em 1989 para financiar projetos que promovam a conservação, o uso sustentável e a recuperação dos recursos naturais. O FNMA apoia iniciativas em diversas áreas, como recuperação de áreas degradadas, proteção da biodiversidade, educação ambiental, e desenvolvimento de tecnologias sustentáveis. Seus recursos são direcionados a projetos de organizações públicas e da sociedade civil, promovendo a participação comunitária e o desenvolvimento sustentável. O FNMA desempenha um papel importante no financiamento de ações que visam a proteção do meio ambiente e o combate à degradação dos ecossistemas no Brasil.",
  },
};

function showDescription(policy) {
  const overlay = document.getElementById("overlay");
  const overlayIcon = document.getElementById("overlay-icon");
  const overlayDescription = document.getElementById("overlay-description");

  overlayIcon.src = descriptions[policy].src;
  overlayDescription.textContent = descriptions[policy].text;

  overlay.style.display = "flex";
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}
