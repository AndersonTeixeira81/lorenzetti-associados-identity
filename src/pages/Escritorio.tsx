import { Link } from "react-router-dom";
import { site, enderecoLinhaUnica } from "../config/site";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const BASE = import.meta.env.BASE_URL;

const PILARES = [
  {
    titulo: "Escuta antes da orientação",
    texto:
      "Nenhuma orientação começa antes de compreender a história de quem procura o escritório. O primeiro passo é sempre ouvir — com tempo, sem pressa e sem julgamentos.",
  },
  {
    titulo: "Rigor técnico",
    texto:
      "Cada caso passa por análise documental criteriosa e fundamentação na legislação vigente, na jurisprudência e nos entendimentos administrativos aplicáveis.",
  },
  {
    titulo: "Comunicação acessível",
    texto:
      "O Direito tem sua linguagem própria, mas ninguém deveria precisar de um dicionário para entender a própria situação. Explicamos cada etapa com clareza.",
  },
  {
    titulo: "Discrição absoluta",
    texto:
      "Questões trabalhistas e previdenciárias envolvem a vida pessoal de cada cliente. O sigilo e a discrição orientam todo o atendimento.",
  },
];

export default function Escritorio() {
  return (
    <>
      <PageHero
        eyebrow="O escritório"
        title="Ética, responsabilidade e atenção a cada pessoa."
        description="Conheça a história, os valores e a forma de trabalhar do escritório."
      />

      {/* Apresentação */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={`${BASE}images/fechada.png`}
              alt="Fachada do escritório Lorenzetti & Rodrigues em Dracena/SP"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Quem somos</p>
            <h2 className="font-serif-display mt-5 text-4xl font-medium leading-[1.12] text-ink text-balance md:text-5xl">
              Advocacia trabalhista e previdenciária em Dracena
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink/70">
              <p>
                Localizado na {enderecoLinhaUnica()}, o {site.nome} atua nas áreas
                trabalhista e previdenciária — dois campos do Direito que tocam
                diretamente a dignidade, o sustento e o futuro das pessoas.
              </p>
              <p>
                À frente do escritório estão {site.profissionais[0].nome},{" "}
                {site.profissionais[1].nome} e {site.profissionais[2].nome}, que
                conduzem cada atendimento com a convicção de que bons resultados
                começam com boa escuta, análise rigorosa e comunicação honesta.
              </p>
              <p>
                A publicidade do escritório segue caráter institucional, informativo e
                sóbrio, em conformidade com o Estatuto da Advocacia, o Código de Ética
                e Disciplina e o Provimento 205/2021 da OAB.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-white py-24 md:py-32" aria-labelledby="pilares-titulo">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Nossa forma de trabalhar"
            title="Quatro compromissos com cada cliente"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {PILARES.map((p, i) => (
              <Reveal key={p.titulo} delay={(i % 2) * 120}>
                <article className="flex h-full flex-col border border-ink/10 bg-cream p-8 md:p-10">
                  <span className="font-serif-display text-sm italic text-gold" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif-display mt-4 text-2xl font-medium text-ink">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graphite py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-serif-display text-3xl font-medium text-white text-balance md:text-4xl">
              Conheça nossa atuação e nossa equipe.
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/areas-de-atuacao"
                className="inline-block bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:bg-gold-light"
              >
                Áreas de atuação
              </Link>
              <Link
                to="/contato"
                className="inline-block border border-white/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-all hover:border-white hover:bg-white hover:text-ink"
              >
                Fale com o escritório
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
