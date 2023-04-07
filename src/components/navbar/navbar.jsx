import './navbar.css';
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="title">
          <Link to="/"><h1>Trionfi</h1></Link>
        </div>
        <div className="nav-list">
          <Link to="/tarotreading"><h2>Tarot Reading</h2></Link>
          <Link to="/horoscopepage"><h2>Horoscope</h2></Link>
          <Link to="/crystalspage"><h2>Crystals</h2></Link>
        </div>
        
      </div>
    </nav>
  );
}

export default navbar;