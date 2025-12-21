import './Certifications.css'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const Certifications = () => {
  const certs = [
    {
      name: 'HarvardX: CS50W Web Programming with Python and JavaScript',
      issuer: 'HarvardX',
      date: '2025',
      link: '#', // substitua pelo link oficial do certificado
      logo: '/logos/harvard.png',
    },
  ]

  return (
    <section id="certificacoes" className="certifications">
      <div className="container">
        <h2 className="section-title">Certificações</h2>

        <div className="certs-grid">
          {certs.map((c, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-header">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.issuer} logo`}
                    className="cert-logo"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                ) : (
                  <FaCertificate className="cert-icon" aria-hidden="true" />
                )}
                <div>
                  <h3 className="cert-name">{c.name}</h3>
                  <p className="cert-meta">{c.issuer} • {c.date}</p>
                </div>
              </div>
              <div className="cert-actions">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  Ver certificado <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
