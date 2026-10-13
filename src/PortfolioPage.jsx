import { ArrowUpRight } from 'lucide-react'
import { Container } from './components/ui'
import { COMPLETED_SITES } from './config/websitesOffer'
import './PortfolioPage.css'

const shots = [
  { name: 'The Red Cow', sector: 'Hospitality', img: '/websites/red-cow.jpg', url: 'https://theredcowchesterton.co.uk' },
  { name: 'Eagle AI Labs', sector: 'Technology', img: '/websites/eagle-ai.jpg', url: 'https://www.eagleailabs.com' },
  { name: 'Scalpx Capital', sector: 'Finance', img: '/websites/scalpx.jpg', url: 'https://www.scalpxcapital.com' },
  { name: 'Ready4Refurb', sector: 'Property', img: '/websites/ready4refurb.jpg', url: 'https://ready4refurb.com' },
  { name: 'Mixa Restaurant', sector: 'Hospitality', img: '/websites/mixa.jpg', url: 'https://www.mixarestaurant.com' },
]

function host(url) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

export default function PortfolioPage() {
  return (
    <div className="folio-page">
      <section className="folio-hero">
        <Container>
          <p className="shape-kicker">Portfolio</p>
          <h1>Websites we’ve built.</h1>
          <p>
            Design, build, and launch. These are live sites shipped by Shift AI, across hospitality, trades, property, finance, charity, and product work.
          </p>
        </Container>
      </section>

      <section className="folio-shots">
        <Container>
          <div className="folio-shot-grid">
            {shots.map((site) => (
              <a key={site.url} className="folio-shot" href={site.url} target="_blank" rel="noopener noreferrer">
                <img src={site.img} alt={`${site.name} website`} />
                <span>
                  <strong>{site.name}</strong>
                  <em>{site.sector}</em>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="folio-list">
        <Container>
          <h2>All sites completed.</h2>
          <ol>
            {COMPLETED_SITES.map((site, i) => (
              <li key={`${site.name}-${site.url}`}>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  <span className="folio-num">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{site.name}</strong>
                  <em>{site.sector}</em>
                  <span className="folio-host">
                    {host(site.url)}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </div>
  )
}
