import { Link } from "react-router-dom";
import Monograma from "../components/Monograma";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-ink pt-24" aria-label="Página não encontrada">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <Monograma className="mx-auto h-16 w-16 text-gold/70" />
        <p className="eyebrow mt-8">Erro 404</p>
        <h1 className="font-serif-display mt-5 text-5xl font-medium text-white md:text-6xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/65">
          O endereço acessado não existe ou foi movido. Utilize a navegação abaixo
          para continuar.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-block bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:bg-gold-light"
          >
            Voltar ao início
          </Link>
          <Link
            to="/contato"
            className="inline-block border border-white/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-all hover:border-white hover:bg-white hover:text-ink"
          >
            Fale com o escritório
          </Link>
        </div>
      </div>
    </section>
  );
}
