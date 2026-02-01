# Portfólio — Juliano M. R. Alencar

<p align="center">
  <a href="portfolio-one-lake-ao6gfuy4lv.vercel.app" target="_blank">🌐 Demo ao vivo</a> •
  <a href="https://linkedin.com/in/julianomra">LinkedIn</a> •
  <a href="https://github.com/JulianoMRA">GitHub</a>
</p>

Site pessoal desenvolvido em **React + Vite**, com design moderno, suporte a **dark mode**, **internacionalização PT/EN** e deploy contínuo via Vercel.

---

## ✨ Features

- **Hero** com apresentação, links sociais e botão de download do currículo
- **Seção Sobre** com resumo profissional
- **Experiência** em timeline visual (PET Computação, RSI, Ceos Jr.)
- **Projetos** com galeria de imagens, modal e vídeos do YouTube
- **Certificações** com logos institucionais
- **Habilidades** organizadas por categoria (Linguagens, Frontend, Backend, etc.)
- **Footer** com contatos e idiomas
- **Dark Mode** com persistência em `localStorage`
- **Internacionalização** PT/EN com toggle no header
- **Responsivo** e otimizado para performance

---

## 🛠️ Stack

| Tecnologia | Uso |
|------------|-----|
| React 18 | Framework UI |
| Vite 7 | Build tool |
| react-icons | Ícones profissionais |
| CSS Modular | Estilos por componente |
| Context API | Gerenciamento de idioma |

---

## 📁 Estrutura

```
portfolio/
├── public/
│   ├── curriculo.pdf
│   ├── foto-perfil.jpg
│   ├── logos/harvard.png
│   └── projects/gvp-*.jpg, oci-*.jpg
├── src/
│   ├── components/
│   │   ├── Header.{jsx,css}
│   │   ├── Hero.{jsx,css}
│   │   ├── About.{jsx,css}
│   │   ├── Experience.{jsx,css}
│   │   ├── Projects.{jsx,css}
│   │   ├── Certifications.{jsx,css}
│   │   ├── Skills.{jsx,css}
│   │   └── Footer.{jsx,css}
│   ├── contexts/
│   │   └── LanguageContext.jsx
│   ├── App.{jsx,css}
│   ├── index.css
│   └── main.jsx
├── vite.config.js
└── index.html
```

---

## 🚀 Como Executar

```bash
# Clonar repositório
git clone https://github.com/JulianoMRA/portfolio.git
cd portfolio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`
