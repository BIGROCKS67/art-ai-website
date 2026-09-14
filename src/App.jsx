import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Zap,
} from 'lucide-react'
import { Container, SectionHeading, DisplayTitle, Button } from './components/ui'
import ContactForm from './components/ContactForm'
import { Reveal, MediaReveal } from './components/motion'
import BreathingField from './components/BreathingField'
import { portfolio as portfolioData } from './data/projects'
import './App.css'

const featuredProjects = portfolioData.filter((p) => p.featured)

const pillars = [
  {
    number: '01',
    title: 'Own the product',
    desc: 'We ship AI products we own, not slide decks for hire.',
  },
  {
    number: '02',
    title: 'Train and run',
    desc: 'Models, agents, and infrastructure built for production load.',
  },
  {
    number: '03',
    title: 'Commercial proof',
    desc: 'Live products in health, compliance, and learning.',
  },
]

const stack = [
  {
    number: '01',
    title: 'Health intelligence',
    description: 'BioSense. Blood, wearables, and AI reports in one product.',
  },
  {
    number: '02',
    title: 'Compliance AI',
    description: 'Braid. AML and risk assessments for regulated firms.',
  },
  {
    number: '03',
    title: 'Learning platforms',
    description: 'Deep Space. AI-avatar courses that scale without a studio.',
  },
  {
    number: '04',
    title: 'Model training',
    description: 'On NVIDIA DGX and cloud GPUs. Training our product stack.',
  },
]

const processSteps = [
  { n: '01', title: 'Problem', desc: 'A real commercial gap worth a product.' },
  { n: '02', title: 'Architecture', desc: 'Models, data, and infra designed to scale.' },
  { n: '03', title: 'Build', desc: 'Ship the product. No bloat, no theatre.' },
  { n: '04', title: 'Operate', desc: 'Live users, live models, continuous training.' },
]

const stats = [
  { value: '3+', label: 'Live AI products in market.' },
  { value: 'DGX', label: 'On-prem NVIDIA for model training.' },
  { value: 'UK', label: 'Founder-led product company.' },
]

const faqs = [
  {
    q: 'What does Shift AI Tech do?',
    a: 'Shift AI Tech is a UK AI product company. We build, own, and operate AI products including BioSense, Braid, and Deep Space Learning.',
  },
  {
    q: 'Are you the same as Shift Technology or other Shift AI brands?',
    a: 'No. We are Shift AI Tech at shiftaitech.com, an independent UK product company. Not Shift Technology (insurance AI) and not Shift AI at shiftai.co.uk.',
  },
  {
    q: 'What products do you ship?',
    a: 'BioSense for personal health intelligence, Braid for AML and risk assessments, and Deep Space Learning for AI-delivered professional training.',
  },
  {
    q: 'Do you train your own models?',
    a: 'Yes. We train and run models on NVIDIA DGX and cloud GPUs as part of shipping and scaling our product stack.',
  },
]

