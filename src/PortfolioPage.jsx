import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/martian-mono/400.css'
import { Link } from 'react-router-dom'
import { COMPLETED_SITES } from './config/websitesOffer'
import { siteShots } from './data/portfolioWork'
import './PortfolioPage.css'

function host(url) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

export default function PortfolioPage() {
  return (
    <div className="folio">
      <header className="folio-hero">
        <div className="folio-wrap">
          <h1>Everything we’ve built, live on the web.</h1>
          <p className="folio-lede">
            {COMPLETED_SITES.length} websites and products, each live on its own domain.
          </p>
          <div className="folio-actions">
            <a className="folio-btn" href="/#contact">Start a project</a>
            <a className="folio-link" href="#websites">See the websites</a>
          </div>
        </div>
      </header>

      <section id="websites" className="folio-section">
        <div className="folio-wrap">
          <h2>Websites, as they look today.</h2>
          <div className="folio-shots">
            {siteShots.map((site, i) => (
              <a key={site.url} className={`folio-shot${i < 2 ? ' folio-shot--wide' : ''}`} href={site.url} target="_blank" rel="noopener noreferrer">
                <img src={site.img} alt={`${site.name} home page`} width="1440" height="900" loading="lazy" />
                <span className="folio-shot-name">{site.name}</span>
                <span className="folio-mono">{site.sector} · {host(site.url)}</span>
              </a>
            ))}
          </div>

          <h3 className="folio-ledger-title">Every site and product we’ve shipped</h3>
          <ol className="folio-ledger">
            {COMPLETED_SITES.map((site, i) => (
              <li key={site.url}>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  <span className="folio-mono">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{site.name}</strong>
                  <span>{site.sector}</span>
                  <span className="folio-mono">{host(site.url)}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="folio-section folio-close">
        <div className="folio-wrap">
          <h2>Want one of these for your business?</h2>
          <p className="folio-sub">Tell us what takes up your week. We’ll show you what we’d build and what it costs.</p>
          <div className="folio-actions">
            <a className="folio-btn" href="/#contact">Start a project</a>
            <Link className="folio-link" to="/refer">Know a business that needs one? Refer it and earn</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
