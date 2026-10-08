import { Link } from "react-router-dom";
import { site } from "../config/site";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const SECOES = [
  {
    titulo: "1. Dados que coletamos",
    texto:
      "Por meio do formulário de contato, coletamos apenas os dados que você nos fornece voluntariamente: nome, e-mail, telefone, assunto e o conteúdo da sua mensagem. Não coletamos dados de navegação para fins de marketing nem utilizamos cookies de rastreamento de terceiros.",
  },
  {
    titulo: "2. Finalidade do tratamento",
    texto:
      "Os dados são utilizados exclusivamente para responder ao seu contato e, quando solicitado, para prestar a orientação jurídica inicial. Não utilizamos seus dados para envio de publicidade sem o seu consentimento expresso.",
  },
  {
    titulo: "3. Compartilhamento",
    texto:
      "Seus dados não são vendidos, alugados ou compartilhados com terceiros para fins comerciais. O compartilhamento ocorre apenas quando exigido por lei ou por ordem judicial.",
  },
  {
    titulo: "4. Armazenamento e segurança",
    texto:
      "Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida. O acesso às mensagens recebidas é restrito aos profissionais do escritório.",
  },
  {
    titulo: "5. Seus direitos",
    texto:
      "Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a confirmar a existência de tratamento, acessar seus dados, corrigi-los, solicitar sua eliminação ou a revogação do consentimento. Para exercer esses direitos, utilize a página de contato.",
  },
  {
    titulo: "6. Retenção",
    texto:
      "Mantemos seus dados apenas pelo tempo necessário às finalidades descritas nesta política ou pelo período exigido por obrigações legais e regulatórias aplicáveis à advocacia.",
  },
  {
    titulo: "7. Alterações nesta política",
    texto:
      "Esta política poderá ser atualizada para refletir mudanças nas nossas práticas ou na legislação. A versão vigente estará sempre disponível nesta página.",
  },
];

export default function Privacidade() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        description="Como tratamos os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
      />

      <section className="bg-cream py-20 md:py-28" aria-label="Texto da política de privacidade">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.22em] text-ink/50">
              Última atualização: outubro de 2026
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink/75">
              O {site.nome} respeita a sua privacidade. Esta política descreve, de forma
              clara e acessível, como coletamos, utilizamos e protegemos os dados pessoais
              dos visitantes deste site.
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {SECOES.map((s, i) => (
              <Reveal key={s.titulo} delay={Math.min(i, 4) * 60}>
                <section aria-label={s.titulo}>
                  <h2 className="font-serif-display text-2xl font-medium text-ink">{s.titulo}</h2>
                  <span className="gold-rule mt-4 block w-12" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-relaxed text-ink/70 md:text-base">{s.texto}</p>
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 border-t border-ink/10 pt-10 text-center">
            <p className="text-sm text-ink/60">
              Dúvidas sobre o tratamento dos seus dados?
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-block border border-ink/25 px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-all hover:border-gold hover:bg-gold"
            >
              Fale conosco
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
