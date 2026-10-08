import type { AreaAtuacao } from "../data/areas";

interface AreaIconProps {
  icone: AreaAtuacao["icone"];
  className?: string;
}

/** Ícones lineares finos — traço dourado, sem preenchimento. */
export default function AreaIcon({ icone, className = "h-8 w-8" }: AreaIconProps) {
  const base = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icone) {
    case "trabalhista":
      return (
        <svg viewBox="0 0 32 32" className={className} {...base} aria-hidden="true">
          <rect x="5" y="11" width="22" height="13" rx="1.5" />
          <path d="M11 11V8.5A2.5 2.5 0 0 1 13.5 6h5A2.5 2.5 0 0 1 21 8.5V11" />
          <path d="M5 16.5h22" />
        </svg>
      );
    case "aposentadoria":
      return (
        <svg viewBox="0 0 32 32" className={className} {...base} aria-hidden="true">
          <circle cx="16" cy="16" r="10.5" />
          <path d="M16 9.5V16l4.5 3" />
          <path d="M4.5 4.5l2 2M27.5 4.5l-2 2" opacity="0.6" />
        </svg>
      );
    case "revisao":
      return (
        <svg viewBox="0 0 32 32" className={className} {...base} aria-hidden="true">
          <path d="M6 8h20M6 16h20M6 24h12" />
          <circle cx="23.5" cy="23.5" r="4.5" />
          <path d="M23.5 21.5v2l1.4 1.4" />
        </svg>
      );
    case "bpc":
      return (
        <svg viewBox="0 0 32 32" className={className} {...base} aria-hidden="true">
          <path d="M16 27s-8.5-5.2-8.5-11.5A4.8 4.8 0 0 1 12 10.6c1.6 0 3.1.8 4 2.1a5.2 5.2 0 0 1 4-2.1 4.8 4.8 0 0 1 4.5 4.9C24.5 21.8 16 27 16 27z" />
        </svg>
      );
    case "incapacidade":
      return (
        <svg viewBox="0 0 32 32" className={className} {...base} aria-hidden="true">
          <path d="M16 4.5l10 3.8v7.2c0 6-4.2 10.3-10 12-5.8-1.7-10-6-10-12V8.3z" />
          <path d="M12.5 16.5l2.6 2.6 4.4-4.6" />
        </svg>
      );
    case "planejamento":
      return (
        <svg viewBox="0 0 32 32" className={className} {...base} aria-hidden="true">
          <circle cx="16" cy="16" r="2.2" />
          <path d="M16 5.5v4M16 22.5v4M5.5 16h4M22.5 16h4M8.6 8.6l2.8 2.8M20.6 20.6l2.8 2.8M23.4 8.6l-2.8 2.8M11.4 20.6l-2.8 2.8" />
        </svg>
      );
  }
}
