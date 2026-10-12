import { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Container, Button } from './components/ui'
import { Reveal, LineReveal } from './components/motion'
import BreathingField from './components/BreathingField'
import './ResearchPaperPage.css'

const EXTERNAL_PAPERS = {
  'research-paper-1':
    'https://www.deloitte.com/content/dam/assets-shared/docs/about/2025/state-of-ai-2026-global.pdf',
  'research-paper-2':
    'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
}

const relatedResearch = [
  {
    id: 'research-paper-1',
    title: 'Deloitte: State of AI in the Enterprise (January 2026)',
    summary: 'How AI is driving productivity, efficiency and new business models.',
    href: EXTERNAL_PAPERS['research-paper-1'],
  },
  {
    id: 'research-paper-2',
    title: 'McKinsey: The state of AI',
    summary:
      'A clear snapshot of enterprise AI adoption, scaling maturity, and where organisations are unlocking measurable value.',
    href: EXTERNAL_PAPERS['research-paper-2'],
  },
]

const keyInsights = [
  { stat: '74%', detail: 'of organisations report a measurable ROI from AI within the first year (McKinsey).' },
  { stat: '66%', detail: 'of organisations report measurable productivity and efficiency gains (Deloitte).' },
  { stat: '3\u00d7', detail: 'greater cost reductions among AI-leading companies (BCG).' },
  { stat: 'Up to 90%', detail: 'cost reduction in customer service operations via AI automation (BCG).' },
  { stat: '20\u201330%', detail: 'cost savings in software engineering and maintenance (BCG).' },
  { stat: '34%', detail: 'of firms are using AI to transform core business processes (Deloitte).' },
  { stat: '40%', detail: 'of organisations cite cost reduction as a primary benefit (Deloitte).' },
  { stat: '27% vs 9%', detail: 'revenue-per-employee growth in AI-exposed industries versus others (PwC).' },
]

