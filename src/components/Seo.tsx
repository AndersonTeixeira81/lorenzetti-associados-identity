import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../config/site";
import { getArea } from "../data/areas";
import { getArtigo } from "../data/artigos";

interface Meta {
  title: string;
  description: string;
}

/** Remove o basename (ex.: /lorenzetti-associados-identity) do pathname para o matching. */
function stripBasename(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (base && pathname.startsWith(base)) {
    const stripped = pathname.slice(base.length);
    return stripped || "/";
  }
  return pathname;
}

function metaFor(pathname: string): Meta {
  const base = `${site.nome} — ${site.assinatura} em Dracena/SP`;

  // Rotas dinâmicas de áreas
  const areaMatch = pathname.match(/^\/areas-de-atuacao\/([\w-]+)\/?$/);
  if (areaMatch) {
    const area = getArea(areaMatch[1]);
    if (area) {
      return {
        title: `${area.titulo} em Dracena/SP — ${site.nome}`,
        description: `${area.resumo} Orientação individualizada, ética e clareza em cada etapa.`,
      };
    }
  }

  // Rotas dinâmicas de artigos
  const artigoMatch = pathname.match(/^\/conteudos\/([\w-]+)\/?$/);
  if (artigoMatch) {
    const artigo = getArtigo(artigoMatch[1]);
    if (artigo) {
      return {
        title: `${artigo.titulo} — ${site.nome}`,
        description: artigo.resumo,
      };
    }
  }

  const mapa: Record<string, Meta> = {
    "/": {
      title: base,
      description:
        "Escritório de advocacia em Dracena/SP com atuação trabalhista e previdenciária: aposentadorias, revisões de benefícios, BPC/LOAS e benefícios por incapacidade. Orientação individualizada e ética.",
    },
    "/escritorio": {
      title: `O Escritório — ${site.nome}`,
      description:
        "Conheça o escritório de advocacia trabalhista e previdenciária em Dracena/SP: valores, forma de trabalho e compromisso com cada cliente.",
    },
    "/areas-de-atuacao": {
      title: `Áreas de Atuação — ${site.nome}`,
      description:
        "Direito trabalhista, aposentadorias, revisões de benefícios, BPC/LOAS, benefícios por incapacidade e planejamento previdenciário em Dracena/SP.",
    },
    "/equipe": {
      title: `Nossa Equipe — ${site.nome}`,
      description:
        "Conheça os advogados do escritório: profissionais dedicados às áreas trabalhista e previdenciária em Dracena/SP.",
    },
    "/conteudos": {
      title: `Conteúdos Jurídicos — ${site.nome}`,
      description:
        "Artigos informativos sobre direitos trabalhistas e previdenciários em linguagem acessível. Conteúdo educacional do escritório em Dracena/SP.",
    },
    "/contato": {
      title: `Contato — ${site.nome}`,
      description: `Fale com o escritório: ${site.endereco.rua}, ${site.endereco.cidade}/${site.endereco.uf}. Envie sua mensagem pelo formulário de contato.`,
    },
    "/politica-de-privacidade": {
      title: `Política de Privacidade — ${site.nome}`,
      description:
        "Como o escritório trata os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
    },
  };

  // Normaliza: remove basename e barra final para a busca
  const normalizado = pathname.replace(/\/$/, "") || "/";
  return (
    mapa[normalizado] ?? {
      title: base,
      description:
        "Advocacia trabalhista e previdenciária em Dracena/SP: orientação individualizada, responsabilidade profissional e clareza em cada etapa.",
    }
  );
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Aplica título e metadados de SEO a cada troca de rota. */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = stripBasename(pathname);
    const meta = metaFor(path);
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      const base = site.urlCanonica.replace(/\/$/, "");
      const canonPath = path === "/" ? "/" : `${path}/`;
      canonical.href = `${base}${canonPath}`;
    }
  }, [pathname]);

  return null;
}
