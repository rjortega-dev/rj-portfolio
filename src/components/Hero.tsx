export default function Hero() {
  return (
    <section style={{ padding: '72px 2.5rem 60px', position: 'relative', overflow: 'hidden' }}>
      {/* Dot grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, #21262d 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        opacity: 0.5,
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '660px' }}>
        {/* Status pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: '20px', padding: '4px 12px', marginBottom: '20px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3fb950', display: 'inline-block' }} />
          <span style={{ color: '#818cf8', fontSize: '11px', fontWeight: 500, letterSpacing: '0.5px' }}>
            Open to opportunities
          </span>
        </div>

        <h1 style={{ fontSize: '46px', fontWeight: 800, color: '#e2e8f0', letterSpacing: '-1.5px', lineHeight: 1.08, marginBottom: '8px' }}>
          Ricardo<br />Ortega
        </h1>

        <p style={{ fontSize: '16px', color: '#6366f1', fontWeight: 500, letterSpacing: '0.5px', marginBottom: '14px' }}>
          Software Developer · Data Analyst
        </p>

        <p style={{ fontSize: '14px', color: '#8b949e', lineHeight: 1.75, marginBottom: '28px', maxWidth: '480px' }}>
          Building web apps and data pipelines. Background in React and TypeScript —
          currently deepening skills in Python, data analysis, and visualization.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '44px' }}>
          <a
            href="https://github.com/rjortega-dev/"
            target="_blank"
            rel="noreferrer"
            style={{ background: '#6366f1', color: '#fff', padding: '9px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 600 }}
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/rj-ortega"
            target="_blank"
            rel="noreferrer"
            style={{ background: 'transparent', color: '#e2e8f0', padding: '9px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, border: '1px solid #21262d' }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '32px', paddingTop: '28px', borderTop: '1px solid #21262d' }}>
          {[
            { n: '6+', label: 'Years coding' },
            { n: '2', label: 'Bootcamps' },
            { n: 'Denver', label: 'Colorado' },
          ].map(({ n, label }) => (
            <div key={label}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#e2e8f0' }}>{n}</div>
              <div style={{ fontSize: '11px', color: '#6e7681', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}