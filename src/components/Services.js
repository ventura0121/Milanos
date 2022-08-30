import "./Services.css"
import CompactedSoil from "./Images/CompactedSoil.jpg"
import ConcretePour from "./Images/ConcretePour.jpg"
import ConcretePour2 from "./Images/ConcretePour2.jpg"
import Demo from "./Images/Demo.png"
import Fill from "./Images/Fill.jpg"
import FinishedConc from "./Images/FinishedConc.jpg"
import Foundation from "./Images/Foundation.jpg"
import Pit from "./Images/Pit.jpg"
import Rebar from "./Images/Rebar.jpg"

export default function Services() {
    return (
        <div className="Services-container">
        <h1>Here at Milano's we provide only the best in:</h1>
        <h2 className="Services-text">
            <ul>
            <li>Chimneys & Fireplaces</li>
            <li>Brick Laying & Pointing</li>
            <li>Stairs & Walkways</li>
            <li>Patios</li>
            <br/>
            <li>Cultured Stone</li>
            <li>Retaining Walls</li>
            <li>Concrete Work</li>
            <li>Foundations</li>
            <br/>
            <li>Driveways</li>
            <li>Pavers</li>
            <li>Excavation</li>
            <li>Demolition</li>
            </ul>
        </h2>
        <h2>See some of the company highlights below!</h2>
        <div className="img-wrapper">
            <div><img src={Rebar} alt="Rebar.jpg" id="Rebar.jpg" /></div>
            <div><img src={CompactedSoil} alt="CompactedSoil.jpg" id="CompactedSoil.jpg" /></div>
            <div><img src={ConcretePour} alt="ConcretePour.jpg" id="ConcretePour.jpg" /></div>
            <div><img src={ConcretePour2} alt="ConcretePour2.jpg" id="ConcretePour2.jpg" /></div>
            <div><img src={Demo} alt="Demo.jpg" id="Demo.jpg" /></div>
            <div><img src={Fill} alt="Fill.jpg" id="Fill.jpg" /></div>
            <div><img src={FinishedConc} alt="FinishedConc.jpg" id="FinishedConc.jpg" /></div>
            <div><img src={Foundation} alt="Foundation.jpg" id="Foundation.jpg" /></div>
            <div><img src={Pit} alt="Pit.jpg" id="Pit.jpg" /></div>
        </div>
      </div>
    );
  }