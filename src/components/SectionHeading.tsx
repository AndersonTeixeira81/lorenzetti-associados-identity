import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

/** Cabeçalho editorial padrão das seções. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const titleCls = tone === "dark" ? "text-white" : "text-ink";
  const descCls = tone === "dark" ? "text-white/65" : "text-ink/65";

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${alignCls}`}>
      <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="gold-rule w-10" aria-hidden="true" />
        <p className="eyebrow">{eyebrow}</p>
        {align === "center" && <span className="gold-rule w-10" aria-hidden="true" />}
      </div>
      <h2 className={`font-serif-display text-4xl leading-[1.1] font-medium text-balance md:text-5xl ${titleCls}`}>
        {title}
      </h2>
      {description && <p className={`text-base leading-relaxed md:text-lg ${descCls}`}>{description}</p>}
    </Reveal>
  );
}
