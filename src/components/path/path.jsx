import './path.css';
import taroticon from "../../assets/imgs/tarotReadingIcon.png"
import starsBg from '../../assets/starsBg.mp4'
import tarotpolaroid from "../../assets/imgs/tarotreading.png"
import horoscope from "../../assets/imgs/horoscope.png"
import crystals from "../../assets/imgs/crystals.png"

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
                    <img src={tarotpolaroid} alt="tarot-reading" className="hvr-grow-shadow hoverrotate" />
                    
                </div>
                <div className="horoscope-container">
                  <img src={horoscope} alt="horoscope" className="hvr-grow-shadow hoverrotate"/>

                </div>
                <div className="crystals-container">
                  <img src={crystals} alt="crystals" className="hvr-grow-shadow hoverrotate"/>

                </div>
              </div>
              
              
            </div>

            
        </div>
    </section>
  );
}

export default path;