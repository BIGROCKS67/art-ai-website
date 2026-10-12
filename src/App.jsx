import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container, SectionHeading, DisplayTitle, Button } from './components/ui'
import ContactForm from './components/ContactForm'
import { Reveal, MediaReveal, LineReveal } from './components/motion'
import BreathingField from './components/BreathingField'
import { portfolio as portfolioData } from './data/projects'
import './App.css'

const featuredOrder = ['lnd', 'biosense', 'aml']
const featuredProjects = featuredOrder
  .map((id) => portfolioData.find((project) => project.id === id && project.featured))
  .filter(Boolean)

const pillars = [
  {
    number: '01',
    title: 'Clear decisions',
    desc: 'We help you pick the right AI, not a pile of tools.',
  },
  {
    number: '02',
    title: 'Sharp products',
    desc: 'Systems that look considered and actually ship.',
  },
  {
    number: '03',
    title: 'Commercial pace',
    desc: 'Built to grow. Paid for, not just launched.',
  },
]

const services = [
  {
    number: '01',
    id: 'custom-ai',
    title: 'Custom AI',
    description: 'Models, agents, and RAG pipelines trained on your data.',
    href: '#contact',
  },
  {
    number: '02',
    id: 'product-builds',
    title: 'Product builds',
    description: 'Full-stack products from concept to live deployment.',
    href: '#contact',
  },
  {
    number: '03',
    id: 'automation',
    title: 'Automation',
    description: 'Workflows that replace slow, manual work.',
    href: '#contact',
  },
  {
    number: '04',
    id: 'strategy',
    title: 'Strategy',
    description: 'Where AI pays off. Scoped, priced, and clear before you commit.',
    href: '#contact',
  },
  {
    number: '05',
    id: 'service-websites',
    title: 'Websites',
    description: 'Bespoke design, build, host, and SEO foundations.',
    href: '/websites',
  },
]

const processSteps = [
  { n: '01', title: 'Brief', desc: 'Goals, constraints, and where AI actually fits.' },
  { n: '02', title: 'Design', desc: 'Architecture, scope, and cost, agreed upfront.' },
  { n: '03', title: 'Build', desc: 'Fast delivery. No bloat, no waste.' },
  { n: '04', title: 'Ship', desc: 'Live, monitored, and ready to iterate.' },
]

const stats = [
  { value: '$650k', label: 'Funded into the first models, in 2024.', href: '/our-story' },
  { value: '82%', label: 'Cut from the rebuild of those same systems.', href: '/our-story' },
  { value: 'UK', label: 'Founder-led. Southminster, Essex.', href: '/team' },
]

const proof = [
  { label: 'AWS Activate', href: '/partners' },
  { label: 'NVIDIA Inception', href: '/partners' },
  { label: 'BioSense', href: '/#case-study-biosense' },
  { label: 'Braid', href: '/#case-study-aml' },
  { label: 'Deep Space', href: '/#case-study-lnd' },
  { label: 'RAMDVG', href: '/partners' },
  { label: 'AP Creative Co', href: '/partners' },
  { label: '$650k into the first models', href: '/our-story' },
  { label: '82% off the rebuild', href: '/our-story' },
]

const faqs = [
  {
    q: 'What does Shift AI Tech do?',
    a: (
      <>
        Shift AI Tech is a UK AI studio that builds custom AI models, agents, automation, full product builds, and <Link to="/websites">websites</Link> for businesses that need a commercial edge.
      </>
    ),
  },
  {
    q: 'Who founded Shift AI Tech?',
    a: (
      <>
        <Link to="/team">Jack Rockell</Link> and <Link to="/team">Darren Bishop</Link>. Jack leads technology. Darren leads business and partnerships. The company is Shift AI Technology Ltd, number <a href="https://find-and-update.company-information.service.gov.uk/company/17159725" target="_blank" rel="noopener noreferrer">17159725</a>.
      </>
    ),
  },
  {
    q: 'Are you the same as Shift Technology or other Shift AI brands?',
    a: 'No. We are Shift AI Tech at shiftaitech.com, an independent UK studio. Not Shift Technology (insurance AI) and not Shift AI at shiftai.co.uk.',
  },
  {
    q: 'Where is Shift based?',
    a: 'Southminster, Essex, United Kingdom. Founder-led. You work with the people who build the product.',
  },
  {
    q: 'Which programmes is Shift in?',
    a: (
      <>
        <Link to="/partners">AWS Activate</Link>, and the <Link to="/partners">NVIDIA Inception programme</Link>.
      </>
    ),
  },
  {
    q: 'How fast can you ship?',
    a: 'From brief to a working prototype in weeks, with useful output from day one.',
  },
  {
    q: 'Do you build websites as well as AI?',
    a: (
      <>
        Yes. Bespoke design, build, host, and SEO foundations. Fixed-price packages on our <Link to="/websites">Websites page</Link>.
      </>
    ),
  },
]

