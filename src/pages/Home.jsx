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
            <img src="src/images/piatauniversitati.jpg"></img>
          <div className="glass-label">Piata Universitatii</div>
        </div>
        <div className="item medium">
          <h3>Micul Paris</h3>
          <p>Arhitectura eleganta si atmosfera sa urbana i-au adus in <a href="https://ro.wikipedia.org/wiki/Belle_%C3%89poque">Belle Epoque</a> supranumele de "Micul Paris".</p>
        </div>
        <div className="item tall image-3">
            <img src="https://thumbs.dreamstime.com/b/romanian-athenaeum-ateneul-roman-romanian-opera-house-bucuresti-romania-bucharest-romania-june-interior-ceiling-224615591.jpg"></img>
            <div className="glass-label">Ateneul Român</div>
        </div>
        <div className="item medium text-accent">
          <h3>Prosperitate Economica</h3>
          <p>Din punct de vedere economic, Bucuresti este cel mai prosper oras din Romania, si este unul dintre principalele centre industriale si noduri de transport in Europa.</p>
        </div>
      </section>
    </main>
  );
}