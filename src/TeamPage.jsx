import { Container, Button } from './components/ui'
import { Reveal, LineReveal, MediaReveal } from './components/motion'
import BreathingField from './components/BreathingField'
import './TeamPage.css'

const teamProfiles = [
  {
    name: 'Jack Rockell',
    role: 'Co-founder & Director',
    focus: 'Technology',
    location: 'Southminster, Essex',
    bio: 'Co-founder of Shift AI Technology Ltd. Developer responsible for Shift’s technology — products, systems, and technical delivery.',
    photo: '/jack-rockell.webp',
    email: 'jack@shiftaitech.com',
    linkedin: 'https://www.linkedin.com/in/jack-rockell-841482267/',
  },
  {
    name: 'Darren Bishop',
    role: 'Co-founder & Director',
    focus: 'Business & partnerships',
    location: 'United Kingdom',
    bio: 'Co-founder of Shift AI Technology Ltd. Leads business, commercial relationships, and partnerships.',
    photo: '/darren-bishop.webp',
    email: 'darren@shiftaitech.com',
    linkedin: 'https://www.linkedin.com/in/dwbishop/',
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
                Co-founders Jack Rockell and Darren Bishop. Jack leads technology. Darren leads business and partnerships.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section team-list">
        <Container>
          <div className="team-grid">
            {teamProfiles.map((member, i) => (
              <article key={member.email} className="team-profile">
                <MediaReveal className="team-figure">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-portrait"
                    width={380}
                    height={304}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
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
                    <a href={`mailto:${member.email}`} className="team-link">
                      {member.email}
                    </a>
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
