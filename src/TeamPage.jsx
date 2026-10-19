import { Container, Button } from './components/ui'
import { Reveal, LineReveal, MediaReveal } from './components/motion'
import BreathingField from './components/BreathingField'
import './TeamPage.css'

const teamProfiles = [
  {
    name: 'Jack Rockell',
    role: 'CTO',
    focus: 'Technology',
    location: 'Southminster, Essex',
    bio: 'Jack leads product engineering and development at Shift AI, taking projects from concept to deployment.',
    photo: '/jack-rockell.webp',
    email: 'jack@shiftaitech.com',
    linkedin: 'https://www.linkedin.com/in/jack-rockell-841482267/',
  },
  {
    name: 'Darren Bishop',
    role: 'Head of Operations',
    focus: 'Business & partnerships',
    location: 'United Kingdom',
    bio: 'Darren leads business development and strategic partnerships at Shift AI.',
    photo: '/darren-bishop.webp',
    email: 'darren@shiftaitech.com',
    linkedin: 'https://www.linkedin.com/in/dwbishop/',
  },
  {
    name: 'Dan Kent',
    role: 'Developer',
    focus: 'Engineering & design',
    location: 'United Kingdom',
    bio: 'Dan brings over 10 years of software engineering experience, plus UX/UI design, to the products Shift AI ships.',
    photo: '/dan-kent.webp',
    email: '',
    linkedin: '',
  },
]

export default function TeamPage() {
  return (
    <div className="subpage team-page">
      <section className="team-hero">
        <div className="team-hero-art" aria-hidden="true">
          <BreathingField />
        </div>
        <Container>
          <div className="team-hero-inner">
            <p className="team-kicker">Team</p>
            <LineReveal
              className="team-hero-title"
              lines={[
                { text: 'The people' },
                { text: 'behind Shift.', mark: true },
              ]}
            />
            <Reveal>
              <p className="team-hero-sub">
                Jack Rockell, CTO. Darren Bishop, Head of Operations. Dan Kent, Developer.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section team-list">
        <Container>
          <div className="team-grid">
            {teamProfiles.map((member, i) => (
              <article key={member.name} className="team-profile">
                <MediaReveal className="team-figure">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="team-portrait"
                      width={380}
                      height={304}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  ) : (
                    <span className="shape-monogram" aria-hidden="true">DK</span>
                  )}
                </MediaReveal>
                <Reveal className="team-copy" delay={0.08}>
                  <p className="team-role">{member.focus}</p>
                  <h2 className="team-name">{member.name}</h2>
                  <p className="team-meta">
                    {member.role}
                    <span aria-hidden="true"> · </span>
                    {member.location}
                  </p>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-links">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="team-link">
                        {member.email}
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-link"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </Reveal>
              </article>
            ))}
          </div>

          <div className="team-cta">
            <h2 className="team-cta-title">You work with the people who build the product.</h2>
            <p>Jack leads technology. Darren leads business and partnerships.</p>
            <Button href="/#contact">Start a project</Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
