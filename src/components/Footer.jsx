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
          Shift AI. A technology studio for the brief that doesn’t fit a template.
        </p>
        <div className="footer-top">
          <div className="footer-nav-group">
            <p className="footer-nav-label">Studio</p>
            <a href="/#studio" className="footer-nav-link">What we do</a>
            <a href="/#products" className="footer-nav-link">Products</a>
            <a href="/#team" className="footer-nav-link">Team</a>
            <Link to="/portfolio" className="footer-nav-link">Portfolio</Link>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-label">Company</p>
            <Link to="/partners" className="footer-nav-link">Partners</Link>
            <Link to="/our-story" className="footer-nav-link">Our Story</Link>
            <Link to="/websites" className="footer-nav-link">Websites</Link>
            <Link to="/onboarding" className="footer-nav-link">Onboarding</Link>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-label">Talk</p>
            <a href="/#contact" className="footer-nav-link footer-nav-link--cta">
              Let&apos;s Talk <ArrowRight size={14} />
            </a>
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
