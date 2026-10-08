import { Link } from "react-router-dom";
import { site } from "../config/site";

const BASE = import.meta.env.BASE_URL;

/**
 * Hero editorial — 90vh no desktop, fotografia da fachada com
 * sobreposição em gradiente escuro concentrada no lado esquerdo.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-ink" aria-label="Apresentação">
      {/* Fotografia da fachada */}
      <div className="absolute inset-0">
        <img
          src={`${BASE}images/fechada.png`}
          alt="Fachada do escritório Lorenzetti & Rodrigues, na Avenida Presidente Roosevelt, 207, em Dracena/SP"
          className="h-full w-full animate-fade-in object-cover object-center"
          fetchPriority="high"
        />
        {/* Véu escuro concentrado à esquerda; fachada permanece reconhecível à direita */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(16,16,16,0.92) 0%, rgba(16,16,16,0.78) 30%, rgba(16,16,16,0.38) 55%, rgba(16,16,16,0.05) 80%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 md:px-8 md:pb-20">
        <div className="max-w-2xl">
          <div className="flex animate-fade-up items-center gap-4" style={{ animationDelay: "150ms" }}>
            <span className="gold-rule w-12" aria-hidden="true" />
            <p className="eyebrow">{site.assinatura}</p>
          </div>

          <h1
            className="font-serif-display mt-7 animate-fade-up text-5xl font-medium leading-[1.05] text-white text-balance md:text-7xl"
            style={{ animationDelay: "300ms" }}
          >
            Seus direitos merecem atenção, respeito e compromisso.
          </h1>

          <p
            className="mt-7 max-w-xl animate-fade-up text-base leading-relaxed text-white/75 md:text-lg"
            style={{ animationDelay: "450ms" }}
          >
            Atuação jurídica nas áreas trabalhista e previdenciária, com orientação
            individualizada, responsabilidade profissional e clareza em cada etapa.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "600ms" }}
          >
            <Link
              to="/#atuacao"
              className="inline-block bg-gold px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink transition-all duration-300 hover:bg-gold-light"
            >
              Conheça nossa atuação
            </Link>
            <Link
              to="/contato"
              className="inline-block border border-white/70 px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
            >
              Fale com o escritório
            </Link>
          </div>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">Role</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
