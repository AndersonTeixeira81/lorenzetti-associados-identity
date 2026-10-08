export interface AreaAtuacao {
  slug: string;
  titulo: string;
  resumo: string;
  icone: "trabalhista" | "aposentadoria" | "revisao" | "bpc" | "incapacidade" | "planejamento";
  introducao: string[];
  topicos: { titulo: string; texto: string }[];
  nota: string;
}

export const areas: AreaAtuacao[] = [
  {
    slug: "direito-trabalhista",
    titulo: "Direito Trabalhista",
    resumo:
      "Orientação em questões envolvendo a relação de trabalho, com análise criteriosa de cada caso.",
    icone: "trabalhista",
    introducao: [
      "A relação de trabalho envolve direitos e deveres que nem sempre são claros para quem vive o dia a dia do emprego. A atuação nesta área busca esclarecer a situação jurídica de cada caso, com base na legislação vigente e na análise individualizada dos fatos.",
      "O atendimento é conduzido com discrição e clareza, explicando cada etapa do caminho e as alternativas disponíveis, para que cada pessoa possa tomar decisões informadas sobre seus direitos.",
    ],
    topicos: [
      {
        titulo: "Análise da relação de trabalho",
        texto:
          "Avaliação das condições do vínculo empregatício, da jornada, das verbas recebidas e de eventuais irregularidades, sempre a partir dos documentos e do relato de cada caso.",
      },
      {
        titulo: "Verbas rescisórias",
        texto:
          "Orientação sobre os valores devidos ao término do contrato de trabalho e a conferência dos cálculos apresentados pelo empregador.",
      },
      {
        titulo: "Acordos e negociações",
        texto:
          "Acompanhamento em tratativas com o empregador, buscando soluções equilibradas e documentadas para ambas as partes.",
      },
    ],
    nota: "Cada situação é única. A orientação adequada depende da análise dos documentos e dos fatos concretos de cada caso.",
  },
  {
    slug: "aposentadorias",
    titulo: "Aposentadorias",
    resumo:
      "Orientação sobre as modalidades de aposentadoria e os requisitos aplicáveis a cada perfil.",
    icone: "aposentadoria",
    introducao: [
      "As regras de aposentadoria passaram por mudanças significativas nos últimos anos, e identificar o momento certo e a modalidade mais adequada exige uma leitura atenta do histórico de contribuições de cada pessoa.",
      "O trabalho nesta área consiste em organizar esse histórico, esclarecer os requisitos de cada regra e orientar sobre o caminho mais adequado à realidade de cada segurado.",
    ],
    topicos: [
      {
        titulo: "Aposentadoria por idade",
        texto:
          "Esclarecimentos sobre idade mínima, tempo de contribuição e carência exigidos pela legislação atual.",
      },
      {
        titulo: "Aposentadoria por tempo de contribuição e regras de transição",
        texto:
          "Análise das regras de transição aplicáveis a quem já contribuía antes das reformas, incluindo pedágio e pontuação.",
      },
      {
        titulo: "Aposentadoria especial",
        texto:
          "Orientação para quem exerceu atividades em condições prejudiciais à saúde, com atenção aos documentos comprobatórios exigidos.",
      },
    ],
    nota: "A legislação previdenciária sofre alterações frequentes. A análise deve sempre considerar as normas vigentes no momento do requerimento.",
  },
  {
    slug: "revisoes-de-beneficios",
    titulo: "Revisões de Benefícios",
    resumo:
      "Avaliação da possibilidade de revisão do valor de benefícios já concedidos.",
    icone: "revisao",
    introducao: [
      "Benefícios concedidos pelo INSS podem, em algumas situações, ter sido calculados com valores inferiores aos devidos — seja por períodos não considerados, salários de contribuição incorretos ou mudanças na interpretação das normas.",
      "A revisão consiste em reexaminar o cálculo do benefício à luz da documentação e da legislação aplicável, verificando se há fundamento para solicitar a correção do valor.",
    ],
    topicos: [
      {
        titulo: "Conferência do cálculo",
        texto:
          "Revisão da carta de concessão e da memória de cálculo para identificar possíveis inconsistências.",
      },
      {
        titulo: "Períodos não computados",
        texto:
          "Verificação de vínculos ou contribuições que possam não ter sido considerados na contagem do tempo.",
      },
      {
        titulo: "Prazos e decadência",
        texto:
          "Esclarecimento sobre os prazos legais para solicitar a revisão de um benefício.",
      },
    ],
    nota: "Nem todo benefício comporta revisão. A análise prévia indica se há fundamento para o pedido em cada caso concreto.",
  },
  {
    slug: "bpc-loas",
    titulo: "BPC/LOAS",
    resumo:
      "Orientação sobre o Benefício de Prestação Continuada para idosos e pessoas com deficiência.",
    icone: "bpc",
    introducao: [
      "O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social, garante um salário mínimo mensal ao idoso com 65 anos ou mais e à pessoa com deficiência que comprovem não possuir meios de prover a própria manutenção.",
      "Por não exigir contribuições prévias, o BPC é um direito assistencial com critérios próprios — e muitos pedidos são indeferidos por falhas na documentação ou no preenchimento dos requisitos socioeconômicos.",
    ],
    topicos: [
      {
        titulo: "Requisitos do benefício",
        texto:
          "Esclarecimento sobre os critérios de idade, deficiência e renda familiar per capita exigidos pela legislação.",
      },
      {
        titulo: "Documentação necessária",
        texto:
          "Orientação sobre os documentos pessoais, médicos e socioeconômicos que instruem o pedido.",
      },
      {
        titulo: "Pedidos indeferidos",
        texto:
          "Análise das razões do indeferimento e das alternativas administrativas e judiciais cabíveis.",
      },
    ],
    nota: "O BPC não é aposentadoria e não exige contribuições ao INSS. Cada pedido é avaliado segundo os critérios da assistência social.",
  },
  {
    slug: "beneficios-por-incapacidade",
    titulo: "Benefícios por Incapacidade",
    resumo:
      "Orientação em casos de afastamento do trabalho por doença ou acidente.",
    icone: "incapacidade",
    introducao: [
      "Quando a saúde impede o exercício do trabalho, o segurado pode ter direito a benefícios por incapacidade — temporária ou permanente — conforme a avaliação médica e os requisitos legais.",
      "A atuação nesta área envolve organizar a documentação médica, esclarecer os critérios de cada benefício e acompanhar o segurado nas etapas do requerimento.",
    ],
    topicos: [
      {
        titulo: "Auxílio por incapacidade temporária",
        texto:
          "Orientação sobre o benefício devido ao segurado temporariamente incapaz para o trabalho.",
      },
      {
        titulo: "Aposentadoria por incapacidade permanente",
        texto:
          "Esclarecimentos sobre os requisitos do benefício por incapacidade total e permanente.",
      },
      {
        titulo: "Auxílio-acidente",
        texto:
          "Informações sobre o benefício indenizatório devido após acidente que reduza a capacidade de trabalho.",
      },
    ],
    nota: "A caracterização da incapacidade depende de avaliação médica. A documentação clínica organizada é essencial em todas as etapas.",
  },
  {
    slug: "planejamento-previdenciario",
    titulo: "Planejamento Previdenciário",
    resumo:
      "Organização estratégica das contribuições para uma aposentadoria mais tranquila.",
    icone: "planejamento",
    introducao: [
      "Planejar a aposentadoria é olhar para o futuro com método: reunir o histórico de contribuições, projetar cenários e identificar ajustes possíveis ainda em tempo hábil.",
      "O planejamento previdenciário permite visualizar quando cada regra se torna acessível e quais providências — como a regularização de períodos ou a complementação de contribuições — podem melhorar o benefício futuro.",
    ],
    topicos: [
      {
        titulo: "Mapeamento do histórico contributivo",
        texto:
          "Levantamento e organização de todos os vínculos e contribuições registrados.",
      },
      {
        titulo: "Projeção de cenários",
        texto:
          "Simulação das diferentes regras e do momento em que cada uma se torna alcançável.",
      },
      {
        titulo: "Regularização de períodos",
        texto:
          "Identificação de lacunas no histórico e das formas legais de regularizá-las.",
      },
    ],
    nota: "Quanto mais cedo o planejamento começa, maiores são as possibilidades de ajuste. A análise é sempre individual.",
  },
];

export function getArea(slug: string): AreaAtuacao | undefined {
  return areas.find((a) => a.slug === slug);
}
