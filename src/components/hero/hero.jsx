import './hero.css';
import videoTarot from '../../assets/videoTarot.mp4'

const hero = () => {
  return (
    <section>
        <div className="mata">
            <div className="overlay">

            </div>
            <video src={videoTarot} autoPlay loop muted/>
            <div className="content">
              <h1>welcome to</h1>
              <p>Trionfi</p>
            </div>
        </div>
    </section>
  );
}

export default hero;
