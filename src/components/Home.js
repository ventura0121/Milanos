import Rebar from '../components/Images/Rebar.jpg'
import "./Home.css"

export default function Home() {
    return (
    <div className="welcome-container">
    <div className="welcome-img-container">
        
        {/* <div style ="background-image: url('../components/Images/Rebar.jpg');"></div> */}
        {/* <img src={Rebar} alt="Rebar.jpg" id="Rebar.jpg" /> */}
    </div>
    <h2 className="welcome-text">
        Quality in Every Project
    <br /> Paramus | New Jersey
    </h2>
  </div>
);
}