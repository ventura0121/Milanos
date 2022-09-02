import Navbar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Services from "./components/Services"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/Projects" element={<Projects />} /> */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App