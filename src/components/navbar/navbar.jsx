import './navbar.css';


const navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="title">
          <a href="#"><h1>Trionfi</h1></a>
        </div>
        <div className="nav-list">
          <a href="#"><h2>Tarot Reading</h2></a>
          <a href="#"><h2>Horoscope</h2></a>
          <a href="#"><h2>Crystals</h2></a>
        </div>
        
      </div>
    </nav>
  );
}

export default navbar;