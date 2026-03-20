# Portfólio — Juliano M. R. Alencar

<p align="center">
  <a href="https://portfolio-one-lake-ao6gfuy4lv.vercel.app/" target="_blank">🌐 Ver online</a> •
  <a href="https://linkedin.com/in/julianomra">LinkedIn</a> •
  <a href="https://github.com/JulianoMRA">GitHub</a>
</p>

Site pessoal desenvolvido em **React 19 + Vite**, com design "Neon Blueprint", suporte a **dark mode**, **internacionalização PT/EN** e deploy contínuo via Vercel.

---

## ✨ Features

- **Hero** com animações CSS, blobs decorativos e anel rotativo na foto de perfil
- **Seção Sobre** com resumo profissional focado em desenvolvimento fullstack
- **Experiência** em timeline com cards animados (PET Computação, RSI, Ceos Jr.)
- **Projetos** com galeria de imagens, modal acessível (Escape + teclado) e vídeos do YouTube — textos totalmente traduzíveis via i18n
- **Certificações** com logos institucionais
- **Habilidades** organizadas por categoria com ícones coloridos e efeito glow no hover
- **Dark Mode** premium com glassmorphism — persistência em `localStorage`
- **Internacionalização** PT/EN completa (inclusive projetos) com toggle no header
- **Responsivo** para todos os tamanhos de tela
- **ESLint + Prettier** configurados com scripts de lint e formatação

---

## 🛠️ Stack

| Tecnologia | Uso |
|---|---|
| React 19 | Framework UI |
| Vite 7 | Build tool e dev server |
| react-icons | Ícones (Simple Icons, Font Awesome, Feather) |
| CSS puro por componente | Estilos modulares com CSS custom properties |
| Context API | Gerenciamento de idioma e traduções |
| ESLint v9 + Prettier | Qualidade e formatação de código |
| Vercel Analytics | Métricas de acesso |

**Fontes:** Syne (títulos) · DM Sans (corpo) · JetBrains Mono (acentos técnicos)

---

## 📁 Estrutura

```
portfolio/
├── public/
│   ├── curriculo.pdf
│   ├── foto-perfil.jpg
│   ├── logos/
│   └── projects/
├── src/
│   ├── components/
│   │   ├── Header.{jsx,css}       # Nav sticky com glassmorphism
│   │   ├── Hero.{jsx,css}         # Landing com animações e blobs decorativos
│   │   ├── About.{jsx,css}
│   │   ├── Experience.{jsx,css}   # Timeline com slide-in animado
│   │   ├── Projects.{jsx,css}     # Galeria, modal e vídeos
│   │   ├── Certifications.{jsx,css}
│   │   ├── Skills.{jsx,css}       # Grid com glow por categoria
│   │   └── Footer.{jsx,css}
│   ├── contexts/
│   │   └── LanguageContext.jsx    # Traduções PT/EN centralizadas
│   ├── App.{jsx,css}
│   ├── index.css                  # Design tokens e keyframes globais
│   └── main.jsx
├── eslint.config.js
├── .prettierrc
└── vite.config.js
```

---

## 🚀 Como Executar

```bash
# Clonar repositório
git clone https://github.com/JulianoMRA/portfolio.git
cd portfolio

# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`

---

## 🧹 Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build local |
| `npm run lint` | Verificar erros com ESLint |
| `npm run lint:fix` | Corrigir erros automaticamente |
| `npm run format` | Formatar código com Prettier |
