import React from 'react'
import './HeroTarotReading.css';
import videoHeroTarot from "../../../assets/videoTarotReading.mp4"
import beginButton from "../../../assets/imgs/beginButton800.png"


const HeroTarotReading = () => {
    return (
        <section id='sectionHeroTarot'>
        <div className="heroTarotReading">
            <div className="overlayHeroTarotReading">

            </div>
            <video src={videoHeroTarot} className='videoHeroTarotReading' autoPlay loop muted/>
            <div className="contentHeroTarotReading">
              <h1>Tarot</h1>
              <p>Reading</p>
              <img src={beginButton} alt="beginButton" />
            </div>
        </div>
    </section>
    )
}

export default HeroTarotReading