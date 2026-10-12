import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-mark" aria-label="Shift AI Tech">
          shift.
        </Link>
        <p className="footer-tagline">
          Shift AI Tech. AI products that ship, for businesses that need an edge.
        </p>
        <div className="footer-top">
          <div className="footer-nav-group">
            <p className="footer-nav-label">Company</p>
            <Link to="/our-story" className="footer-nav-link">Our Story</Link>
            <Link to="/partners" className="footer-nav-link">Partners</Link>
            <Link to="/team" className="footer-nav-link">Team</Link>
            <Link to="/research/research-paper-3" className="footer-nav-link">Research</Link>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-label">Services</p>
            <Link to="/#custom-ai" className="footer-nav-link">Custom AI</Link>
            <Link to="/#product-builds" className="footer-nav-link">Product builds</Link>
            <Link to="/#automation" className="footer-nav-link">Automation</Link>
            <Link to="/#strategy" className="footer-nav-link">Strategy</Link>
            <Link to="/websites" className="footer-nav-link">Websites</Link>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-label">Get Started</p>
            <a href="/#contact" className="footer-nav-link footer-nav-link--cta">
              Start a project <ArrowRight size={14} />
            </a>
            <Link to="/onboarding" className="footer-nav-link">Onboarding</Link>
            <a href="mailto:partnerships@shiftaitech.com" className="footer-nav-link">
              partnerships@shiftaitech.com
            </a>
            <span className="footer-nav-link footer-nav-link--static">United Kingdom</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2026 Shift AI Tech (Shift AI Technology Ltd · 17159725). All rights reserved.</p>
          <p className="footer-legal">Unit 14, The Maltings, Hall Road, Southminster, Essex CM0 7EQ · shiftaitech.com</p>
        </div>
      </div>
    </footer>
  )
}
