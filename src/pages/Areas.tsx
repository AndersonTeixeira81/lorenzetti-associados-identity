import { Link } from "react-router-dom";
import { areas } from "../data/areas";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import AreaIcon from "../components/AreaIcon";

export default function Areas() {
  return (
    <>
      <PageHero
        eyebrow="Áreas de atuação"
        title="Atuação especializada, orientação individualizada."
        description="Conheça as áreas do Direito em que o escritório atua. Cada página traz informações sobre o tema — selecione para saber mais."
      />

      <section className="bg-cream py-24 md:py-32" aria-label="Lista de áreas de atuação">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Nossas áreas"
            title="Seis frentes de atuação"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 3) * 100} className="h-full">
                <Link
                  to={`/areas-de-atuacao/${area.slug}`}
                  className="group flex h-full flex-col border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_50px_-30px_rgba(16,16,16,0.4)] md:p-10"
                >
                  <span className="text-gold">
                    <AreaIcon icone={area.icone} className="h-10 w-10" />
                  </span>
                  <span className="gold-rule mt-6 w-10 transition-all duration-300 group-hover:w-16" aria-hidden="true" />
                  <h2 className="font-serif-display mt-5 text-[1.65rem] font-medium leading-snug text-ink">
                    {area.titulo}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{area.resumo}</p>
                  <span className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                    Página explicativa <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-ink/60">
              As informações destas páginas têm caráter exclusivamente informativo e educacional.
              A avaliação de cada situação concreta depende da análise individualizada de
              documentos e fatos.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-block bg-ink px-10 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-gold hover:text-ink"
            >
              Fale com o escritório
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
