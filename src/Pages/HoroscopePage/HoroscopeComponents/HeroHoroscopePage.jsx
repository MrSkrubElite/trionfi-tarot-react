import React from 'react'
import './HeroHoroscopePage.css';
import videoHeroHoroscopePage from "../../../assets/videoHoroscope.mp4"
import beginButtonHoroscope from "../../../assets/imgs/beginButtonHoroscope800.png"


const HeroHoroscopePage = () => {
    return (
        <section id='sectionHeroHoroscopePage'>
        <div className="HeroHoroscopePage">
            <div className="overlayHeroHoroscopePage">

            </div>
            <video src={videoHeroHoroscopePage} className='videoHeroHoroscopePage' autoPlay loop muted/>
            <div className="contentHeroHoroscopePage">
              <p>Horoscope</p>
              <img src={beginButtonHoroscope} alt="beginButton" />
            </div>
        </div>
    </section>
    )
}

export default HeroHoroscopePage