# Lorenzetti & Associados — Site Institucional

Site institucional do escritório **Lorenzetti & Associados** — Advocacia Trabalhista e Previdenciária (Dracena/SP).

> **Atenção:** "Lorenzetti & Associados" é uma denominação **provisória** para fins de design.
> Não apresentá-la como razão social registrada ou sociedade de advogados formalmente
> constituída sem validação.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS v4
- React Router (rotas: `/`, `/escritorio`, `/areas-de-atuacao`, `/equipe`, `/conteudos`, `/contato`, `/politica-de-privacidade` + páginas de detalhe)

## Configuração central

Toda a informação institucional vive em **`src/config/site.ts`**: nome, endereço,
profissionais, links, contato e WhatsApp. Para alterar qualquer dado institucional,
edite apenas esse arquivo.

Pontos de atenção nesse arquivo:

| Campo | Situação |
|---|---|
| `contato.whatsapp` | `null` — botão flutuante e CTAs de WhatsApp ficam ocultos até um número ser cadastrado (somente dígitos, com DDI+DDD) |
| `exibirRegistrosProfissionais` | `false` — números de OAB só aparecem no site após confirmação |
| `profissionais[].foto` / `bio` | `null` — espaços reservados (não usamos rostos fictícios) |
| `endereco.cep`, `contato.email`, `contato.telefone` | `null` — preencher quando disponíveis |

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Publicação (GitHub Pages)

O workflow `.github/workflows/deploy.yml` compila e publica automaticamente a cada
push na branch `main`. Na primeira vez, ative em **Settings → Pages → Build and
deployment → Source: GitHub Actions**.

O site é publicado em `https://<usuario>.github.io/lorenzetti-associados-identity/`.
O caminho base (`/lorenzetti-associados-identity/`) está em `vite.config.ts` (`BASE_PATH`) —
para publicar em domínio próprio, ajuste a variável de ambiente `BASE_PATH` para `/`
e atualize `urlCanonica` em `src/config/site.ts`.

## Imagens

`public/images/fachada.jpg` — fotografia real da fachada (Hero e seção "O escritório").
Arquivos binários devem ser enviados pela **interface web do GitHub**
(a API corrompe binários).
