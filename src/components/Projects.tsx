const PROJECTS = [
  {
    title: 'Brewery Finder',
    year: '2019',
    tags: ['JavaScript', 'REST API'],
    desc: 'Location-based brewery discovery using the Open Brewery DB API.',
    github: 'https://github.com/rj-ortega',
  },
  {
    title: 'Ani Lobby',
    year: '2019',
    tags: ['JavaScript', 'Jikan API'],
    desc: 'Anime browsing and search app powered by the Jikan REST API.',
    github: 'https://github.com/rj-ortega',
  },
  {
    title: 'Hackathon: Develop Denver',
    year: '2019',
    tags: ['Hackathon', 'JavaScript'],
    desc: 'Project built during the Develop Denver hackathon under time constraints.',
    github: 'https://github.com/rj-ortega',
  },
  {
    title: 'Game Lobby',
    year: '2019',
    tags: ['JavaScript'],
    desc: 'A multiplayer game lobby interface built as part of bootcamp curriculum.',
    github: 'https://github.com/rj-ortega',
  },
  {
    title: 'Rhyme Time',
    year: '2019',
    tags: ['JavaScript', 'API'],
    desc: 'A rhyming word finder app using a dictionary API.',
    github: 'https://github.com/rj-ortega',
  },
  {
    title: 'Hgraph API Widget',
    year: '2025',
    tags: ['React', 'TypeScript', 'GraphQL'],
    desc: 'Live Hedera blockchain data visualization using the Hgraph GraphQL API.',
    github: 'https://github.com/rj-ortega',
    coming: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
        <span style={{ color: '#6366f1', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          Projects
        </span>
        <div style={{ width: '32px', height: '1px', background: '#21262d' }} />
      </div>

      <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#e2e8f0', letterSpacing: '-0.5px', marginBottom: '28px' }}>
        Things I've built
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        maxWidth: '900px',
      }}>
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            style={{
              background: project.coming ? 'transparent' : '#161b22',
              border: `1px ${project.coming ? 'dashed' : 'solid'} #21262d`,
              borderRadius: '10px',
              padding: '18px',
              transition: 'border-color 0.15s',
              cursor: project.coming ? 'default' : 'pointer',
              display: 'flex',
              flexDirection: 'column',
            }}
            onMouseEnter={e => { if (!project.coming) e.currentTarget.style.borderColor = '#373e47' }}
            onMouseLeave={e => { if (!project.coming) e.currentTarget.style.borderColor = '#21262d' }}
          >
            {project.coming ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '6px' }}>
                <span style={{ fontSize: '20px', color: '#21262d' }}>+</span>
                <span style={{ fontSize: '12px', color: '#6e7681' }}>{project.title}</span>
                <span style={{ fontSize: '11px', color: '#373e47' }}>Coming soon</span>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '7px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#e2e8f0' }}>{project.title}</span>
                  <span style={{ fontSize: '11px', color: '#6e7681' }}>{project.year}</span>
                </div>
                <p style={{ fontSize: '12px', color: '#8b949e', lineHeight: 1.6, marginBottom: '13px', flex: 1 }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        background: 'rgba(99,102,241,0.1)',
                        border: '1px solid rgba(99,102,241,0.15)',
                        color: '#818cf8',
                        fontSize: '10px',
                        padding: '2px 7px',
                        borderRadius: '4px',
                      }}>{tag}</span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '11px', color: '#6e7681', marginLeft: '8px', whiteSpace: 'nowrap' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                    onMouseLeave={e => e.currentTarget.style.color = '#6e7681'}
                  >
                    GitHub ↗
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}