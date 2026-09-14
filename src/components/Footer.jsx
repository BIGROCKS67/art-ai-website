import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src={`${import.meta.env.BASE_URL}shift-logo-new.png`}
                alt="Shift AI Tech"
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-tagline">
              Shift AI Tech. AI products we own, train, and ship.
            </p>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-label">Company</p>
            <Link to="/our-story" className="footer-nav-link">Our Story</Link>
            <Link to="/partners" className="footer-nav-link">Partners</Link>
            <Link to="/team" className="footer-nav-link">Team</Link>
            <Link to="/blog" className="footer-nav-link">Insights</Link>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-label">Products</p>
            <a href="/#projects" className="footer-nav-link">BioSense</a>
            <a href="/#projects" className="footer-nav-link">Braid</a>
            <a href="/#projects" className="footer-nav-link">Deep Space Learning</a>
            <a href="/#solutions" className="footer-nav-link">Platform</a>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-label">Get Started</p>
            <a href="/#contact" className="footer-nav-link footer-nav-link--cta">
              Partner with us <ArrowRight size={14} />
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
