import './hero.css';
import videoTarot from '../../assets/videoTarot.mp4'
import trionfiGIF from '../../assets/trionfiBUN_VP9.webm'
import React from 'react'
import downarrow from "../../assets/imgs/downarrow.png"
import downarrow2 from "../../assets/imgs/downarrow2.png"


const hero = () => {
  return (
    <section>
        <div className="welcome">
            <div className="overlay">

            </div>
            <video id='videoTarot' src={videoTarot} autoPlay loop muted/>
            <div className="content">
              <h1>welcome to</h1>
              {/* <p>Trionfi</p> */}
              <video src={trionfiGIF} autoPlay loop muted/>
              <a href="#path"><img src={downarrow} alt="downarrow" /></a>
            </div>
        </div>
    </section>
  );
}

export default hero;
