import { whatsappUrl } from "../config/site";

/**
 * Botão flutuante de WhatsApp.
 * Renderiza SOMENTE quando um número oficial está configurado em `site.contato.whatsapp`.
 */
export default function WhatsAppFloat() {
  const url = whatsappUrl();
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f9d55] text-white shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16 3.5c-6.9 0-12.5 5.6-12.5 12.5 0 2.2.6 4.3 1.7 6.2L3.5 28.5l6.5-1.7a12.4 12.4 0 0 0 6 1.6c6.9 0 12.5-5.6 12.5-12.5S22.9 3.5 16 3.5zm0 22.7a10.2 10.2 0 0 1-5.2-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a10.2 10.2 0 0 1-1.5-5.5C5.8 10.3 10.3 5.8 16 5.8S26.2 10.3 26.2 16 21.7 26.2 16 26.2zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}
