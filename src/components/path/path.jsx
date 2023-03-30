import './path.css';
import taroticon from "../../assets/imgs/tarotReadingIcon.png"
import starsBg from '../../assets/starsBg.mp4'

const path = () => {
  return (
    <section id="path">
        <div className="path-container">

            <div className="overlay-path"></div>

            <video src={starsBg} autoPlay loop muted className="starsBg"/>

            <div className="content-path">
              <div className="content-path-title">
                <h1>CHOOSE YOUR PATH</h1>
              </div>

              <div className="choose-path">
                <div className="tarotreading-container">
                    <img src={taroticon} alt="tarot-icon" />
                    
                </div>
                <div className="horoscope-container">
                    
                </div>
                <div className="crystals-container">
                    
                </div>
              </div>
              
              
            </div>

            
        </div>
    </section>
  );
}

export default path;