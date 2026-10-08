import { Link, useParams } from "react-router-dom";
import { getArtigo, artigos } from "../data/artigos";
import { site } from "../config/site";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";

export default function ArtigoDetalhe() {
  const { slug } = useParams();
  const artigo = slug ? getArtigo(slug) : undefined;

  if (!artigo) return <NotFound />;

  const relacionados = artigos.filter((a) => a.slug !== artigo.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${artigo.categoria} · ${artigo.data}`}
        title={artigo.titulo}
        description={`${artigo.resumo} — ${artigo.leitura}.`}
      />

      <article className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-ink/75 md:text-lg">
              {artigo.conteudo.map((p, i) => (
                <p key={i} className={i === 0 ? "font-serif-display text-xl leading-relaxed text-ink md:text-2xl" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <aside className="mt-12 border border-gold/40 bg-gold/5 p-7 md:p-8" aria-label="Aviso legal">
              <p className="text-sm leading-relaxed text-ink/70">
                <strong className="font-semibold text-ink">Aviso: </strong>
                {site.avisoInstitucional}
              </p>
            </aside>
          </Reveal>

          <Reveal className="mt-12 border-t border-ink/10 pt-10 text-center">
            <p className="font-serif-display text-2xl font-medium text-ink">
              Tem dúvidas sobre a sua situação?
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-block bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-ink hover:text-gold-light"
            >
              Fale com o escritório
            </Link>
          </Reveal>
        </div>
      </article>

      {relacionados.length > 0 && (
        <section className="bg-white py-20 md:py-24" aria-label="Artigos relacionados">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <h2 className="font-serif-display text-center text-3xl font-medium text-ink">
                Continue lendo
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relacionados.map((a, i) => (
                <Reveal key={a.slug} delay={i * 100}>
                  <Link
                    to={`/conteudos/${a.slug}`}
                    className="group block h-full border border-ink/10 bg-cream p-8 transition-all hover:border-gold/50"
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{a.categoria}</p>
                    <h3 className="font-serif-display mt-3 text-xl font-medium text-ink group-hover:text-gold">
                      {a.titulo}
                    </h3>
                    <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                      Ler artigo <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
