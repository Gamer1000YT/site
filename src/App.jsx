import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import History from './pages/History';
import Locuri from './pages/Locuri';
import './App.css';

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <nav className="navbar">
          <Link to="/" className="logo">DESPRE BUCURESTI<span>.</span></Link>
          <div className="nav-links">
            <Link to="/">Acasa</Link>
            <Link to="/explore">Imagini</Link>
            <Link to="/history">Istoria</Link>
            <Link to="/locuri">Locuri</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/history" element={<History />} />
          <Route path="/locuri" element={<Locuri />} />
        </Routes>

        <footer className="modern-footer">
          <div className="footer-line"></div>
        </footer>
      </div>
    </Router>
  );
}

export default App;