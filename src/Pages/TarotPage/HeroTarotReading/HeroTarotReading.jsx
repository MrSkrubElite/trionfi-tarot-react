import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./HeroTarotReading.css";
import videoHeroTarot from "../../../assets/videoTarotReading7.m4v";
import beginButton from "../../../assets/imgs/beginButton800.png";
import FadeInOut from "../../../components/FadeInOut";

const HeroTarotReading = () => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  const extraStyles = {
    // position: "fixed",
    // top: "30px",
    // left: 0,
    // right: 0,
    // bottom: 0,
    // background: "rgba(0, 0, 0, 0.4)",
    // color: "#FFF"
  };

  return (
    <section id="sectionHeroTarot">
      <div className="heroTarotReading">
        <div className="overlayHeroTarotReading"></div>
        <video
          src={videoHeroTarot}
          className="videoHeroTarotReading"
          autoPlay
          loop
          muted
        />
        <div className="contentHeroTarotReading">
          <FadeInOut show={show} duration={500} style={extraStyles}>
            <h1>Tarot</h1>
            <p>Reading</p>
            <img src={beginButton} onClick={toggleShow} alt="beginButton" />
          </FadeInOut>
        </div>
      </div>
    </section>
  );
};

export default HeroTarotReading;
