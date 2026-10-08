import { Link } from "react-router-dom";
import { site, enderecoLinhaUnica } from "../config/site";
import Monograma from "./Monograma";

const INSTITUCIONAL = [
  { to: "/escritorio", label: "O Escritório" },
  { to: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { to: "/equipe", label: "Nossa Equipe" },
  { to: "/conteudos", label: "Conteúdos Jurídicos" },
  { to: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white" role="contentinfo">
      <div className="gold-rule opacity-60" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 text-gold">
              <Monograma className="h-11 w-11" />
              <div className="flex flex-col leading-none">
                <span className="font-serif-display text-xl font-semibold tracking-[0.08em]">
                  LORENZETTI <span className="text-gold">&amp;</span> RODRIGUES
                </span>
                <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.42em] text-gold-light">
                  Advocacia
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {site.assinatura}. Atuação jurídica orientada pela ética, pela responsabilidade
              e pela atenção individualizada a cada caso.
            </p>
          </div>

          {/* Institucional */}
          <nav aria-label="Links institucionais">
            <h3 className="eyebrow">Institucional</h3>
            <ul className="mt-6 space-y-3.5">
              {INSTITUCIONAL.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/70 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="text-sm text-white/70 transition-colors hover:text-gold-light"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="eyebrow">Onde estamos</h3>
            <address className="mt-6 text-sm not-italic leading-relaxed text-white/70">
              {site.endereco.rua}
              <br />
              {site.endereco.cidade} — {site.endereco.uf}
              {site.endereco.cep && (
                <>
                  <br />
                  CEP {site.endereco.cep}
                </>
              )}
            </address>
            {site.exibirRegistrosProfissionais && (
              <ul className="mt-6 space-y-2 text-sm text-white/60">
                {site.profissionais.map((p) => (
                  <li key={p.nome}>
                    {p.nome} — {p.oab}
                  </li>
                ))}
              </ul>
            )}
            <Link
              to="/contato"
              className="mt-8 inline-block border border-gold/60 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              Fale com o escritório
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-white/45">
            {site.avisoInstitucional}
          </p>
          <p className="mt-6 text-center text-[11px] uppercase tracking-[0.24em] text-white/35">
            © {new Date().getFullYear()} {site.nome} · {enderecoLinhaUnica()}
          </p>
        </div>
      </div>
    </footer>
  );
}
