export default function History() {
  return (
    <main className="page-fade-in">
      <header className="page-header">
        <h1 className="outline-text">Cronologie</h1>
        <p className="subtitle">De la cetatea lui Vlad Țepeș la metropola europeană.</p>
      </header>

      <section className="timeline-container">
        <div className="timeline-item">
          <span className="year">1459</span>
          <div className="timeline-content">
            <h3>Prima Atestare</h3>
            <p>Documentul semnat de Vlad Țepeș care pune Bucureștiul pe hartă.</p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="year">1862</span>
          <div className="timeline-content">
            <h3>Capitala României</h3>
            <p>Bucureștiul devine oficial centrul politic al Principatelor Unite.</p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="year">1900</span>
          <div className="timeline-content">
            <h3>Micul Paris</h3>
            <p>Perioada de glorie a arhitecturii neoclasice și a vieții boeme.</p>
          </div>
        </div>
      </section>
    </main>
  );
}