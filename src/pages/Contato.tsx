import { site, enderecoLinhaUnica } from "../config/site";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

export default function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com o escritório."
        description="Envie sua mensagem pelo formulário ou visite-nos no endereço abaixo. Cada contato é tratado com discrição e atenção."
      />

      <section className="bg-cream py-20 md:py-28" aria-label="Informações e formulário de contato">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          {/* Informações */}
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif-display text-3xl font-medium text-ink">Onde nos encontrar</h2>
              <span className="gold-rule mt-5 block w-16" aria-hidden="true" />

              <address className="mt-8 space-y-6 not-italic">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">Endereço</p>
                  <p className="mt-2 text-base leading-relaxed text-ink">
                    {site.endereco.rua}
                    <br />
                    {site.endereco.cidade} — {site.endereco.uf}
                    {site.endereco.cep && (
                      <>
                        <br />
                        CEP {site.endereco.cep}
                      </>
                    )}
                  </p>
                </div>

                {site.contato.email && (
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">E-mail</p>
                    <a href={`mailto:${site.contato.email}`} className="mt-2 inline-block text-base text-ink hover:text-gold">
                      {site.contato.email}
                    </a>
                  </div>
                )}

                {site.contato.telefone && (
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">Telefone</p>
                    <p className="mt-2 text-base text-ink">{site.contato.telefone}</p>
                  </div>
                )}
              </address>

              <a
                href={site.mapas.comoChegar}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block border border-ink/25 px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-all duration-300 hover:border-gold hover:bg-gold"
              >
                Como chegar
              </a>

              <div className="mt-10 overflow-hidden border border-ink/10">
                <iframe
                  title={`Mapa: ${enderecoLinhaUnica()}`}
                  src={site.mapas.embed}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          {/* Formulário */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
