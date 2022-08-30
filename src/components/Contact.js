import Maps from "./Images/Maps.png"
import "./Contact.css"
export default function Contact() {
    return (
        <div className="Contact-container">
        <div className="Contact-img-container">
          <img src={Maps} alt="Maps.jpg" id="Maps.jpg" />
        </div>
        <h2 className="Contact-text">

        <br />498 Marion Ln. 
        <br />Paramus, NJ 07652  
        <br />
        <br />Reach out for a Quote!
        <br />
        <br />Tel: (201) 615-2515
        <br /> Email: milanosmasonry@yahoo.com
    

        </h2>
      </div>
    );
  }