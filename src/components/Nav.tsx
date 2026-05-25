const LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Nav() {
  return (
    <>
      <div style={{
        height: '3px',
        background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
      }} />
      <nav style={{
        background: 'rgba(13,17,23,0.95)',
        borderBottom: '1px solid #21262d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5rem',
        height: '52px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(8px)',
      }}>
        <span style={{ fontWeight: 800, color: '#e2e8f0', fontSize: '15px', letterSpacing: '-0.3px' }}>
          rj<span style={{ color: '#6366f1' }}>.</span>dev
        </span>
        <div style={{ display: 'flex', gap: '24px' }}>
          {LINKS.map(link => (
            <span
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                style={{ color: '#8b949e', fontSize: '13px', transition: 'color 0.15s', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
                >
                {link}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}