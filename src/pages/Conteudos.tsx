import { Link } from "react-router-dom";
import { artigos } from "../data/artigos";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Conteudos() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdos jurídicos"
        title="Informação que esclarece."
        description="Artigos informativos sobre direitos trabalhistas e previdenciários, em linguagem acessível. Conteúdo educacional — não substitui a orientação jurídica individualizada."
      />

      <section className="bg-cream py-24 md:py-32" aria-label="Lista de artigos">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Artigos"
            title="Publicações recentes"
          />
          <div className="mt-14 space-y-8">
            {artigos.map((a, i) => (
              <Reveal key={a.slug} delay={Math.min(i, 3) * 80}>
                <Link
                  to={`/conteudos/${a.slug}`}
                  className="group grid gap-6 border border-ink/10 bg-white p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_24px_50px_-30px_rgba(16,16,16,0.35)] md:grid-cols-[1fr_2fr] md:gap-10 md:p-10"
                >
                  <div>
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink/50">
                      <span className="text-gold">{a.categoria}</span>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ink/40">
                      {a.data} · {a.leitura}
                    </p>
                    <span className="gold-rule mt-5 block w-12 transition-all duration-300 group-hover:w-20" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-serif-display text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-gold md:text-3xl">
                      {a.titulo}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-ink/65 md:text-base">{a.resumo}</p>
                    <span className="mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                      Ler artigo <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
