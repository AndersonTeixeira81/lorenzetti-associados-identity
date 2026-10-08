export interface Artigo {
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  leitura: string;
  categoria: string;
  conteudo: string[];
}

export const artigos: Artigo[] = [
  {
    slug: "quem-tem-direito-aposentadoria-por-idade",
    titulo: "Quem tem direito à aposentadoria por idade?",
    resumo:
      "Idade mínima, tempo de contribuição e carência: entenda os requisitos atuais da aposentadoria por idade.",
    data: "Outubro de 2026",
    leitura: "4 min de leitura",
    categoria: "Previdenciário",
    conteudo: [
      "A aposentadoria por idade é uma das modalidades mais procuradas no INSS, e também uma das que mais geram dúvidas. Os requisitos envolvem três elementos: idade mínima, tempo de contribuição e carência — e cada um deles merece atenção.",
      "A idade mínima atual é de 65 anos para homens e 62 anos para mulheres. Além disso, é necessário comprovar ao menos 15 anos de contribuição e 180 meses de carência, ou seja, 180 contribuições mensais efetivamente recolhidas.",
      "É importante não confundir tempo de contribuição com carência: o primeiro conta o período total vinculado à Previdência; a segunda conta apenas as competências com recolhimento efetivo. Essa distinção costuma ser decisiva em muitos casos.",
      "Quem está próximo de completar os requisitos deve organizar o histórico contributivo com antecedência, conferindo se todos os vínculos constam no CNIS e se há períodos a regularizar. Uma análise prévia evita surpresas no momento do requerimento.",
      "Em caso de dúvida sobre a sua situação específica, a orientação individualizada é o caminho mais seguro: cada histórico é único e as regras de transição podem alterar o cenário.",
    ],
  },
  {
    slug: "bpc-loas-o-que-e-quem-pode-solicitar",
    titulo: "BPC/LOAS: o que é e quem pode solicitar",
    resumo:
      "O Benefício de Prestação Continuada não exige contribuições: entenda os critérios e a documentação.",
    data: "Outubro de 2026",
    leitura: "5 min de leitura",
    categoria: "Previdenciário",
    conteudo: [
      "O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (LOAS), garante um salário mínimo por mês ao idoso com 65 anos ou mais e à pessoa com deficiência de qualquer idade, desde que comprovem não ter meios de prover a própria manutenção nem de tê-la provida pela família.",
      "Diferentemente da aposentadoria, o BPC não exige contribuições prévias ao INSS. Trata-se de um benefício assistencial, com critérios próprios — e é justamente aí que muitos pedidos encontram dificuldade.",
      "O critério socioeconômico exige renda familiar per capita inferior a 1/4 do salário mínimo, embora a jurisprudência admita a análise de outros elementos que demonstrem a situação de vulnerabilidade. No caso da pessoa com deficiência, é necessária ainda a avaliação da deficiência e do grau de impedimento.",
      "A documentação é um ponto crítico: documentos pessoais, comprovantes de renda de todos os membros da família, laudos e relatórios médicos organizados fazem diferença no resultado do pedido.",
      "Pedidos indeferidos podem ser reavaliados. Compreender o motivo do indeferimento é o primeiro passo para definir a estratégia adequada a cada caso.",
    ],
  },
  {
    slug: "revisao-de-beneficios-quando-pedir",
    titulo: "Revisão de benefícios: quando vale a pena pedir?",
    resumo:
      "Cálculos incorretos e períodos desconsiderados: saiba em quais situações a revisão faz sentido.",
    data: "Outubro de 2026",
    leitura: "4 min de leitura",
    categoria: "Previdenciário",
    conteudo: [
      "Receber a carta de concessão do benefício não significa, necessariamente, que o valor está correto. Erros no cálculo, salários de contribuição desatualizados e períodos de trabalho não computados são mais comuns do que se imagina.",
      "A revisão é o procedimento pelo qual se solicita ao INSS — ou, quando cabível, ao Judiciário — a correção do valor do benefício. Antes de qualquer pedido, porém, é essencial fazer a conferência técnica da memória de cálculo.",
      "Alguns sinais merecem atenção: vínculos empregatícios que não aparecem no CNIS, períodos de contribuição como autônomo não considerados, ou salários de contribuição registrados com valores inferiores aos reais.",
      "Há também o prazo: em regra, o direito de pedir a revisão decai em dez anos, contados do primeiro dia do mês seguinte ao recebimento da primeira prestação. Perder esse prazo significa perder a oportunidade.",
      "Nem todo benefício comporta revisão — e um pedido sem fundamento pode gerar apenas desgaste. A análise prévia, documento por documento, é o que indica se há caminho a seguir.",
    ],
  },
  {
    slug: "direitos-trabalhistas-verbas-rescisorias",
    titulo: "Verbas rescisórias: o que conferir ao sair do emprego",
    resumo:
      "Aviso-prévio, férias, 13º e multa do FGTS: um roteiro do que deve constar no acerto.",
    data: "Outubro de 2026",
    leitura: "5 min de leitura",
    categoria: "Trabalhista",
    conteudo: [
      "O término do contrato de trabalho envolve uma série de valores — as chamadas verbas rescisórias — e conferi-los com atenção é um direito de todo trabalhador, independentemente do motivo da saída.",
      "Entre as principais verbas estão o saldo de salário, o aviso-prévio (trabalhado ou indenizado), as férias vencidas e proporcionais acrescidas de um terço, o 13º salário proporcional e a multa de 40% sobre o FGTS em caso de dispensa sem justa causa.",
      "O tipo de rescisão altera o conjunto de verbas devidas: pedido de demissão, dispensa sem justa causa, dispensa por justa causa e acordo entre as partes têm consequências diferentes — e é comum haver confusão justamente nesse ponto.",
      "Guarde todos os documentos: termo de rescisão, comprovantes de pagamento, contracheques e extratos do FGTS. Eles são a base de qualquer conferência ou questionamento futuro.",
      "Se houver divergência entre o que foi pago e o que a lei prevê, a orientação jurídica individualizada ajuda a avaliar as alternativas, sempre com base nos documentos e nos fatos de cada caso.",
    ],
  },
];

export function getArtigo(slug: string): Artigo | undefined {
  return artigos.find((a) => a.slug === slug);
}
