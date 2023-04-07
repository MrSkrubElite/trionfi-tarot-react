import React from 'react'
import './HeroCrystalsPage.css';
import videoHeroCrystalsPage from "../../../assets/videoCrystals.mp4"
import beginButtonCrystals from "../../../assets/imgs/beginButtonCrystals800.png"


const HeroCrystalsPage = () => {
    return (
        <section id='sectionHeroCrystalsPage'>
        <div className="HeroCrystalsPage">
            <div className="overlayHeroCrystalsPage">

            </div>
            <video src={videoHeroCrystalsPage} className='videoHeroCrystalsPage' autoPlay loop muted/>
            <div className="contentHeroCrystalsPage">
              <p>Crystals</p>
              <img src={beginButtonCrystals} alt="beginButton" />
            </div>
        </div>
    </section>
    )
}

export default HeroCrystalsPage