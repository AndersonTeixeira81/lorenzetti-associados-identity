import { Link, useParams } from "react-router-dom";
import { getArea, areas } from "../data/areas";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import AreaIcon from "../components/AreaIcon";
import NotFound from "./NotFound";

export default function AreaDetalhe() {
  const { slug } = useParams();
  const area = slug ? getArea(slug) : undefined;

  if (!area) return <NotFound />;

  const outras = areas.filter((a) => a.slug !== area.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Área de atuação"
        title={area.titulo}
        description={area.resumo}
      />

      <article className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <span className="text-gold">
              <AreaIcon icone={area.icone} className="h-12 w-12" />
            </span>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-ink/75 md:text-lg">
              {area.introducao.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 space-y-8">
            {area.topicos.map((t, i) => (
              <Reveal key={t.titulo} delay={i * 80}>
                <div className="border-l-2 border-gold/60 bg-white p-7 md:p-8">
                  <h2 className="font-serif-display text-2xl font-medium text-ink">{t.titulo}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65 md:text-base">{t.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <aside className="mt-12 border border-gold/40 bg-gold/5 p-7 md:p-8" aria-label="Observação importante">
              <p className="text-sm leading-relaxed text-ink/70">
                <strong className="font-semibold text-ink">Observação: </strong>
                {area.nota}
              </p>
            </aside>
          </Reveal>

          <Reveal className="mt-12 text-center">
            <p className="text-sm text-ink/60">
              Quer entender como isso se aplica à sua situação?
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

      {/* Outras áreas */}
      <section className="bg-white py-20 md:py-24" aria-label="Outras áreas de atuação">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-serif-display text-center text-3xl font-medium text-ink md:text-4xl">
              Explore outras áreas
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {outras.map((a, i) => (
              <Reveal key={a.slug} delay={i * 100}>
                <Link
                  to={`/areas-de-atuacao/${a.slug}`}
                  className="group flex h-full flex-col border border-ink/10 bg-cream p-7 transition-all hover:border-gold/50"
                >
                  <span className="text-gold"><AreaIcon icone={a.icone} className="h-8 w-8" /></span>
                  <h3 className="font-serif-display mt-4 text-xl font-medium text-ink group-hover:text-gold">
                    {a.titulo}
                  </h3>
                  <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                    Saiba mais <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
