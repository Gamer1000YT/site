import './App.css'

function App() {
  return (
    <div className="site-wrapper">
      <nav className="navbar">
        <div className="logo">DESPRE BUCUREȘTI<span></span></div>
        <div className="nav-links">
          <a href="#">Arhitectură</a>
          <a href="#">Lifestyle</a>
          <a href="#">Evenimente</a>
        </div>
      </nav>

      <header className="main-header">
        <div className="accent-line"></div>
        <h1 className="glitch-text">Urban<span>Vibe</span></h1>
        <p className="subtitle">Bucureștiul nu este un oraș, este o stare de spirit.</p>
      </header>

      <section className="bento-grid">
        <div className="item large image-1">
          <div className="glass-label">Centrul Vechi</div>
          <img src="https://hello-hotels-bucuresti.continentalhotels.ro/wp-content/uploads/sites/9/2020/09/16-9-38329081-.jpg"></img>
        </div>
        <div className="item medium">
          <h3>Minimalism Socialist</h3>
          <p>Contrastul brutalist dintre Casa Poporului și noile hub-uri tehnologice.</p>
        </div>
        
        <div className="">

        </div>
        <div className="item tall image-3">
            <div className="glass-label">Ateneul Român</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifSczjnO0ZZOURv_BbsOR6y5JXRmhifcIfg&s"></img>
        </div>
      </section>

    </div>
  )
}

export default App