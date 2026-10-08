import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site, whatsappUrl } from "../config/site";
import Monograma from "./Monograma";

const NAV = [
  { to: "/", label: "Início", end: true },
  { to: "/escritorio", label: "O Escritório" },
  { to: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { to: "/equipe", label: "Equipe" },
  { to: "/conteudos", label: "Conteúdos" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const wa = whatsappUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "bg-ink/95 shadow-[0_1px_0_rgba(184,154,94,0.25)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-8">
          {/* Logotipo — canto superior esquerdo, altura máxima 48px desktop / 36px mobile */}
          <Link to="/" className="flex items-center gap-3 text-gold" aria-label={`${site.nome} — Início`}>
            <Monograma className="h-9 w-9 md:h-12 md:w-12" />
            <span className="flex flex-col leading-none">
              <span className="font-serif-display text-lg font-semibold tracking-[0.08em] text-white md:text-xl">
                LORENZETTI <span className="text-gold">&amp;</span> RODRIGUES
              </span>
              <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.42em] text-gold-light md:text-[10px]">
                Advocacia
              </span>
            </span>
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `nav-link text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
                    isActive ? "text-gold-light" : "text-white/80 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contato"
              className="inline-block border border-gold bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink transition-all duration-300 hover:bg-transparent hover:text-gold"
            >
              Entre em contato
            </Link>
          </div>

          {/* Hambúrguer mobile */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-full bg-current transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-full bg-current transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Menu mobile em tela cheia */}
      <div
        className={`fixed inset-0 z-40 bg-ink transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-2 px-8 pt-20"
          aria-label="Navegação móvel"
        >
          {NAV.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              tabIndex={open ? 0 : -1}
              className={({ isActive }) =>
                `font-serif-display text-3xl font-medium transition-all duration-500 ${
                  isActive ? "text-gold" : "text-white/85 hover:text-white"
                } ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              {item.label}
            </NavLink>
          ))}
          <div
            className={`mt-10 flex flex-col items-center gap-4 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "520ms" : "0ms" }}
          >
            <Link
              to="/contato"
              tabIndex={open ? 0 : -1}
              className="border border-gold bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-ink"
            >
              Entre em contato
            </Link>
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="text-xs uppercase tracking-[0.22em] text-gold-light underline-offset-4 hover:underline"
              >
                WhatsApp
              </a>
            )}
            <span className="gold-rule mt-4 w-16" aria-hidden="true" />
            <p className="text-center text-[11px] uppercase tracking-[0.28em] text-white/50">
              {site.endereco.rua} — {site.endereco.cidade}/{site.endereco.uf}
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
