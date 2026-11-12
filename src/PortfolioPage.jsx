import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/martian-mono/400.css'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPLETED_SITES } from './config/websitesOffer'
import { systems, moreSystems, siteShots } from './data/portfolioWork'
import './PortfolioPage.css'

function host(url) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

// The edit-suite monitor: one screen, a list of recordings beside it.
function SystemsPlayer() {
  const [active, setActive] = useState(0)
  const videoRef = useRef(null)
  const item = systems[active]

  function pick(i) {
    setActive(i)
    // Start the new recording once the source has swapped
    requestAnimationFrame(() => videoRef.current?.play().catch(() => {}))
  }

  return (
    <div className="folio-player">
      <figure className="folio-screen">
        <video
          ref={videoRef}
          key={item.code}
          controls
          muted
          playsInline
          preload="none"
          poster={`${item.video}.jpg`}
          width="1280"
          height="800"
        >
          <source src={`${item.video}.mp4`} type="video/mp4" />
        </video>
        <figcaption>
          <p className="folio-screen-head">
            <span className="folio-code">{item.code}</span>
            <strong>{item.title}</strong>
          </p>
          <p>{item.body}</p>
          <p className="folio-mono">{item.status} · {item.for} · Built {item.built}</p>
        </figcaption>
      </figure>

      <ol className="folio-reel" aria-label="Screen recordings">
        {systems.map((s, i) => (
          <li key={s.code}>
            <button type="button" aria-pressed={i === active} onClick={() => pick(i)}>
              <span className="folio-code">{s.code}</span>
              <span className="folio-reel-title">{s.title}</span>
              <span className="folio-mono">{s.status}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function PortfolioPage() {
  const productCount = systems.length + moreSystems.length

  return (
    <div className="folio">
      <header className="folio-hero">
        <div className="folio-wrap">
          <h1>Everything we’ve built, live or on screen.</h1>
          <p className="folio-lede">
            {COMPLETED_SITES.length} websites and products live on their own domains and {productCount} business systems and AI apps.
          </p>
          <div className="folio-actions">
            <a className="folio-btn" href="/#contact">Start a project</a>
            <a className="folio-link" href="#systems">Watch the systems</a>
          </div>
          <nav className="folio-index" aria-label="On this page">
            <a href="#systems"><span>Systems on video</span><span>{systems.length}</span></a>
            <a href="#more"><span>More systems</span><span>{moreSystems.length}</span></a>
            <a href="#websites"><span>Websites and products</span><span>{COMPLETED_SITES.length}</span></a>
          </nav>
        </div>
      </header>

      <section id="systems" className="folio-section">
        <div className="folio-wrap">
          <h2>Business systems, recorded on screen.</h2>
          <p className="folio-sub">Real builds running on sample data, so no client’s details are shown. Pick one to play it.</p>
          <SystemsPlayer />
        </div>
      </section>

      <section id="more" className="folio-section">
        <div className="folio-wrap">
          <h2>More systems we’ve built.</h2>
          <dl className="folio-more">
            {moreSystems.map((s) => (
              <div key={s.code}>
                <dt><span className="folio-code">{s.code}</span>{s.title}</dt>
                <dd>{s.line}</dd>
                <dd className="folio-mono">{s.status}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

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
