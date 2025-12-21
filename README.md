# Portfólio — Juliano M. R. Alencar

Site pessoal desenvolvido em React + Vite, inspirado em um layout clean e profissional, focado em apresentar perfil, projetos e certificações, com dark mode e deploy contínuo via Vercel.

## Features
- Hero com apresentação, links e botão de baixar currículo (PDF)
- Foto de perfil com moldura circular
- Seções: Sobre, Projetos, Certificações e Habilidades
- Projetos com galeria de imagens e modal de visualização
- Suporte a vídeo YouTube embutido por projeto
- Habilidades com ícones profissionais (react-icons)
- Certificações com logo da instituição e link para o certificado
- Dark mode com persistência em `localStorage`
- Responsivo e leve (Vite + ESBuild)

## Stack
- React 18
- Vite 7
- react-icons
- CSS modular por componente

## Estrutura
```
public/
  curriculo.pdf
  foto-perfil.jpg
  logos/
    harvard.png
  projects/
    gvp-1.jpg, gvp-2.jpg, ...
src/
  components/
    Header.{jsx,css}
    Hero.{jsx,css}
    About.{jsx,css}
    Projects.{jsx,css}
    Certifications.{jsx,css}
    Skills.{jsx,css}
  App.{jsx,css}
  index.css
  main.jsx
vite.config.js
index.html
```
