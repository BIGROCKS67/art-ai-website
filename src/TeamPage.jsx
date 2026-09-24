import { Container, SectionLabel, Button } from './components/ui'
import { Reveal } from './components/motion'
import './TeamPage.css'

const teamProfiles = [
  {
    name: 'Jack Rockell',
    role: 'Co-founder & Director',
    focus: 'Technology',
    location: 'Southminster, Essex',
    bio: 'Co-founder of Shift AI Technology Ltd. Developer responsible for Shift’s technology — products, systems, and technical delivery.',
    photo: '/jack-rockell.png',
    email: 'jack@shiftaitech.com',
    linkedin: 'https://www.linkedin.com/in/jack-rockell-841482267/',
  },
  {
    name: 'Darren Bishop',
    role: 'Co-founder & Director',
    focus: 'Business & partnerships',
    location: 'United Kingdom',
    bio: 'Co-founder of Shift AI Technology Ltd. Leads business, commercial relationships, and partnerships.',
    photo: '/darren-bishop.png',
    email: 'darren@shiftaitech.com',
    linkedin: 'https://www.linkedin.com/in/dwbishop/',
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
              Co-founders Jack Rockell and Darren Bishop. Jack leads technology; Darren leads business and partnerships.
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