function App() {
  return (
    <div className="page">

      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          <BreathingField />
        </div>
        <Container>
          <div className="hero-inner">
            <p className="hero-kicker">Shift AI Tech · AI products · United Kingdom</p>
            <h1 className="hero-title">
              AI products we own, train, and ship.
            </h1>
            <Reveal className="hero-sub" delay={0.12}>
              BioSense, Braid, and Deep Space Learning. Live products on real
              infrastructure, including NVIDIA for model training.
            </Reveal>
            <Reveal className="hero-actions" delay={0.2}>
              <Button href="#projects">See our products</Button>
              <a href="#contact" className="hero-story-link" data-cursor="WORK">
                Partner with us <ArrowRight size={15} />
              </a>
            </Reveal>
          </div>
        </Container>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-cue-line" />
        </div>
      </section>

      <section className="approach">
        <Container>
          <Reveal>
            <p className="approach-statement">
              A product company. We build AI that users run every day.
            </p>
          </Reveal>
          <div className="approach-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.title} className="approach-item" delay={i * 0.06}>
                <span className="approach-num">{p.number}</span>
                <h3 className="approach-title">{p.title}</h3>
                <p className="approach-desc">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="solutions" className="section section--capability">
        <Container>
          <Reveal className="capability-header-copy">
            <DisplayTitle>Platform</DisplayTitle>
            <SectionHeading>What we ship.</SectionHeading>
          </Reveal>
          <div className="service-rows">
            {stack.map((s, i) => (
              <Reveal key={s.title} className="service-row" delay={i * 0.05} data-cursor="BUILD">
                <span className="service-row-num">{s.number}</span>
                <div className="service-row-body">
                  <h3 className="service-row-title">{s.title}</h3>
                  <p className="service-row-desc">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="section section--dark">
        <Container>
          <Reveal>
            <DisplayTitle>Products</DisplayTitle>
            <SectionHeading>In market now.</SectionHeading>
            <p className="section-intro">
              Owned AI products across health, compliance, and learning.
            </p>
          </Reveal>

          <div className="showcase">
            {featuredProjects.map((p, i) => (
              <div
                key={p.id}
                id={`case-study-${p.id}`}
                className={`showcase-item${i % 2 === 1 ? ' showcase-item--flip' : ''}`}
              >
                <MediaReveal className="showcase-media" data-cursor="VIEW">
                  <div className="showcase-media-main">
                    <img src={p.images[0]} alt={`${p.partner} screenshot`} loading="lazy" />
                  </div>
                </MediaReveal>
                <Reveal className="showcase-content" delay={0.12}>
                  <span className="showcase-sector">{p.sector}</span>
                  <h3 className="showcase-name">{p.partner}</h3>
                  <p className="showcase-desc">{p.short || p.description}</p>
                  {p.link && (
                    <div className="showcase-foot">
                      <a
                        href={p.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="showcase-link"
                        data-cursor="VIEW"
                      >
                        {p.link.label} <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )}
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--dark results">
        <Container>
          <div className="stats-grid stats-grid--tight">
            {stats.map((s, i) => (
              <Reveal key={s.value} className="stat-cell" delay={i * 0.04}>
                <p className="stat-value">{s.value}</p>
                <p className="stat-label">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="work-with-us" className="section">
        <Container>
          <Reveal>
            <DisplayTitle>Method</DisplayTitle>
            <SectionHeading>From problem to product.</SectionHeading>
          </Reveal>
          <div className="process-grid">
            {processSteps.map((p, i) => (
              <Reveal key={p.title} className="process-card" delay={i * 0.05}>
                <span className="process-card-num">{p.n}</span>
                <h3 className="process-card-title">{p.title}</h3>
                <p className="process-card-desc">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="faq" className="section">
        <Container>
          <Reveal>
            <DisplayTitle>FAQ</DisplayTitle>
            <SectionHeading>Straight answers.</SectionHeading>
            <p className="section-intro">
              Clear answers about who we are and what we ship.
            </p>
          </Reveal>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <Reveal key={item.q} className="faq-item" delay={i * 0.04}>
                <h3 className="faq-q">{item.q}</h3>
                <p className="faq-a">{item.a}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="section section--contact">
        <div className="contact-bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80"
            alt=""
            loading="lazy"
          />
          <div className="contact-bg-overlay" />
        </div>
        <Container>
          <Reveal>
            <SectionHeading>Talk products and partnerships.</SectionHeading>
            <p className="section-intro">We usually reply within a day.</p>
          </Reveal>
          <div className="contact-grid">
            <Reveal className="contact-info">
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:jack@shiftaitech.com">jack@shiftaitech.com</a>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>United Kingdom</span>
              </div>
              <div className="contact-response">
                <Zap size={14} />
                Reply within 24 hours
              </div>
            </Reveal>
            <Reveal className="contact-form-wrap" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default App
