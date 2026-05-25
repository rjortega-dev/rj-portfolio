export default function About() {
  return (
    <section id="about" style={{ padding: '80px 2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
        <span style={{ color: '#6366f1', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          About
        </span>
        <div style={{ width: '32px', height: '1px', background: '#21262d' }} />
      </div>

      <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#e2e8f0', letterSpacing: '-0.5px', marginBottom: '20px' }}>
        Non-linear path, clear direction
      </h2>

      <div style={{ maxWidth: '580px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {[
          "Born and raised in Venezuela, I came to the US at 14 without knowing much English. After years bouncing between jobs and industries, I stumbled into coding and haven't looked back.",
          "I joined Flatiron School and found the thing that finally stuck — software development. Since then I've been building with React, TypeScript, and JavaScript professionally.",
          "Currently going deeper into data science and analytics through a second bootcamp, and looking for roles that sit at the intersection of engineering and data.",
          "In my current role I've been building AI-powered features with OpenAI's API alongside React and TypeScript. On the data side, I'm working through a data science bootcamp — building analysis pipelines with Python, PySpark, and Pandas, and visualizing results in Tableau.",
        ].map((p, i) => (
          <p key={i} style={{ fontSize: '14px', color: '#8b949e', lineHeight: 1.8 }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}