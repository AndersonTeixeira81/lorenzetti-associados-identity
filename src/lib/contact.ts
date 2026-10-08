import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome completo.').max(100),
  email: z.string().trim().email('Informe um e-mail válido.').max(255),
  subject: z.string().min(1, 'Selecione um assunto.').max(100),
  message: z.string().trim().min(10, 'Escreva uma mensagem com pelo menos 10 caracteres.').max(1000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Confirme a leitura do aviso de privacidade.' }) }),
});