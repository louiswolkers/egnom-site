# EGNOM — site

Site de apresentação do Egnom, um agente pessoal em forma de monge robô. Feito com
[Astro](https://astro.build) e Tailwind CSS, com ajuda de IA.

A seção "Converse com o Egnom" é uma demonstração com respostas pré-gravadas: não há
IA, servidor nem gasto de tokens. O Egnom de verdade não faz parte deste repositório.

## Estrutura

- `src/pages/` — a página principal e a de erro 404
- `src/components/` — uma seção por componente
- `src/data/siteContent.ts` — textos de listas, navegação e exemplos
- `src/data/demoQuestions.ts` — perguntas e respostas da demonstração
- `src/data/projects.ts` — projetos exibidos na seção "Projetos"
- `src/service/` — lógica da conversa de demonstração
- `src/styles/global.css` — paleta, fontes e animações
- `src/assets/egnom-monk.webp` — imagem do monge
- `public/` — ícone e imagem de prévia de links

## Comandos

Requer Node.js 22.23.4 ou mais novo. Instale as dependências com `npm install`.

| Comando | Ação |
| :-- | :-- |
| `npm run dev` | Servidor local em `localhost:4321` |
| `npm run check` | Confere os tipos |
| `npm run build` | Gera o site em `dist/` |
| `npm run preview` | Mostra o build localmente |

## Publicação

O site será publicado na Vercel: importe este repositório lá e mantenha as opções
detectadas para Astro.

O endereço usado nas prévias de links vem do domínio de produção informado pela Vercel.
Para fixar outro endereço, defina a variável de ambiente `SITE_URL` no projeto.
