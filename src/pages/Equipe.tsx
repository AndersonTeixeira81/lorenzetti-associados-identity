import { Link } from "react-router-dom";
import { site } from "../config/site";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Equipe() {
  return (
    <>
      <PageHero
        eyebrow="Nossa equipe"
        title="Profissionais dedicados ao seu caso."
        description="Conheça os advogados à frente do escritório. Fotografias, registros e biografias verificadas serão publicados neste espaço."
      />

      <section className="bg-cream py-24 md:py-32" aria-label="Membros da equipe">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Advogados"
            title="Quem conduz o seu atendimento"
          />

          <div className="mx-auto mt-14 grid max-w-4xl gap-10 md:grid-cols-2">
            {site.profissionais.map((p, i) => (
              <Reveal key={p.nome} delay={i * 120}>
                <article className="border border-ink/10 bg-white">
                  {/* Espaço reservado — fotografia profissional real (sem rostos fictícios) */}
                  <div
                    className="flex aspect-[3/3.4] flex-col items-center justify-center gap-5 bg-graphite px-8 text-center"
                    role="img"
                    aria-label={`Espaço reservado à fotografia profissional de ${p.nome}`}
                  >
                    <span className="font-serif-display text-7xl font-medium text-gold/80" aria-hidden="true">
                      {p.iniciais}
                    </span>
                    <span className="gold-rule w-16" aria-hidden="true" />
                    <p className="max-w-[220px] text-[11px] uppercase leading-relaxed tracking-[0.28em] text-white/45">
                      Fotografia profissional em breve
                    </p>
                  </div>
                  <div className="p-8 md:p-10">
                    <h2 className="font-serif-display text-3xl font-medium text-ink">{p.nome}</h2>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.24em] text-gold">
                      {site.exibirRegistrosProfissionais && p.oab
                        ? p.oab
                        : "Registro profissional · em verificação"}
                    </p>
                    <div className="gold-rule mt-6 w-12" aria-hidden="true" />
                    <p className="mt-6 text-sm leading-relaxed text-ink/65">
                      {p.bio ?? (
                        <>
                          Biografia verificada em elaboração. Este espaço apresentará a
                          formação, as áreas de dedicação e a trajetória profissional de{" "}
                          {p.nome}, com informações confirmadas.
                        </>
                      )}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-sm leading-relaxed text-ink/60">
              Em conformidade com o Provimento 205/2021 da OAB, este site não apresenta
              qualificações, títulos ou informações profissionais sem verificação.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-block bg-ink px-10 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-gold hover:text-ink"
            >
              Agende uma conversa
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
