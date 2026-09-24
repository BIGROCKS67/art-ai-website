import { Container, SectionLabel, Button } from './components/ui'
import { Reveal } from './components/motion'
import './TeamPage.css'

const teamProfiles = [
  {
    name: 'Jack Rockell',
    role: 'Co-founder & Director',
    focus: 'Technical',
    location: 'Southminster, Essex',
    bio: 'Director of Shift AI Technology Ltd. Leads product build and technical delivery across Shift’s AI systems.',
    photo: '/jack-rockell.png',
    email: 'jack@shiftaitech.com',
  },
  {
    name: 'Darren Bishop',
    role: 'Co-founder & Director',
    focus: 'Commercial',
    location: 'United Kingdom',
    bio: 'Director of Shift AI Technology Ltd. Leads commercial partnerships and client relationships.',
    photo: '/darren-bishop.png',
    email: 'darren@shiftaitech.com',
  },
]

export default function TeamPage() {
  return (
    <div className="subpage team-page">
      <section className="subpage-hero">
        <Container>
          <Reveal>
            <SectionLabel>Team</SectionLabel>
            <h1 className="subpage-title">Meet the people behind Shift</h1>
            <p className="subpage-sub">
              Founder-led. Directors Jack Rockell and Darren Bishop run Shift AI Technology Ltd.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="team-grid">
            {teamProfiles.map((member, i) => (
              <Reveal key={member.email} as="article" className="team-card" delay={i * 0.07}>
                <div className="team-card-header">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-avatar team-avatar--photo"
                    width={52}
                    height={52}
                    loading="lazy"
                  />
                  <div>
                    <h2 className="team-name">{member.name}</h2>
                    <p className="team-role">
                      {member.role}
                      {member.focus ? ` · ${member.focus}` : ''}
                    </p>
                    <p className="team-location">{member.location}</p>
                  </div>
                </div>
                <p className="team-bio">{member.bio}</p>
                <div className="team-links">
                  <a href={`mailto:${member.email}`} className="team-link">
                    Email
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
            ))}
          </div>

          <div className="team-cta">
            <Button href="/#contact">Start a Project</Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
