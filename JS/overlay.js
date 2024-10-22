const descriptionsPolicy = {
  politica1: {
    text: "O Plano Nacional de Recuperação da Mata Atlântica é uma iniciativa do governo brasileiro que visa restaurar áreas degradadas desse bioma, um dos mais ameaçados do país. O plano tem como objetivo promover a recuperação de florestas nativas, preservar a biodiversidade e garantir serviços ecossistêmicos essenciais, como a regulação do clima e a conservação dos recursos hídricos. Ele também busca envolver a sociedade em ações de reflorestamento, proteção legal e sustentabilidade econômica, contribuindo para a conservação de um patrimônio natural crucial para o equilíbrio ambiental do Brasil.",
  },
  politica2: {
    text: "A Política Nacional de Meio Ambiente (PNMA), instituída pela Lei nº 6.938 de 1981, é o principal marco legal para a proteção ambiental no Brasil. Seu objetivo é promover a preservação, melhoria e recuperação da qualidade ambiental, garantindo condições para o desenvolvimento sustentável e o bem-estar da população. A PNMA define diretrizes para o uso racional dos recursos naturais, o combate à poluição e o controle de atividades potencialmente degradantes. Também cria o Sistema Nacional de Meio Ambiente (SISNAMA), que integra órgãos federais, estaduais e municipais na gestão ambiental, e institui o princípio do poluidor-pagador, responsabilizando aqueles que causam danos ambientais.",
  },
  politica3: {
    text: "O Programa de Áreas Protegidas da Mata Atlântica (PAPMA) é uma iniciativa voltada para a conservação e gestão sustentável de áreas protegidas dentro desse bioma, que abrange regiões de extrema importância ecológica e alta biodiversidade. O programa tem como objetivo fortalecer a criação, implementação e manejo de unidades de conservação, como parques e reservas, além de promover a recuperação de áreas degradadas e o uso sustentável dos recursos naturais. O PAPMA busca também incentivar a integração de comunidades locais e promover ações educativas e de monitoramento ambiental, contribuindo para a preservação de um dos ecossistemas mais ricos e ameaçados do Brasil.",
  },

  politica4: {
    text: "O Fundo Nacional do Meio Ambiente (FNMA) é um instrumento do governo brasileiro criado em 1989 para financiar projetos que promovam a conservação, o uso sustentável e a recuperação dos recursos naturais. O FNMA apoia iniciativas em diversas áreas, como recuperação de áreas degradadas, proteção da biodiversidade, educação ambiental, e desenvolvimento de tecnologias sustentáveis. Seus recursos são direcionados a projetos de organizações públicas e da sociedade civil, promovendo a participação comunitária e o desenvolvimento sustentável. O FNMA desempenha um papel importante no financiamento de ações que visam a proteção do meio ambiente e o combate à degradação dos ecossistemas no Brasil.",
  },
};

descriptionsManagement = {
  gestao1: {
    text: "A Gestão de Recursos Hídricos na Mata Atlântica é essencial para garantir o uso sustentável e a preservação das fontes de água, fundamentais para o abastecimento humano, agricultura e conservação da biodiversidade. Envolve o planejamento cuidadoso e a proteção de rios, bacias hidrográficas e aquíferos, prevenindo a poluição e a degradação ambiental. A gestão adequada busca equilibrar o consumo com a capacidade de renovação dos recursos hídricos, promovendo práticas que assegurem a qualidade e a disponibilidade de água para as atuais e futuras gerações, além de preservar o equilíbrio dos ecossistemas",
  },
  gestao2: {
    text: "A Gestão de Resíduos e Saneamento na Mata Atlântica é fundamental para minimizar os impactos ambientais causados pelo descarte inadequado de resíduos e garantir a saúde pública. Essa gestão envolve a implementação de práticas sustentáveis para a coleta, tratamento e destinação correta dos resíduos sólidos, visando à redução da poluição do solo, da água e do ar. Além disso, o saneamento básico eficiente é crucial para o controle de doenças e a preservação dos recursos naturais. A gestão integrada de resíduos e saneamento contribui para a conservação da biodiversidade e o bem-estar das comunidades que habitam a região.",
  },
  gestao3: {
    text: "O Monitoramento da Biodiversidade na Mata Atlântica é essencial para garantir a preservação das espécies e a manutenção dos ecossistemas. Esse processo envolve a observação contínua de plantas, animais e microrganismos, bem como de suas interações com o ambiente. Através do monitoramento, é possível identificar mudanças na biodiversidade, como o declínio de espécies ameaçadas ou a introdução de espécies invasoras, o que auxilia na tomada de decisões para a conservação. Além disso, o monitoramento permite avaliar o impacto de atividades humanas e implementar estratégias para mitigar danos, assegurando o equilíbrio ecológico da Mata Atlântica.",
  },
  gestao4: {
    text: "A Educação Ambiental desempenha um papel fundamental na gestão da Mata Atlântica, promovendo a conscientização e o engajamento da sociedade em relação à conservação do bioma. Por meio de programas educativos, campanhas de sensibilização e atividades comunitárias, a educação ambiental busca informar a população sobre a importância de proteger os recursos naturais, preservar a biodiversidade e adotar práticas sustentáveis. Além disso, ela estimula o desenvolvimento de uma cidadania ativa e responsável, incentivando atitudes e comportamentos que contribuam para a conservação da Mata Atlântica e o uso sustentável de seus recursos.",
  },
};

function showDescription(policy) {
  const overlay = document.getElementById("overlay");
  const overlayDescription = document.getElementById("overlay-description");

  overlayDescription.textContent = descriptionsPolicy[policy].text;

  overlay.style.display = "flex";
}

function showDescriptionGestao(management) {
  const overlay = document.getElementById("overlay");
  const overlayDescription = document.getElementById("overlay-description");

  overlayDescription.textContent = descriptionsManagement[management].text;

  overlay.style.display = "flex";
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}