function App() {
  const { hash } = useLocation()

  return (
    <div className="page">

      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          <BreathingField />
        </div>
        <Container>
          <div className="hero-inner">
            <p className="hero-kicker">Shift AI Tech · United Kingdom</p>
            <LineReveal
              className="hero-title"
              lines={[
                { text: 'We build AI' },
                { text: 'that gives' },
                { text: 'businesses their edge.', mark: true },
              ]}
            />
            <Reveal className="hero-sub" delay={0.12} viewport={{ once: true, margin: '0px' }}>
              Shift AI Tech builds custom models, automation, and full product builds.
              From brief to live in weeks.
            </Reveal>
            <Reveal className="hero-actions" delay={0.2} viewport={{ once: true, margin: '0px' }}>
              <Button href="#contact">Start a project</Button>
              <a href="#projects" className="hero-story-link" data-cursor="WORK">
                See the work <ArrowRight size={15} />
              </a>
            </Reveal>
          </div>
        </Container>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-cue-line" />
        </div>
      </section>

      <div className="proof" aria-label="Programmes and products">
        <div className="proof-track">
          <div className="proof-set">
            {proof.map((item) => (
              <Link key={item.label} to={item.href} className="proof-item">
                {item.label}
                <span className="proof-dot" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="approach">
        <Container>
          <Reveal>
            <h2 className="approach-statement">
              Shaping how businesses use AI. Seen, trusted, and paid for.
            </h2>
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
            <DisplayTitle>Capability</DisplayTitle>
            <SectionHeading>What we build.</SectionHeading>
          </Reveal>
          <div className="service-rows">
            {services.map((s, i) => (
              <Reveal
                key={s.title}
                as="a"
                href={s.href}
                id={s.id}
                className={`service-row${hash === `#${s.id}` ? ' service-row--here' : ''}`}
                delay={i * 0.05}
                data-cursor="BUILD"
              >
                <span className="service-row-num">{s.number}</span>
                <h3 className="service-row-title">{s.title}</h3>
                <p className="service-row-desc">{s.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="section section--dark">
        <Container>
          <Reveal>
            <DisplayTitle>Work</DisplayTitle>
            <SectionHeading>Selected projects.</SectionHeading>
            <p className="section-intro">
              Real products across compliance, health, training, and finance.
            </p>
          </Reveal>

          <div className="showcase">
            {featuredProjects.map((p, i) => (
              <div
                key={p.id}
                id={`case-study-${p.id}`}
                className={`showcase-item${i % 2 === 1 ? ' showcase-item--flip' : ''}${p.id === 'aml' ? ' showcase-item--panel' : ''}`}
              >
                <MediaReveal className="showcase-media" data-cursor="VIEW">
                  {p.link ? (
                    <a
                      className="showcase-media-main"
                      href={p.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="VIEW"
                    >
                      <img
                        src={p.images[0]}
                        alt={`${p.partner} screenshot`}
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                    </a>
                  ) : (
                    <div className="showcase-media-main">
                      <img
                        src={p.images[0]}
                        alt={`${p.partner} screenshot`}
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  )}
                </MediaReveal>
                <Reveal className="showcase-content" delay={0.12}>
                  <p className="showcase-kicker">
                    <span className="showcase-index">{String(i + 1).padStart(2, '0')}</span>
                    <span className="showcase-sector">{p.sector}</span>
                  </p>
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
              <Reveal key={s.value} delay={i * 0.04}>
                <Link to={s.href} className="stat-cell">
                  <p className="stat-value">{s.value}</p>
                  <p className="stat-label">{s.label}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="work-with-us" className="section method">
        <Container>
          <div className="method-layout">
            <div className="method-rail">
              <DisplayTitle>Method</DisplayTitle>
              <SectionHeading>From idea to live.</SectionHeading>
            </div>
            <ol className="method-steps">
              {processSteps.map((p, i) => (
                <Reveal key={p.title} as="li" className="method-step" delay={i * 0.05}>
                  <span className="method-num" aria-hidden="true">{p.n}</span>
                  <div className="method-copy">
                    <h3 className="method-title">{p.title}</h3>
                    <p className="method-desc">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section id="faq" className="section">
        <Container>
          <Reveal>
            <DisplayTitle>FAQ</DisplayTitle>
            <SectionHeading>Straight answers.</SectionHeading>
            <p className="section-intro">
              Clear answers about who we are and what we build.
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
          <div className="contact-bg-glow" />
        </div>
        <Container>
          <p className="hero-kicker">Contact</p>
          <LineReveal
            as="h2"
            when="view"
            className="contact-title"
            lines={[
              { text: 'Tell us' },
              { text: 'what you need.', mark: true },
            ]}
          />
          <div className="contact-grid">
            <Reveal className="contact-info contact-people">
              <a className="contact-person" href="mailto:jack@shiftaitech.com">
                <span className="contact-person-role">Technology</span>
                <span className="contact-person-name">Jack Rockell</span>
                <span className="contact-person-email">jack@shiftaitech.com</span>
              </a>
              <a className="contact-person" href="mailto:darren@shiftaitech.com">
                <span className="contact-person-role">Business &amp; partnerships</span>
                <span className="contact-person-name">Darren Bishop</span>
                <span className="contact-person-email">darren@shiftaitech.com</span>
              </a>
              <a className="contact-person" href="mailto:partnerships@shiftaitech.com">
                <span className="contact-person-role">Partnerships</span>
                <span className="contact-person-name">partnerships@<wbr />shiftaitech.com</span>
              </a>
              <address className="contact-address">
                Unit 14, The Maltings, Hall Road
                <br />
                Southminster, Essex CM0 7EQ
              </address>
              <p className="contact-response">Reply within a day</p>
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