export default function ResearchPaperPage() {
  const { paperId } = useParams()
  const navigate = useNavigate()
  const externalHref = EXTERNAL_PAPERS[paperId]

  useEffect(() => {
    if (!externalHref) return
    window.location.replace(externalHref)
  }, [externalHref])

  if (externalHref) {
    return (
      <div className="subpage research-page">
        <section className="section">
          <Container narrow>
            <p className="subpage-sub">Opening report…</p>
            <a href={externalHref} rel="noopener noreferrer">
              Continue to report
            </a>
          </Container>
        </section>
      </div>
    )
  }

  if (paperId !== 'research-paper-3') {
    return <Navigate to="/our-story" replace />
  }

  return (
    <div className="page research-page">
      <section className="research-hero">
        <div className="research-hero-art" aria-hidden="true">
          <BreathingField />
        </div>
        <Container>
          <div className="research-hero-inner">
            <button
              type="button"
              className="research-back"
              onClick={() => {
                if (window.history.length > 1) navigate(-1)
                else navigate('/our-story')
              }}
            >
              <ArrowLeft size={16} /> Back
            </button>
            <p className="hero-kicker">Shift AI Research</p>
            <LineReveal
              className="research-hero-title"
              lines={[
                { text: 'The AI' },
                { text: 'value shift.', mark: true },
              ]}
            />
            <Reveal>
              <p className="research-hero-sub">
                How artificial intelligence is driving measurable business impact. Compiled from BCG, McKinsey, Deloitte, and PwC.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <article className="research-article">
        <section className="section research-evidence">
          <Container>
            <div className="research-lead">
              <h2>Executive summary</h2>
              <p>
                Across leading global studies, AI is moving decisively from experimentation to measurable financial and
                operational impact. The strongest outcomes are concentrated among organisations deploying AI at scale
                across core processes rather than isolated pilots.
              </p>
            </div>

            <p className="research-source-note">
              These figures are from BCG, McKinsey, Deloitte, and PwC. They are not Shift client results.
            </p>

            <div className="insight-grid">
              {keyInsights.map((item) => (
                <div key={item.stat + item.detail} className="insight-card">
                  <p className="insight-stat">{item.stat}</p>
                  <p className="insight-detail">{item.detail}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="section research-prose">
          <Container>
            <div className="whitepaper-section">
              <h2>Introduction</h2>
              <p>
                Over the past three years, major consulting firms including Boston Consulting Group, McKinsey,
                Deloitte, and PwC have published extensive research on the business impact of AI. The findings are
                increasingly aligned: AI adoption is shifting from pilot activity toward enterprise-scale transformation.
              </p>
              <p>
                While many organisations continue to test early use cases, high-performing companies are already
                capturing significant gains in productivity, cost efficiency, and commercial performance. This creates a
                widening gap between organisations that integrate AI strategically and those that remain in
                experimentation mode.
              </p>
            </div>
          </Container>
        </section>

        <section className="section research-sources">
          <Container>
            <h2 className="research-band-title">Evidence from global research</h2>

              <a
                className="source-block"
                href="https://www.bcg.com/publications/2025/are-you-generating-value-from-ai-the-widening-gap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Boston Consulting Group</h3>
                <p className="source-paper">The Widening AI Value Gap (2025) &rarr;</p>
                <ul>
                  <li>3&times; greater cost reductions among AI-leading organisations compared with lagging adopters.</li>
                  <li>Professionals using AI completed tasks 25% faster with 40% higher quality output (BCG-Harvard study).</li>
                  <li>Up to 90% cost reductions in customer service operations via AI automation.</li>
                  <li>20&ndash;30% savings in software engineering and maintenance.</li>
                </ul>
              </a>

              <a
                className="source-block"
                href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>McKinsey &amp; Company</h3>
                <p className="source-paper">The State of AI (2025) &rarr;</p>
                <ul>
                  <li>74% of organisations report a measurable ROI from AI within the first year.</li>
                  <li>The top 6% of high-performing firms attribute more than 5% of EBIT directly to AI adoption.</li>
                  <li>Strongest benefits are emerging across HR, IT, and service operations.</li>
                </ul>
              </a>

              <a
                className="source-block"
                href="https://www.deloitte.com/dk/en/issues/generative-ai/state-of-ai-in-enterprise.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Deloitte</h3>
                <p className="source-paper">State of AI in the Enterprise (2026) &rarr;</p>
                <ul>
                  <li>66% of organisations report measurable productivity and efficiency gains from AI.</li>
                  <li>34% of firms are using AI to transform core business processes.</li>
                  <li>40% of organisations cite cost reduction as a primary implementation benefit.</li>
                </ul>
              </a>

              <a
                className="source-block"
                href="https://www.pwc.com/gx/en/news-room/press-releases/2025/ai-linked-to-a-fourfold-increase-in-productivity-growth.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>PwC</h3>
                <p className="source-paper">Global AI Jobs Barometer (2025) &rarr;</p>
                <ul>
                  <li>AI-exposed industries are seeing materially stronger productivity outcomes.</li>
                  <li>Revenue per employee increased by 27% in AI-intensive sectors versus 9% in less exposed sectors.</li>
                </ul>
              </a>
          </Container>
        </section>

        <section className="section research-prose">
          <Container>
            <div className="whitepaper-section">
              <h2>The cost compression effect</h2>
              <p>
                A clear pattern emerging across these datasets is cost compression. AI is reducing the marginal cost of
                building and operating complex systems by automating repetitive workflows, accelerating production
                cycles, and improving output quality simultaneously.
              </p>
              <p>
                The practical implication is significant: capabilities that previously required long delivery horizons
                and heavy engineering spend are increasingly deliverable through leaner teams, faster development
                sprints, and lower operating cost structures.
              </p>
            </div>

            <div className="whitepaper-section">
              <h2>Implications for businesses</h2>
              <p>
                For business leaders evaluating AI initiatives, the directional evidence is now unambiguous. The
                highest returns are being realised by organisations deploying AI strategically across core business
                functions rather than running disconnected pilots.
              </p>
              <p>
                As capabilities continue to mature, early and disciplined adopters are likely to secure a
                disproportionate competitive advantage through:
              </p>
              <ul>
                <li>More efficient operating models</li>
                <li>Improved cost structures</li>
                <li>Higher workforce productivity</li>
                <li>Stronger revenue expansion potential</li>
              </ul>
              <p className="research-pull">
                The emerging divide is best understood as an AI value shift: from experimentation to measurable business
                impact.
              </p>
            </div>
          </Container>
        </section>

        <section className="section research-reading">
          <Container>
            <h2 className="research-band-title">Further reading</h2>
            <div className="related-grid">
              {relatedResearch.map((rp) => (
                <a
                  key={rp.id}
                  href={rp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="related-card"
                >
                  <h3>{rp.title}</h3>
                  <p>{rp.summary}</p>
                  <span className="related-card-link">Read report &rarr;</span>
                </a>
              ))}
            </div>
          </Container>
        </section>

        <section className="section">
          <Container>
            <Reveal className="research-close">
              <h2 className="research-close-title">They are not Shift client results.</h2>
              <p>These figures are from BCG, McKinsey, Deloitte, and PwC.</p>
              <div className="research-close-actions">
                <Button href="/#contact">Start a project</Button>
                <Link to="/our-story" className="hero-story-link">
                  Our story <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>
      </article>
    </div>
  )
}
