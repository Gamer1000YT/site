export default function Explore() {
  const spots = [
    { title: "Ateneul Român", cat: "Cultură", img: "https://fge-strapi.s3.eu-central-1.amazonaws.com/img_events_harta_locurilor_5887e3e225.jpg" },
    { title: "Cartierul Cotroceni", cat: "Arhitectură", img: "https://www.grandavenue.ro/wp-content/uploads/2018/12/imagine-princpala-cotroceni0.jpg" },
    { title: "Palatul Primăverii", cat: "Istorie", img: "https://incotro.olx.ro/wp-content/uploads/2025/09/Palatul-Primaverii-din-Bucuresti.jpg" }
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