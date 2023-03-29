import './path.css';
import taroticon from "../../assets/imgs/tarotReadingIcon.png"


const path = () => {
  return (
    <section id="path">
        <div className="path-container">
            <h1>CHOOSE YOUR PATH</h1>
            <div className="tarotreading-container">
                <img src={taroticon} alt="tarot-icon" />
                
            </div>
            <div className="horoscope-container">
                
            </div>
            <div className="crystals-container">
                
            </div>
        </div>
    </section>
  );
}

export default path;