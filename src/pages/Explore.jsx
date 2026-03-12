export default function Explore() {
  const spots = [
    { title: "Ateneul Român", cat: "Cultură", img: "https://images.unsplash.com/photo-1629116740913-912f2759885e" },
    { title: "Cartierul Cotroceni", cat: "Arhitectură", img: "https://images.unsplash.com/photo-1555990116-60805ea91054" },
    { title: "Palatul Primăverii", cat: "Istorie", img: "https://images.unsplash.com/photo-1596128333423-41710b754602" }
  ];

  return (
    <main className="page-fade-in">
      <header className="page-header">
        <h1 className="outline-text">Explorează</h1>
      </header>
      
      <div className="explore-grid">
        {spots.map((spot, index) => (
          <div key={index} className="explore-card" style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${spot.img})`}}>
            <span className="category">{spot.cat}</span>
            <h3>{spot.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}