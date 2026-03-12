// src/pages/Home.jsx
import './App.css'
export default function Home() {
  return (
    <main className="page-fade-in">
      <header className="main-header">
        <div className="accent-line"></div>
        <h1 className="glitch-text">Urban<span>Vibe</span></h1>
        <p className="subtitle">Bucureștiul nu este un oraș, este o stare de spirit.</p>
      </header>

      <section className="bento-grid">
        <div className="item large image-1">
          <div className="glass-label">Centrul Vechi</div>
        </div>
        <div className="item medium">
          <h3>Minimalism Socialist</h3>
          <p>Contrastul brutalist dintre Casa Poporului și noile hub-uri tehnologice.</p>
        </div>
        <div className="item tall image-3">
            <div className="glass-label">Ateneul Român</div>
        </div>
        <div className="item medium text-accent">
          <h3>Cafea de Specialitate</h3>
          <p>Cea mai densă concentrație de cafenele premium.</p>
        </div>
      </section>
    </main>
  );
}