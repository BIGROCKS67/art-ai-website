import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container, Button } from './components/ui'
import { LineReveal } from './components/motion'
import BreathingField from './components/BreathingField'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className="page not-found-page">
      <section className="not-found-hero">
        <div className="not-found-hero-art" aria-hidden="true">
          <BreathingField />
        </div>
        <Container>
          <div className="not-found-inner">
            <p className="hero-kicker">404</p>
            <LineReveal
              className="not-found-title"
              lines={[
                { text: 'This page' },
                { text: "isn't here.", mark: true },
              ]}
            />
            <p className="not-found-sub">
              That address is not a page on <span className="not-found-brand">Shift AI Tech</span>.
            </p>
            <div className="not-found-actions">
              <Button href="/">Back to Shift</Button>
              <Link to="/our-story" className="hero-story-link">
                Our story <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
