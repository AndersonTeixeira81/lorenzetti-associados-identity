import { useEffect } from "react";
import { Link } from "react-router-dom";
import { site, enderecoLinhaUnica } from "../config/site";
import { areas } from "../data/areas";
import { artigos } from "../data/artigos";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import AreaIcon from "../components/AreaIcon";
import ContactForm from "../components/ContactForm";

const BASE = import.meta.env.BASE_URL;

const PRINCIPIOS = [
  {
    titulo: "Ética profissional",
    texto: "Conduta pautada pelo Estatuto da Advocacia e pelo Código de Ética e Disciplina da OAB em cada atendimento.",
  },
  {
    titulo: "Responsabilidade",
    texto: "Compromisso com prazos, com a verdade dos fatos e com a diligência que cada caso exige.",
  },
  {
    titulo: "Transparência",
    texto: "Comunicação clara sobre cenários, etapas e possibilidades — sem promessas, sem jargões.",
  },
  {
    titulo: "Atenção individualizada",
    texto: "Cada pessoa é ouvida com tempo e cada caso é analisado em sua particularidade.",
  },
];

function useHashScroll() {
  // Rola até a âncora quando a home é acessada via "/#atuacao"
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const t1 = requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      });
      return () => cancelAnimationFrame(t1);
    }
  }, []);
}

