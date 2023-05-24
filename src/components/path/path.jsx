import './path.css';
import taroticon from "../../assets/imgs/tarotReadingIcon.png"
import starsBg from '../../assets/starsBg4.m4v'
import tarotpolaroid from "../../assets/imgs/tarotreading.png"
import horoscope from "../../assets/imgs/horoscope.png"
import crystals from "../../assets/imgs/crystals.png"
import React from 'react'
import { Link } from "react-router-dom";

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
                    <Link to="tarotreading"><img src={tarotpolaroid} alt="tarot-reading" className="hvr-grow-shadow hoverrotate" /></Link>
                    
                    
                </div>
                <div className="horoscope-container">
                  <Link to="/horoscopepage"><img src={horoscope} alt="horoscope" className="hvr-grow-shadow hoverrotate"/></Link>
                  

                </div>
                <div className="crystals-container">
                  <Link to="/crystalspage"><img src={crystals} alt="crystals" className="hvr-grow-shadow hoverrotate"/></Link>
                  

                </div>
              </div>
              
              
            </div>

            
        </div>
    </section>
  );
}

export default path;