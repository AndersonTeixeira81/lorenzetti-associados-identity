import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { areas } from "../data/areas";
import { site } from "../config/site";

interface FormState {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  consentimento: boolean;
}

const INICIAL: FormState = {
  nome: "",
  email: "",
  telefone: "",
  assunto: "",
  mensagem: "",
  consentimento: false,
};

type Status = "idle" | "erro" | "enviado";

/**
 * Formulário institucional de contato.
 * Validações no cliente + aviso de privacidade (LGPD).
 * A integração de envio ainda será configurada: ao enviar, os dados são
 * validados e apresentados em um resumo — nada é transmitido sem o
 * canal oficial, e o visitante é informado disso com transparência.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INICIAL);
  const [erros, setErros] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function set<K extends keyof FormState>(campo: K, valor: FormState[K]) {
    setForm((f) => ({ ...f, [campo]: valor }));
    setErros((e) => ({ ...e, [campo]: undefined }));
  }

  function validar(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.nome.trim().length < 3) e.nome = "Informe seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      e.email = "Informe um e-mail válido.";
    if (form.telefone.replace(/\D/g, "").length < 10)
      e.telefone = "Informe um telefone válido com DDD.";
    if (!form.assunto) e.assunto = "Selecione o assunto.";
    if (form.mensagem.trim().length < 20)
      e.mensagem = "Descreva sua questão com ao menos 20 caracteres.";
    if (!form.consentimento)
      e.consentimento = "É necessário autorizar o tratamento dos seus dados para o contato.";
    setErros(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validar()) {
      setStatus("erro");
      return;
    }
    setStatus("enviado");
  }

  if (status === "enviado") {
    return (
      <div className="border border-gold/40 bg-white p-8 md:p-10" role="status">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h3 className="font-serif-display text-2xl font-medium text-ink">Mensagem preparada</h3>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-ink/70">
          Obrigado pelo contato, {form.nome.split(" ")[0]}. Sua mensagem foi registrada e o
          canal oficial de envio está em fase final de configuração — em breve o escritório
          entrará em contato pelos dados informados. Nenhuma informação foi transmitida a
          terceiros.
        </p>
        <dl className="mt-6 space-y-2 border-t border-ink/10 pt-6 text-sm">
          <div className="flex gap-3"><dt className="w-24 shrink-0 text-ink/50">Assunto</dt><dd className="text-ink">{form.assunto}</dd></div>
          <div className="flex gap-3"><dt className="w-24 shrink-0 text-ink/50">E-mail</dt><dd className="text-ink">{form.email}</dd></div>
          <div className="flex gap-3"><dt className="w-24 shrink-0 text-ink/50">Telefone</dt><dd className="text-ink">{form.telefone}</dd></div>
        </dl>
        <button
          type="button"
          onClick={() => { setForm(INICIAL); setStatus("idle"); }}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-gold underline-offset-4 hover:underline"
        >
          Escrever nova mensagem
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full border border-ink/20 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-gold focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="bg-white p-8 md:p-10" aria-label="Formulário de contato">
      {status === "erro" && (
        <p className="mb-6 border border-red-900/20 bg-red-950/5 px-4 py-3 text-sm text-red-950" role="alert">
          Verifique os campos destacados abaixo e tente novamente.
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
            Nome completo *
          </label>
          <input id="nome" name="nome" type="text" autoComplete="name" className={inputCls}
            placeholder="Seu nome" value={form.nome} onChange={(e) => set("nome", e.target.value)}
            aria-invalid={!!erros.nome} aria-describedby={erros.nome ? "erro-nome" : undefined} />
          {erros.nome && <p id="erro-nome" className="mt-1.5 text-xs text-red-900">{erros.nome}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
            E-mail *
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputCls}
            placeholder="voce@email.com" value={form.email} onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!erros.email} aria-describedby={erros.email ? "erro-email" : undefined} />
          {erros.email && <p id="erro-email" className="mt-1.5 text-xs text-red-900">{erros.email}</p>}
        </div>

        <div>
          <label htmlFor="telefone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
            Telefone / WhatsApp *
          </label>
          <input id="telefone" name="telefone" type="tel" autoComplete="tel" className={inputCls}
            placeholder="(18) 99999-9999" value={form.telefone} onChange={(e) => set("telefone", e.target.value)}
            aria-invalid={!!erros.telefone} aria-describedby={erros.telefone ? "erro-telefone" : undefined} />
          {erros.telefone && <p id="erro-telefone" className="mt-1.5 text-xs text-red-900">{erros.telefone}</p>}
        </div>

        <div>
          <label htmlFor="assunto" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
            Assunto *
          </label>
          <select id="assunto" name="assunto" className={inputCls}
            value={form.assunto} onChange={(e) => set("assunto", e.target.value)}
            aria-invalid={!!erros.assunto} aria-describedby={erros.assunto ? "erro-assunto" : undefined}>
            <option value="">Selecione…</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.titulo}>{a.titulo}</option>
            ))}
            <option value="Outro assunto">Outro assunto</option>
          </select>
          {erros.assunto && <p id="erro-assunto" className="mt-1.5 text-xs text-red-900">{erros.assunto}</p>}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="mensagem" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
          Mensagem *
        </label>
        <textarea id="mensagem" name="mensagem" rows={5} className={`${inputCls} resize-y`}
          placeholder="Descreva brevemente a sua questão. Evite expor documentos ou dados sensíveis nesta primeira mensagem."
          value={form.mensagem} onChange={(e) => set("mensagem", e.target.value)}
          aria-invalid={!!erros.mensagem} aria-describedby={erros.mensagem ? "erro-mensagem" : undefined} />
        {erros.mensagem && <p id="erro-mensagem" className="mt-1.5 text-xs text-red-900">{erros.mensagem}</p>}
      </div>

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink/70">
          <input type="checkbox" checked={form.consentimento}
            onChange={(e) => set("consentimento", e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-[#b89a5e]"
            aria-describedby={erros.consentimento ? "erro-consentimento" : undefined} />
          <span>
            Autorizo o tratamento dos meus dados pessoais para fins de contato pelo escritório,
            conforme a{" "}
            <Link to="/politica-de-privacidade" className="text-gold underline-offset-2 hover:underline">
              Política de Privacidade
            </Link>
            . *
          </span>
        </label>
        {erros.consentimento && <p id="erro-consentimento" className="mt-1.5 text-xs text-red-900">{erros.consentimento}</p>}
      </div>

      <button type="submit"
        className="mt-8 w-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-ink hover:text-gold-light md:w-auto">
        Enviar mensagem
      </button>

      <p className="mt-5 text-xs leading-relaxed text-ink/50">
        Ao enviar, você concorda em ser contatado(a) pelo {site.nome} sobre o assunto informado.
        Seus dados não serão compartilhados com terceiros para fins de marketing.
      </p>
    </form>
  );
}
