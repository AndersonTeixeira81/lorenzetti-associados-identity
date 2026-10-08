import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Banner editorial das páginas internas — grafite com detalhes dourados. */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-graphite pt-36 pb-20 md:pt-44 md:pb-28" aria-label={title}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(60% 90% at 15% 20%, rgba(184,154,94,0.16) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="gold-rule w-12" aria-hidden="true" />
            <p className="eyebrow">{eyebrow}</p>
          </div>
          <h1 className="font-serif-display mt-6 text-4xl font-medium leading-[1.08] text-white text-balance md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
      <div className="gold-rule absolute bottom-0 left-0 w-full opacity-40" aria-hidden="true" />
    </section>
  );
}
