/**
 * CONFIGURAÇÃO INSTITUCIONAL CENTRAL
 * ─────────────────────────────────
 * Todas as informações institucionais do site vivem neste único arquivo.
 * Para alterar nome, endereço, profissionais, links ou contato, edite aqui —
 * nenhuma outra parte do código precisa ser tocada.
 *
 * "Lorenzetti & Associados" é uma denominação PROVISÓRIA para fins de design.
 * Não a apresente como razão social registrada ou sociedade de advogados
 * formalmente constituída sem validação jurídica.
 */

export interface Profissional {
  nome: string;
  /** Registro profissional. Exibido somente quando `registroConfirmado` for true. */
  oab: string | null;
  /** Biografia verificada. null = espaço reservado. */
  bio: string | null;
  /** Caminho da fotografia profissional real. null = espaço reservado. */
  foto: string | null;
  iniciais: string;
}

export const site = {
  /** Denominação provisória — ver aviso acima. */
  nome: "Lorenzetti & Associados",
  assinatura: "Advocacia Trabalhista e Previdenciária",

  endereco: {
    rua: "Avenida Presidente Roosevelt, 207",
    cidade: "Dracena",
    uf: "SP",
    /** CEP ainda não informado — preencher quando disponível. */
    cep: null as string | null,
  },

  profissionais: [
    {
      nome: "Dr. Eduardo Lorenzetti",
      oab: "OAB/SP 162.871",
      bio: null,
      foto: null,
      iniciais: "EL",
    },
    {
      nome: "Dr. Milton R. S. Júnior",
      oab: "OAB/SP 123.074",
      bio: null,
      foto: null,
      iniciais: "MJ",
    },
  ] as Profissional[],

  /**
   * Exibir números de OAB no site somente após confirmação.
   * Os números acima foram lidos da fotografia da fachada enviada pelo cliente.
   */
  exibirRegistrosProfissionais: false,

  contato: {
    /** E-mail institucional — preencher quando disponível. */
    email: null as string | null,
    /** Telefone fixo — preencher quando disponível. */
    telefone: null as string | null,
    whatsapp: null as string | null,
    /**
     * Quando um número oficial for cadastrado (somente dígitos, com DDI+DDD,
     * ex.: "5518999998888"), o botão flutuante e os CTAs de WhatsApp são
     * ativados automaticamente, sem alterar o restante do layout.
     * Enquanto for null, todos os CTAs funcionam por navegação interna
     * até a página de contato.
     */
    mensagemInicial:
      "Olá, gostaria de obter informações sobre o atendimento do escritório.",
  },

  mapas: {
    /** Link "Como chegar" (Google Maps). */
    comoChegar:
      "https://www.google.com/maps/search/?api=1&query=Avenida+Presidente+Roosevelt+207+Dracena+SP",
    /** Embed do mapa na seção de localização. */
    embed:
      "https://www.google.com/maps?q=Avenida+Presidente+Roosevelt,+207,+Dracena,+SP&output=embed",
  },

  redes: {
    instagram: null as string | null,
    linkedin: null as string | null,
    facebook: null as string | null,
  },

  /** URL canônica do site publicado — usada em SEO, Open Graph e sitemap. */
  urlCanonica: "https://andersonteixeira81.github.io/lorenzetti-associados-identity/",

  avisoInstitucional:
    "Este site possui finalidade exclusivamente informativa. As informações apresentadas não substituem orientação jurídica individualizada.",
} as const;

export type SiteConfig = typeof site;

/** Endereço formatado em linha única. */
export function enderecoLinhaUnica(): string {
  const { rua, cidade, uf, cep } = site.endereco;
  return `${rua} — ${cidade}/${uf}${cep ? ` · CEP ${cep}` : ""}`;
}

/** URL do WhatsApp pronta para uso, ou null quando não configurado. */
export function whatsappUrl(): string | null {
  const numero = site.contato.whatsapp;
  if (!numero) return null;
  const texto = encodeURIComponent(site.contato.mensagemInicial);
  return `https://wa.me/${numero}?text=${texto}`;
}
