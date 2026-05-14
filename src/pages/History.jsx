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
            <h3>Prima Mentiune</h3>
            <p>Prima mentiune a localitatii apare in 1459, in timpul celei de-a doua domnii a lui Vlad Tepes.</p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="year">1862</span>
          <div className="timeline-content">
            <h3>Capitala României</h3>
            <p>In anul 1862, Bucuresti devine capitala <a href="https://ro.wikipedia.org/wiki/Principatele_Unite_ale_Moldovei_%C8%99i_%C8%9A%C4%83rii_Rom%C3%A2ne%C8%99ti">Principatelor Unite.</a> De atunci a suferit schimbari continue, devenind centrul scenei artistice, culturale si mass-media romanesti.</p>
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