import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Olá, meu nome é <span className="highlight">Juliano!</span>
          </h1>
          <h2 className="hero-subtitle">Estudante de Ciência da Computação.</h2>
          <p className="hero-description">
            Atualmente no 5º semestre na Universidade Federal do Ceará (UFC). Apaixonado por desenvolvimento, programação e tecnologia. Buscando oportunidades para crescer e contribuir com projetos reais. 
          </p>
          <div className="hero-buttons">
            <a href="#projetos" className="btn btn-primary">Ver Projetos</a>
            <a 
              href="https://github.com/JulianoMRA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/julianomra/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-linkedin"
            >
              LinkedIn
            </a>
            <a 
              href="/curriculo.pdf"
              className="btn btn-download"
              download
            >
              Baixar Currículo
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <img src="/foto-perfil.jpg" alt="Juliano Alencar" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
