# Portfólio — Juliano M. R. Alencar

No ar em [portfolio-one-lake-ao6gfuy4lv.vercel.app](https://portfolio-one-lake-ao6gfuy4lv.vercel.app/).
Links pessoais: [LinkedIn](https://linkedin.com/in/julianomra) · [GitHub](https://github.com/JulianoMRA).

## Sobre o projeto

É o meu site pessoal. Construí para ter um lugar próprio onde mostrar projetos, falar da formação e deixar contato acessível, sem depender de template de plataforma. Decidi manter o escopo pequeno: uma landing com seções de apresentação, experiência, projetos, certificações e habilidades. A ideia era conseguir iterar rápido no conteúdo à medida que a carreira evolui, sem precisar mexer em estrutura.

Hoje o site roda em PT e EN com troca ao vivo, modo claro/escuro persistente e deploy automático via Vercel.

## Stack e por que escolhi cada coisa

- **React 19 + Vite 7.** Quis o ambiente de dev mais rápido possível para iterar em animações e ajustes finos de tipografia. Vite resolve isso sem configuração.
- **i18n caseiro com Context API.** Não faz sentido instalar `react-i18next` para dois idiomas e umas centenas de strings. Todas as traduções vivem em `src/contexts/LanguageContext.jsx` num objeto único, acessadas por uma função `t('chave.aninhada')`. Se precisar adicionar um terceiro idioma, é só duplicar a árvore.
- **CSS puro por componente.** Cada componente tem seu arquivo `.css`. Tokens globais de cor, espaçamento e tipografia ficam em `src/index.css` como CSS custom properties. Sem Tailwind e sem CSS-in-JS porque o projeto é pequeno e eu queria controle fino sobre animações e variáveis de tema.

Outras dependências relevantes: `react-icons` (para os ícones das stacks na seção de habilidades) e `@vercel/analytics`.

## Estrutura

```
portfolio/
├── public/                     # curriculo.pdf, foto-perfil.jpg, logos e imagens dos projetos
├── src/
│   ├── components/             # Hero, About, Experience, Projects, Certifications, Skills, Header, Footer
│   ├── contexts/
│   │   └── LanguageContext.jsx # Traduções PT/EN centralizadas
│   ├── App.jsx
│   ├── index.css               # Tokens de design e keyframes globais
│   └── main.jsx
├── eslint.config.js
├── .prettierrc
└── vite.config.js
```

## Rodando localmente

```bash
git clone https://github.com/JulianoMRA/portfolio.git
cd portfolio
npm install
npm run dev
```

O dev server sobe em `http://localhost:5173`.

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Dev server com HMR |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Serve o build local para checar antes de publicar |
| `npm run lint` | ESLint sobre `src/` |
| `npm run lint:fix` | ESLint com correção automática |
| `npm run format` | Prettier em `src/` |

## Notas

- **Editar conteúdo.** Todo o texto exibido no site (headline, experiências, descrições de projetos, rótulos de botão) vive em `src/contexts/LanguageContext.jsx`. Cada chave aparece em `pt` e `en`. Alterações em um idioma precisam ter contrapartida no outro, senão a função `t()` devolve a própria chave.
- **Adicionar um projeto.** Dados estáticos (links, tags, imagens) ficam em `src/components/Projects.jsx`, no array `projectsStatic`. Os textos (título, período, contexto, detalhes) entram em `projects.items.<chave>` do arquivo de traduções, nos dois idiomas.
- **Deploy.** Push na `main` dispara deploy automático na Vercel. A preview URL de cada PR também fica disponível.