export default function Home() {
  useHashScroll();

  return (
    <>
      <Hero />

      {/* ── Sobre o Escritório ── */}
      <section className="bg-cream py-24 md:py-32" aria-labelledby="sobre-titulo">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src={`${BASE}images/fachada.png`}
                alt="Fachada do escritório Lorenzetti & Associados em Dracena/SP"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-4 hidden border border-gold/40 bg-ink px-8 py-6 md:block" aria-hidden="true">
                <p className="font-serif-display text-4xl font-medium text-gold">207</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                  Av. Pres. Roosevelt
                </p>
              </div>
              <span className="gold-rule absolute -top-4 left-8 w-24" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">O escritório</p>
            <h2 id="sobre-titulo" className="font-serif-display mt-5 text-4xl font-medium leading-[1.12] text-ink text-balance md:text-5xl">
              Uma atuação jurídica orientada pela ética e pela responsabilidade.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink/70">
              <p>
                O {site.nome} dedica-se às áreas trabalhista e previdenciária com um
                princípio simples: cada caso merece ser compreendido em sua
                particularidade antes de qualquer orientação.
              </p>
              <p>
                Isso significa escuta atenta, análise criteriosa de documentos e fatos,
                e comunicação clara em todas as etapas — do primeiro atendimento à
                conclusão do trabalho.
              </p>
            </div>
            <Link
              to="/escritorio"
              className="mt-9 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:text-gold"
            >
              Conheça o escritório
              <span aria-hidden="true" className="text-gold">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Áreas de Atuação ── */}
      <section id="atuacao" className="scroll-mt-24 bg-white py-24 md:py-32" aria-labelledby="atuacao-titulo">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Áreas de atuação"
            title="Onde podemos orientar você"
          />
          <ul className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {areas.map((area, i) => (
              <Reveal as="li" key={area.slug} delay={(i % 3) * 100} className="h-full">
                <Link
                  to={`/areas-de-atuacao/${area.slug}`}
                  className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-cream md:p-10"
                  aria-label={`${area.titulo}: ${area.resumo}`}
                >
                  <span className="text-gold transition-transform duration-300 group-hover:-translate-y-1">
                    <AreaIcon icone={area.icone} />
                  </span>
                  <span className="gold-rule mt-6 w-10 transition-all duration-300 group-hover:w-16" aria-hidden="true" />
                  <h3 className="font-serif-display mt-5 text-2xl font-medium text-ink">
                    {area.titulo}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{area.resumo}</p>
                  <span className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                    Saiba mais <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Princípios Institucionais ── */}
      <section className="relative overflow-hidden bg-graphite py-24 md:py-32" aria-labelledby="principios-titulo">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(50% 80% at 85% 15%, rgba(184,154,94,0.14) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Princípios institucionais"
            title="Os valores que conduzem cada atendimento"
            tone="dark"
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPIOS.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 100}>
                <div className="border-t border-gold/40 pt-7">
                  <p className="font-serif-display text-sm italic text-gold-light" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif-display mt-3 text-2xl font-medium text-white">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Profissionais ── */}
      <section className="bg-cream py-24 md:py-32" aria-labelledby="equipe-titulo">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Nossa equipe"
            title="Quem conduz o seu caso"
            description="Espaço reservado às fotografias profissionais, aos registros e às biografias verificadas de cada advogado."
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
            {site.profissionais.map((p, i) => (
              <Reveal key={p.nome} delay={i * 120}>
                <article className="group border border-ink/10 bg-white">
                  {/* Espaço reservado à fotografia profissional real — sem rostos fictícios */}
                  <div className="flex aspect-[4/3] items-center justify-center bg-graphite" role="img"
                    aria-label={`Fotografia profissional de ${p.nome} — em breve`}>
                    <div className="flex flex-col items-center gap-4 text-gold/70">
                      <span className="font-serif-display text-6xl font-medium">{p.iniciais}</span>
                      <span className="gold-rule w-12" aria-hidden="true" />
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                        Fotografia em breve
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif-display text-2xl font-medium text-ink">{p.nome}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-ink/50">
                      {site.exibirRegistrosProfissionais && p.oab ? p.oab : "Registro profissional · em verificação"}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink/60">
                      {p.bio ?? "Biografia verificada em elaboração."}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/equipe"
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:text-gold"
            >
              Conheça a equipe <span aria-hidden="true" className="text-gold">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Conteúdos Jurídicos ── */}
      <section className="bg-white py-24 md:py-32" aria-labelledby="conteudos-titulo">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Conteúdos jurídicos"
            title="Informação clara, em linguagem acessível"
            description="Artigos informativos sobre direitos trabalhistas e previdenciários. Conteúdo educacional — não substitui a orientação individualizada."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {artigos.slice(0, 4).map((a, i) => (
              <Reveal key={a.slug} delay={(i % 2) * 120}>
                <Link
                  to={`/conteudos/${a.slug}`}
                  className="group flex h-full flex-col border border-ink/10 bg-cream p-8 transition-all duration-300 hover:border-gold/50 md:p-10"
                >
                  <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-ink/50">
                    <span className="text-gold">{a.categoria}</span>
                    <span aria-hidden="true">·</span>
                    <span>{a.leitura}</span>
                  </div>
                  <h3 className="font-serif-display mt-4 text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-gold md:text-[1.7rem]">
                    {a.titulo}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{a.resumo}</p>
                  <span className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                    Ler artigo <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/conteudos"
              className="inline-block border border-ink/25 px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              Ver todos os conteúdos
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Localização ── */}
      <section className="bg-cream py-24 md:py-32" aria-labelledby="localizacao-titulo">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Localização</p>
            <h2 id="localizacao-titulo" className="font-serif-display mt-5 text-4xl font-medium leading-[1.12] text-ink text-balance md:text-5xl">
              Um endereço de fácil acesso em Dracena
            </h2>
            <address className="mt-7 text-base not-italic leading-relaxed text-ink/70">
              <span className="font-medium text-ink">{site.endereco.rua}</span>
              <br />
              {site.endereco.cidade} — {site.endereco.uf}
            </address>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/60">
              O escritório está localizado em ponto central da cidade, com estrutura
              preparada para receber cada visitante com conforto e discrição.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={site.mapas.comoChegar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-gold hover:text-ink"
              >
                Como chegar
              </a>
              <Link
                to="/contato"
                className="inline-block border border-ink/25 px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Fale com o escritório
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden border border-ink/10 shadow-[0_20px_60px_-30px_rgba(16,16,16,0.35)]">
              <iframe
                title={`Mapa: ${enderecoLinhaUnica()}`}
                src={site.mapas.embed}
                className="h-[380px] w-full border-0 md:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Chamada para contato ── */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-28" aria-labelledby="cta-titulo">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(55% 100% at 50% 0%, rgba(184,154,94,0.18) 0%, transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <p className="eyebrow">Contato</p>
            <h2 id="cta-titulo" className="font-serif-display mt-5 text-4xl font-medium leading-[1.1] text-white text-balance md:text-5xl">
              Dê o primeiro passo com clareza e tranquilidade.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65">
              Conte sua questão pelo formulário de contato. Cada mensagem é lida com
              atenção e respondida com a discrição que o tema exige.
            </p>
            <Link
              to="/contato"
              className="mt-10 inline-block bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-gold-light"
            >
              Fale com o escritório
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Formulário embutido na home (âncora de contato rápido) ── */}
      <section className="bg-cream py-24 md:py-28" aria-label="Formulário de contato rápido">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
